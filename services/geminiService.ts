import { GoogleGenAI, Type } from "@google/genai";
import { OnboardingData, Itinerary } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const accessibilitySchema = {
    type: Type.OBJECT,
    properties: {
        strollerFriendly: { type: Type.BOOLEAN, description: "유모차 이용 가능 여부." },
        nursingRoom: { type: Type.BOOLEAN, description: "수유실 여부." },
        parking: { type: Type.BOOLEAN, description: "주차장 여부." },
        indoor: { type: Type.BOOLEAN, description: "실내 활동 가능 여부." },
    },
    required: ["strollerFriendly", "nursingRoom", "parking", "indoor"]
};

const spotSchema = {
    type: Type.OBJECT,
    properties: {
        spotName: { type: Type.STRING, description: "장소 이름." },
        description: { type: Type.STRING, description: "해당 장소에 대한 간략하고 흥미로운 설명과 가족에게 좋은 이유." },
        ageRange: { type: Type.STRING, description: "추천 연령대, 예: '3-5세', '모든 연령'." },
        difficulty: { type: Type.STRING, description: "난이도: 'low', 'medium', 또는 'high'." },
        accessibility: accessibilitySchema,
        lat: { type: Type.NUMBER, description: "장소의 위도." },
        lng: { type: Type.NUMBER, description: "장소의 경도." },
    },
    required: ["spotName", "description", "ageRange", "difficulty", "accessibility", "lat", "lng"]
};

const itinerarySchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "여행 계획에 어울리는 창의적이고 매력적인 제목. 예: '꼬마 탐험가들을 위한 제주 어드벤처'"
        },
        days: {
            type: Type.ARRAY,
            description: "일일 계획의 배열. 날짜 수는 사용자의 요청과 일치해야 합니다.",
            items: {
                type: Type.OBJECT,
                properties: {
                    dayIndex: {
                        type: Type.INTEGER,
                        description: "여행일자 번호, 1부터 시작."
                    },
                    slots: {
                        type: Type.ARRAY,
                        description: "하루의 시간대 배열: morning, afternoon, evening.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                timeSlot: {
                                    type: Type.STRING,
                                    description: "시간대: 'morning', 'afternoon', 또는 'evening'."
                                },
                                spot: {
                                    ...spotSchema,
                                    description: "해당 시간대에 추천하는 주요 장소.",
                                },
                                alternatives: {
                                    type: Type.ARRAY,
                                    description: "해당 시간대에 대한 2-3개의 대체 추천 장소 배열.",
                                    items: spotSchema
                                }
                            },
                            required: ["timeSlot", "spot", "alternatives"]
                        }
                    }
                },
                required: ["dayIndex", "slots"]
            }
        },
        warnings: {
            type: Type.ARRAY,
            description: "중요한 경고나 팁 목록. 예: '2일차 오전과 오후 장소 간 이동 시간이 길 수 있습니다.'",
            items: {
                type: Type.STRING
            }
        }
    },
    required: ["title", "days", "warnings"]
};


const createPrompt = (data: OnboardingData): string => {
  const { tripLength, familyMembers, preferences, accessibility } = data;
  const childAges = familyMembers.childAges.join(', ');
  
  return `
    당신은 대한민국 제주도를 방문하는 가족을 위한 전문 여행 플래너입니다. 당신의 목표는 안전하고, 재미있고, 실행 가능한 여행 일정을 만드는 것입니다.

    **사용자 요청:**
    - **여행 기간:** ${tripLength}일.
    - **가족 구성:** 성인 ${familyMembers.adults}명, 아동 ${familyMembers.children}명 (나이: ${childAges}).
    - **선호 활동:** ${preferences.activities.join(', ')}을(를) 즐깁니다.
    - **선호 속도:** ${preferences.pace}. 'short'는 장소 간 이동 시간을 최소화, 'long'은 더 좋은 장소를 위해 긴 이동도 괜찮음, 'normal'은 균형을 의미합니다.
    - **필요 편의시설:**
        - 유모차 필요: ${accessibility.stroller ? '예' : '아니요'}. 유모차 친화적인 경로와 장소를 우선적으로 추천해주세요.
        - 수유실 필요: ${accessibility.nursingRoom ? '예' : '아니요'}. 가능하다면 수유실이 있는 장소를 포함해주세요.

    **당신의 임무:**
    이 가족을 위한 맞춤형 ${tripLength}일 제주 여행 일정을 생성하세요.

    **지침:**
    1.  **논리적인 동선:** 사용자가 선호하는 여행 속도에 맞춰 이동 시간을 최소화하도록 장소를 지리적으로 배열하세요. 'short' 속도인 경우, 하루의 활동을 한 지역(예: 동부, 서부, 남부)에 집중시키세요.
    2.  **연령 적합성:** 추천하는 모든 장소는 반드시 ${childAges}세 어린이에게 적합해야 합니다. 어린이에게 위험하거나 흥미가 없을 만한 장소는 피하세요.
    3.  **가족 중심:** 자연, 체험, 그리고 가족 친화적인 맛집이나 카페 등 다양한 활동을 포함하세요.
    4.  **일정 조율:** 매일 오전, 오후, 저녁 계획을 제공하세요. 만약 4세 미만의 어린 아이가 있다면, 저녁 시간은 편안한 해변 산책이나 숙소 근처에서의 저녁 식사처럼 여유로운 활동으로 구성하는 것을 고려하세요 (숙소는 추천 장소 근처에 있다고 가정).
    5.  **편의시설:** 편의시설 요구사항을 엄격히 준수하세요. '유모차'가 필요하다고 응답했다면, 명확한 접근 경로가 없는 한 계단이 많거나 험한 지형의 장소는 추천하지 마세요.
    6.  **대체 장소:** 각 주요 추천 장소마다 근처에 있는 2-3개의 다양한 대체 장소를 제공하세요.
    7.  **출력:** 제공된 JSON 형식으로 일정을 반환하세요. JSON 객체 앞뒤에 다른 텍스트를 추가하지 마세요. 'days' 배열은 일정의 핵심이며, 절대로 생략해서는 안 됩니다.
  `;
};


export const generateItinerary = async (data: OnboardingData): Promise<Itinerary> => {
  const prompt = createPrompt(data);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: itinerarySchema,
      temperature: 0.8,
    },
  });

  try {
    const jsonText = response.text.trim();
    // 가끔 모델이 JSON을 마크다운으로 감싸는 경우가 있어 제거합니다.
    const cleanJsonText = jsonText.replace(/^```json\s*|```$/g, '');
    const parsedData = JSON.parse(cleanJsonText);
    
    // 응답 구조가 올바른지 기본적으로 확인합니다.
    if (!parsedData.days || !Array.isArray(parsedData.days)) {
        throw new Error("API로부터 잘못된 구조의 일정을 받았습니다.");
    }

    return parsedData as Itinerary;
  } catch (e) {
    console.error("Gemini 응답 파싱 실패:", response.text);
    throw new Error("생성된 계획을 이해할 수 없습니다. 형식이 잘못되었을 수 있습니다.");
  }
};