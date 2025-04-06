import React from 'react';

function ErrorText({ error, show }) {
  return (
    <p
      className={`text-red-500 text-sm mt-1 transform transition-all duration-300 ease-in-out origin-top 
        ${show ? 'opacity-100 max-h-20 scale-y-100' : 'opacity-0 max-h-0 scale-y-0'} overflow-hidden`}
    >
      {error}
    </p>
  );
}

export default ErrorText;