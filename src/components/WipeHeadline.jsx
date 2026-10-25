import React, { useEffect, useRef, useState } from 'react';

export default function WipeHeadline({ as: Tag = 'h2', className = '', id, onClick, type, children }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      type={type}
      onClick={onClick}
      data-headline="true"
      className={`${className} ${active ? 'wipe-active' : ''}`}
    >
      <span className="wipe-wrapper max-w-full">
        <span className="wipe-text">{children}</span>
        <span className="wipe-bar" aria-hidden="true" />
      </span>
    </Tag>
  );
}
