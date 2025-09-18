import React from 'react';

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const HeadsetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5a6 6 0 0 0-12 0v1.5a6 6 0 0 0 6 6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25a3.75 3.75 0 1 1-7.5 0" />
  </svg>
);

export const BGDLogoTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 150 26" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FDE047', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="text-shadow" x="-0.1" y="-0.1" width="1.2" height="1.2">
              <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.5"/>
            </filter>
        </defs>
        <text x="0" y="20" fontFamily="Arial Black, Gadget, sans-serif" fontSize="24" fill="url(#gold-gradient)" fontWeight="900" style={{filter: 'url(#text-shadow)'}}>BDG GAME</text>
    </svg>
);

export const USFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
        <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
        <path d="M0 0v30h60V0z" fill="#012169"/>
        <path d="M0 0v3h60V0zm0 6v3h60V6zm0 6v3h60v-3zm0 6v3h60v-3zm0 6v3h60v-3z" fill="#fff"/>
        <path d="M0 3v3h60V3zm0 6v3h60V9zm0 6v3h60v-3zm0 6v3h60v-3z" fill="#c8102e"/>
        <path d="M0 0v15h30V0z" fill="#012169"/>
        <g clipPath="url(#a)" fill="#fff" transform="matrix(1.5 0 0 1.5 15 7.5)">
            <g>
                <path d="M-1.9 2.5h3.8L0-4z"/>
                <path d="M-1.9-1.5h3.8L0 5z" transform="scale(1 -1)"/>
            </g>
            <g transform="rotate(72)">
                <path d="M-1.9 2.5h3.8L0-4z"/>
                <path d="M-1.9-1.5h3.8L0 5z" transform="scale(1 -1)"/>
            </g>
            <path d="M-3.8.3v-3L0-1z" transform="rotate(36)"/>
            <path d="M.3-3.8h-3L-1 0z" transform="rotate(36) scale(1 -1)"/>
            <g transform="rotate(-72)">
                <path d="M-1.9 2.5h3.8L0-4z"/>
                <path d="M-1.9-1.5h3.8L0 5z" transform="scale(1 -1)"/>
            </g>
            <path d="M-3.8.3v-3L0-1z" transform="rotate(-36)"/>
            <path d="M.3-3.8h-3L-1 0z" transform="rotate(-36) scale(1 -1)"/>
        </g>
    </svg>
);

export const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
);

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.181-3.183m-3.181-4.991-3.182-3.182a8.25 8.25 0 0 0-11.664 0l-3.181 3.182" />
  </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.868-9.934a2.25 2.25 0 0 1-1.183-1.981V5.25a2.25 2.25 0 0 0-2.25-2.25h-6.75a2.25 2.25 0 0 0-2.25 2.25v3.656c0 .903.492 1.734 1.183 1.981l6.478 3.488m-2.25-13.5 2.25 3m-2.25-3-2.25 3" />
    </svg>
);

export const PromotionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const AccountIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const BGDLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="15" fill="#373542"/>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="Arial Black, Gadget, sans-serif" fontSize="50" fill="#FDE047" fontWeight="900">
            BDG
        </text>
    </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9 6.75L2.25 6.75" />
  </svg>
);

export const LockClosedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const EyeSlashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L6.228 6.228" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

export const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
  </svg>
);

export const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
  </svg>
);

export const TeamIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM15.75 13.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-6.75Z" />
    </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export const SubordinateDataIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
  </svg>
);

export const InvitationRulesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

export const AgentServiceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a4.5 4.5 0 0 0 4.5-4.5H7.5a4.5 4.5 0 0 0 4.5 4.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75v-1.5a4.5 4.5 0 0 0-9 0v1.5" />
  </svg>
);

export const RebateRatioIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0H3M9 6.75h.008v.008H9V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V11.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

export const PromotionDataIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

// Icons for Account Page
export const VipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 48 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2,2 H46 V22 H2 Z" fill="#F59E0B" stroke="#FDE047" strokeWidth="2" />
    <path d="M5,5 L12,19 L19,5 M22,5 L26,19 L30,5 L34,19 L38,5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

export const ARWalletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path d="M6.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0Z" stroke="#ef4444" />
    <path d="m3.1 16.04 3.75-3.75m6.337 6.342-3.75-3.75M17.96 4.96l-3.75 3.75m-2.122 9.042 3.75 3.75M14.25 12l-4.125 4.125a4.125 4.125 0 0 0 5.834 5.834L20.08 17.88a4.125 4.125 0 0 0-5.834-5.834Z" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DepositIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75l-3 3m0 0l-3-3m3 3V1.5M6 21h12a2.25 2.25 0 0 0 2.25-2.25V5.25A2.25 2.25 0 0 0 18 3H6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 6 21Z" stroke="#f97316" />
  </svg>
);

export const WithdrawIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" stroke="#3b82f6" />
  </svg>
);

export const VIPShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" stroke="#10b981" />
  </svg>
);

export const GameHistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M3.75 3A1.75 1.75 0 0 0 2 4.75v14.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 19.25V4.75A1.75 1.75 0 0 0 20.25 3H3.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 6.75Zm.75 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" clipRule="evenodd" fill="#3b82f6"/>
  </svg>
);

export const TransactionHistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M3.75 3A1.75 1.75 0 0 0 2 4.75v14.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 19.25V4.75A1.75 1.75 0 0 0 20.25 3H3.75Zm13.5 4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm-3.75-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0V6Zm-3 3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 10.5 9Zm-3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z" clipRule="evenodd" fill="#10b981" />
  </svg>
);

export const DepositHistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a.375.375 0 0 1-.375-.375V6.375c0-1.036-.84-1.875-1.875-1.875H5.625Z" fill="#ef4444" />
    <path d="M12.98 2.25a.75.75 0 0 1 .75.75v3.375a.375.375 0 0 0 .375.375h3.375a.75.75 0 0 1 0 1.5h-3.375a1.875 1.875 0 0 1-1.875-1.875V3a.75.75 0 0 1 .75-.75Z" fill="#ef4444" />
  </svg>
);

export const WithdrawHistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16.84 18 1.875 18H18a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.75-.75H9.75a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 0-.75-.75H3.375Z" fill="#f97316" />
    <path d="M12.98 2.25a.75.75 0 0 1 .75.75v3.375a.375.375 0 0 0 .375.375h3.375a.75.75 0 0 1 0 1.5h-3.375a1.875 1.875 0 0 1-1.875-1.875V3a.75.75 0 0 1 .75-.75ZM20.25 10.5a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 .75.75H21a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.75-.75h-.75Z" fill="#f97316" />
  </svg>
);

export const NotificationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);

export const GiftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a8.25 8.25 0 0 1-16.5 0v-8.25a8.25 8.25 0 0 1 16.5 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25c0 4.556 3.704 8.25 8.25 8.25s8.25-3.694 8.25-8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a4.125 4.125 0 0 1 0 7.5 4.125 4.125 0 0 1 0-7.5Z" />
  </svg>
);

export const GameStatsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

export const LanguageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 7.061 14.289 7.5 15.5 7.5c1.21 0 2.319-.439 3.334-1.136M1 C1.5-1.136 4.68-1.136 6.666 0M21 5.25a48.474 48.474 0 0 0-6-.371m0 0c-1.12 0-2.233.038-3.334.114M15 5.25V3" />
  </svg>
);

export const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.424.35.534.954.26 1.431l-1.296 2.247a1.125 1.125 0 0 1-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 0 1-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 0 1-1.37-.49l-1.296-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 0 1-.26-1.431l1.296-2.247a1.125 1.125 0 0 1 1.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const FeedbackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
);

export const AnnouncementIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.097.04.195.078.296.113a2.45 2.45 0 0 1 2.212-.346l.858-.434a1.125 1.125 0 0 1 1.342.492l.867 1.5c.273.472.014 1.06-.444 1.34l-.859.434a2.45 2.45 0 0 1-2.212.346 3.447 3.447 0 0 0-.296.113c-.396.166-.71.506-.78.93l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894a2.45 2.45 0 0 1-.78-.93 3.447 3.447 0 0 0-.296-.113 2.45 2.45 0 0 1-2.212.346l-.858.434a1.125 1.125 0 0 1-1.342-.492l-.867-1.5c-.273-.472-.014-1.06.444-1.34l.859-.434a2.45 2.45 0 0 1 2.212-.346c.101-.035.199-.073.296-.113.396-.166.71-.506.78-.93l.149-.894Z" />
    </svg>
);

export const BeginnersGuideIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

export const AboutUsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
    </svg>
);


export const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const CrownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M18 9.333a3.375 3.375 0 0 0-3.375-3.375h-1.5a.75.75 0 0 0-.75.75V9h-1.5V6.75a.75.75 0 0 0-.75-.75h-1.5A3.375 3.375 0 0 0 6 9.333V12.75A2.625 2.625 0 0 0 8.625 15h6.75A2.625 2.625 0 0 0 18 12.75V9.333ZM4.5 9.333a.75.75 0 0 0 0 1.5h.375A2.625 2.625 0 0 0 7.5 13.5v-3.417A3.375 3.375 0 0 0 4.5 9.333ZM19.5 9.333a.75.75 0 0 1 0 1.5h-.375A2.625 2.625 0 0 1 16.5 13.5v-3.417A3.375 3.375 0 0 1 19.5 9.333Z" clipRule="evenodd" />
  </svg>
);

// Fix: In ColorWheelIcon, removed the invalid `xmlns` attribute from the `div` element inside `foreignObject`. It's not a valid prop in React's JSX typings for HTML elements.
export const ColorWheelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="100" height="100">
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
                }}
            />
        </foreignObject>
    </svg>
);

export const SmileyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9.75h.008v.008H9V9.75Zm6 0h.008v.008H15V9.75Z" />
  </svg>
);

export const IndianFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <path fill="#F93" d="M0 0h36v8H0z"/>
        <path fill="#FFF" d="M0 8h36v8H0z"/>
        <path fill="#128807" d="M0 16h36v8H0z"/>
        <g transform="translate(18 12)">
            <circle r="3.2" fill="#000080" stroke="#FFF" strokeWidth=".4"/>
            <circle r="2.8" fill="#FFF"/>
            <circle r="1.6" fill="#000080"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(7.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(22.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(37.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(52.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(67.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(82.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(97.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(112.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(127.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(142.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(157.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(172.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(187.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(202.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(217.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(232.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(247.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(262.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(277.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(292.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(307.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(322.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(337.5)"/>
            <path fill="#000080" d="m0-1.6 0.138 0.475-0.347-0.322h0.418L0-1.6z" transform="rotate(352.5)"/>
        </g>
    </svg>
);

export const QrCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path fill="black" d="M10 10h20v20H10z m5 5v10h10V15z M40 10h20v20H40z m5 5v10h10V15z M70 10h20v20H70z m5 5v10h10V15z M10 40h20v20H10z m5 5v10h10V45z M10 70h20v20H10z m5 5v10h10V75z M40 40h5v5h-5z m5 5h5v5h-5z m-5 5h5v5h-5z m-5 5h5v5h-5z m15-15h5v5h-5z m-10 10h5v5h-5z m20 0h5v5h-5z m5 5h5v5h-5z m-5 5h5v5h-5z m10-10h5v5h-5z M40 70h5v5h-5z m5 5h5v5h-5z m5 5h5v5h-5z m-15 5h5v5h-5z m-5 5h5v5h-5z M70 40h5v5h-5z m5 5h5v5h-5z m5 5h5v5h-5z m-15 5h5v5h-5z m5 5h5v5h-5z m5-15h5v5h-5z m-10 10h5v5h-5z m-5-10h5v5h-5z m-5 5h5v5h-5z m-5-5h5v5h-5z M70 70h20v20H70z m5 5v10h10V75z" />
    </svg>
);

export const PaytmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="#002E6E">Paytm</text>
    </svg>
);

export const PhonePeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="#5A2E7E">PhonePe</text>
  </svg>
);

export const GPayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.2,20.3c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0h-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0 s-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0h-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0s-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0 c-0.1,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0c-2.3,0-4,1.8-4,4s1.7,4,4,4c0.9,0,1.8-0.3,2.5-0.9v-0.1c-0.6,0.6-1.4,1-2.4,1 c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c0.9,0,1.7,0.4,2.3,1c0,0,0,0,0,0l0,0l0,0l0,0c0,0,0,0,0,0 c0.1-0.2,0.2-0.4,0.3-0.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.1,0 c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0V20.3z" fill="#5f6368" />
    <path d="M51,24.1c0-2.3-1.8-4.1-4.1-4.1c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1C49.2,28.2,51,26.4,51,24.1z M43.8,24.1 c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1C45.2,27.2,43.8,25.8,43.8,24.1z" fill="#5f6368" />
    <path d="M63.7,24.1c0-2.3-1.8-4.1-4.1-4.1c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1C61.9,28.2,63.7,26.4,63.7,24.1z M56.5,24.1 c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1C57.9,27.2,56.5,25.8,56.5,24.1z" fill="#5f6368" />
    <path d="M72.9,20.2l-1.3,1.3c-0.5-0.4-1.2-0.6-1.8-0.6c-1.8,0-3.2,1.5-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c0.6,0,1.3-0.2,1.8-0.6 l1.3,1.3c-0.8,0.7-1.8,1.1-2.9,1.1c-2.9,0-5-2.2-5-5c0-2.8,2.1-5,5-5C71.1,19.1,72.1,19.5,72.9,20.2z" fill="#5f6368" />
    <path d="M80.2,20.3v7.7h-1.8v-1.4c-0.7,1-1.8,1.6-3,1.6c-2.4,0-4.2-1.9-4.2-4.2c0-2.3,1.8-4.2,4.2-4.2c1.2,0,2.2,0.6,3,1.6V20.3 H80.2z M74.4,24.1c0,1.7,1.1,3.1,2.8,3.1c1.6,0,2.8-1.3,2.8-3.1c0-1.7-1.1-3.1-2.8-3.1C75.5,21.1,74.4,22.4,74.4,24.1z" fill="#5f6368" />
    <path d="M12.4,10.2c-1.1,0-2.2,0.2-3.3,0.7c-0.2,0.1-0.4,0.1-0.6,0.1c-0.8,0-1.5-0.7-1.5-1.5c0-0.7,0.5-1.4,1.2-1.5 c1.5-0.6,3.2-0.9,4.8-0.9c1.6,0,3,0.3,4.4,0.8l0,0c1.4,0.5,2.6,1.2,3.7,2.1c0.2,0.2,0.4,0.3,0.6,0.5c0.5,0.6,0.6,1.4,0.2,2 c-0.4,0.6-1.1,0.8-1.8,0.4c-0.1-0.1-0.3-0.2-0.4-0.3c-0.9-0.8-2-1.4-3.1-1.8C15.3,10.5,13.9,10.2,12.4,10.2z" fill="#ea4335" />
    <path d="M25.2,16.5c-0.6-1.2-1.4-2.3-2.3-3.3c-0.5-0.5-1.3-0.6-1.9-0.1c-0.6,0.4-0.8,1.2-0.4,1.8c0.1,0.1,0.1,0.2,0.2,0.3 c0.8,0.9,1.5,1.9,2.1,3c0.3,0.6,1,0.9,1.7,0.6C25.1,18.4,25.5,17.4,25.2,16.5L25.2,16.5z" fill="#fbbc04" />
    <path d="M6.3,16.3C5.5,17.4,5,18.6,4.6,20c-0.2,0.7,0.2,1.4,0.8,1.7c0.6,0.2,1.3,0,1.6-0.6c0.1-0.1,0.1-0.2,0.1-0.3 c0.4-1.2,0.8-2.3,1.4-3.4c0.4-0.6,0.1-1.4-0.5-1.7C7.5,15.4,6.7,15.7,6.3,16.3L6.3,16.3z" fill="#4285f4" />
    <path d="M12.4,38c1.3,0,2.6-0.3,3.8-0.8c0.7-0.3,1.4-0.1,1.8,0.5c0.4,0.6,0.2,1.3-0.4,1.7c-0.1,0.1-0.2,0.1-0.3,0.2 c-1.4,0.6-2.9,0.9-4.5,0.9c-1.8,0-3.5-0.3-5.2-1c-0.7-0.3-1.1-1.1-0.8-1.8c0.3-0.7,1.1-1.1,1.8-0.8c0.1,0,0.3,0.1,0.4,0.2 C10,37.6,11.2,38,12.4,38z" fill="#34a853" />
    <path d="M22.9,24.8c-0.1,0.1-0.2,0.1-0.2,0.2c-0.9,0.8-2,1.4-3.1,1.8c-1.3,0.5-2.6,0.7-4,0.7c-1.5,0-3-0.3-4.3-0.8 c-0.2,0-0.3-0.1-0.4-0.1c-0.7-0.3-1-1.1-0.7-1.8c0.3-0.7,1.1-1,1.8-0.7c0.1,0,0.2,0.1,0.3,0.1c1.1,0.4,2.4,0.7,3.6,0.7 c1.2,0,2.4-0.2,3.5-0.6c0.7-0.3,1.4,0.1,1.7,0.7C23.5,23.9,23.3,24.5,22.9,24.8L22.9,24.8z" fill="#4285f4" />
    <path d="M91.8,24.1c0,1.2,0.2,2.4,0.5,3.6h-9.9v-2h8.3c-0.2-0.8-0.5-1.5-0.9-2.2c-0.7-1.2-1.7-2.1-3-2.6 c-0.6-0.2-1.1-0.8-1.1-1.5c0-1,0.8-1.8,1.8-1.8c0.2,0,0.4,0,0.6,0.1c2.1,0.5,3.9,1.8,5.1,3.7C91.6,22.1,91.8,23.1,91.8,24.1z" fill="#5f6368" />
  </svg>
);

export const UpiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,15 L10,25 L15,25 L15,20 L20,20 L20,25 L25,25 L25,15 Z" fill="#E55D25"/>
    <path d="M30,15 L30,25 L35,25 L35,15 Z M40,15 L40,25 L45,25 L45,15 Z" fill="#E55D25"/>
    <path d="M50,15 L50,25 L55,25 L55,20 L65,20 L65,25 L70,25 L70,15 Z" fill="#E55D25"/>
    <path d="M75,15 L75,25 L80,25 L80,15 Z M85,15 L85,25 L90,25 L90,20 C87.5,20 87.5,15 85,15 Z" fill="#00A2DF"/>
  </svg>
);