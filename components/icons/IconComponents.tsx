
import React from 'react';

// Generic Icon Props
type IconProps = React.SVGProps<SVGSVGElement>;

export const Leaf: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h1" />
    <path d="M11 20v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z" />
  </svg>
);

export const RefreshCw: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const Users: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export const Calendar: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

export const Footprints: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 16v-2.38c0-.97.5-1.84 1.3-2.31l5.4-3.6c.9-.6 2.1-.6 3 0l5.4 3.6c.8.47 1.3 1.34 1.3 2.31V16"/><path d="M4 20v-3.38c0-.97.5-1.84 1.3-2.31l5.4-3.6c.9-.6 2.1-.6 3 0l5.4 3.6c.8.47 1.3 1.34 1.3 2.31V20"/><path d="M12 19v-5.5"/><path d="M12 4v2.5"/></svg>
);

export const Baby: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12.5a5 5 0 0 0 5 5"/><path d="M9 8.5a5 5 0 0 1 5 5"/><path d="M12 18a3.5 3.5 0 0 0 3.5-3.5c0-.62-.17-1.2-.45-1.71"/><path d="M12 6.36c-1.1 0-2 .9-2 2.04 0 1.54.5 2.6 1.22 3.3.4.42.85.78 1.33 1.09.2.13.42.23.65.31.25.09.5.15.75.18.3.03.6.03.9 0 .3-.03.6-.09.85-.18.23-.08.45-.18.65-.31.48-.3.93-.67 1.33-1.09.72-.7 1.22-1.76 1.22-3.3C18 7.26 16.33 6 14 6c-.95 0-1.68.5-2 1.04C11.68 6.5 10.95 6 10 6 8.33 6 7 7.26 7 8.64c0 1.54.5 2.6 1.22 3.3a5.52 5.52 0 0 0 1.33 1.09"/><path d="M16 6.36c.22-.22.36-.36.36-.36a2 2 0 0 0-2.83-2.83c0 0-.14.14-.36.36"/><path d="M8 6.36C7.78 6.14 7.64 6 7.64 6a2 2 0 0 0-2.83 2.83c0 0 .14.14.36.36"/></svg>
);

export const Trees: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 10v.2A3 3 0 0 1 7 13v5H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1"/><path d="M14 14v.2a3 3 0 0 0 3 2.8v5h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1"/><path d="M12 12v.2a3 3 0 0 0 3 2.8v4.5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V15a3 3 0 0 0 3-2.8V12z"/><path d="M12 2v10"/></svg>
);

export const Activity: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);

export const Utensils: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/></svg>
);

export const Wind: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.7 7.7a2.5 2.5 0 1 0 0-5.5 2.5 2.5 0 0 0 0 5.5z"/><path d="M12.5 12.5a2.5 2.5 0 1 0 0-5.5 2.5 2.5 0 0 0 0 5.5z"/><path d="M20.5 17.5a2.5 2.5 0 1 0 0-5.5 2.5 2.5 0 0 0 0 5.5z"/><path d="M17.5 15H9.5a2.5 2.5 0 0 0 0 5h8"/><path d="M12.5 10H4.5a2.5 2.5 0 1 0 0 5h8"/><path d="M17.5 5H2.5a2.5 2.5 0 0 0 0 5h15"/></svg>
);

export const BrainCircuit: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v.43a3.5 3.5 0 0 0-2.06 3.42 4 4 0 0 0 3.56 3.92 3.5 3.5 0 0 0 2.06 3.42v.43A4.5 4.5 0 1 0 12 2Z"/><path d="M12 11.5v1"/><path d="M12 7.5v1"/><path d="M12 15.5v1"/><path d="M15.5 11a.5.5 0 0 0 0-1"/><path d="M8.5 11a.5.5 0 0 0 0-1"/><path d="M14 8.5a.5.5 0 0 0 1 0h-1z"/><path d="m9 8.5a.5.5 0 0 0 1 0H9z"/><path d="M14 15.5a.5.5 0 0 0 1 0h-1z"/><path d="m9 15.5a.5.5 0 0 0 1 0H9z"/><path d="M17.5 8a.5.5 0 0 0 0-1"/><path d="M6.5 8a.5.5 0 0 0 0-1"/><path d="M17.5 16a.5.5 0 0 0 0-1"/><path d="M6.5 16a.5.5 0 0 0 0-1"/></svg>
);

export const MapPin: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const AlertTriangle: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);

export const PersonStanding: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>
);

export const ParkingCircle: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
);

export const Home: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

export const Info: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

export const ChevronDown: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

export const Replace: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 4h6v6"/><path d="M20 4 9 15"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
);

export const Sun: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

export const Moon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
