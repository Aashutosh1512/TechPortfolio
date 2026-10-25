import React from 'react';

export default function ToastBanner({ message }) {
  return (
    <div
      id="toast-banner"
      role="status"
      aria-live="polite"
      className={`fixed bottom-5 right-5 z-50 ${
        message ? 'flex' : 'hidden'
      } bg-primary text-primary-foreground border border-border-dark px-5 py-3 shadow-xl items-center gap-3`}
    >
      <span className="w-2 h-2 bg-white inline-block" />
      <span id="toast-message" className="meta-label text-white">
        {message || 'COPIED TO CLIPBOARD'}
      </span>
    </div>
  );
}
