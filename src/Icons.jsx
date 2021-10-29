export function LoadingSpinner({ size, speed }) {
  const sizeClasses = {
    'xs': 'h-4 w-4',
    'sm': 'h-8 w-8',
    'md': 'h-16 w-16',
    'lg': 'h-32 w-32',
  };
  const speedClasses = {
    'normal': 'animate-spin',
    'slow': 'animate-spin-slow',
  };

  return (
    <svg className={`${speedClasses[speed] || 'animate-spin'} a mx-2 ${sizeClasses[size] || 'h-16 w-16'} text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

export function SadFace() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="inline mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}