import React, { useState, useEffect } from 'react';
import WipeHeadline from './WipeHeadline';

export default function ContactSection({ onCopyEmail, onCopyDispatch }) {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderBrief, setSenderBrief] = useState('');
  const [formStatus, setFormStatus] = useState('READY');
  const [clockText, setClockText] = useState('IST (UTC+05:30)');

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setClockText(`${timeStr} IST (UTC+5:30)`);
      } catch (err) {
        setClockText('IST (UTC+05:30)');
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = `TO: aashutosh89660@gmail.com\nFROM: ${senderName.trim()} <${senderEmail.trim()}>\nBRIEF: ${senderBrief.trim()}`;
    onCopyDispatch(formatted);
    setFormStatus('DISPATCH COPIED ✓');
    setSenderName('');
    setSenderEmail('');
    setSenderBrief('');
  };

  return (
    <section id="contact" data-theme="dark" className="bg-primary text-primary-foreground">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-12 pt-14 pb-12 lg:min-h-svh">
        {/* Top Row: Section Index & Direct Dispatch Form Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-border-dark items-start">
          <div className="lg:col-span-5">
            <p className="poster-title trim-caps text-5xl sm:text-6xl lg:text-7xl text-white uppercase">
              Let&apos;s Connect
            </p>
          </div>

          {/* Interactive Quick Dispatch Form */}
          <div className="lg:col-span-7 border border-border-dark p-6 bg-neutral-950">
            <div className="flex items-center justify-between mb-4">
              <span className="meta-label text-neutral-400">CONTACT FORM</span>
              <span id="contact-form-status" className="meta-label text-white font-mono">
                {formStatus}
              </span>
            </div>
            <form id="contact-dispatch-form" onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sender-name" className="meta-label text-neutral-400 block mb-1">
                  01 / YOUR NAME OR ORGANIZATION
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="E.G. ENGINEERING HIRING LEAD"
                  className="w-full bg-black border border-border-dark px-3.5 py-2.5 text-xs font-mono uppercase text-white placeholder:text-neutral-600 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="sender-email" className="meta-label text-neutral-400 block mb-1">
                  02 / EMAIL ADDRESS
                </label>
                <input
                  id="sender-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="NAME@COMPANY.COM"
                  className="w-full bg-black border border-border-dark px-3.5 py-2.5 text-xs font-mono uppercase text-white placeholder:text-neutral-600 focus:outline-none focus:border-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="sender-brief" className="meta-label text-neutral-400 block mb-1">
                  03 / PROJECT, ROLE OR MESSAGE
                </label>
                <input
                  id="sender-brief"
                  type="text"
                  required
                  value={senderBrief}
                  onChange={(e) => setSenderBrief(e.target.value)}
                  placeholder="BACKEND / MICROSERVICES / KAFKA / .NET CORE / SPRING BOOT ROLE..."
                  className="w-full bg-black border border-border-dark px-3.5 py-2.5 text-xs font-mono uppercase text-white placeholder:text-neutral-600 focus:outline-none focus:border-white"
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-white text-black hover:opacity-85 transition-opacity"
                  >
                    Prepare Email →
                  </button>
                  <button
                    type="button"
                    id="btn-copy-email-footer"
                    onClick={onCopyEmail}
                    className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-border-dark text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Copy Email Address
                  </button>
                </div>
                <span className="font-mono text-[11px] text-neutral-400">PHONE: +91-8966098596</span>
              </div>
            </form>
          </div>
        </div>

        {/* Middle/Bottom Giant Clickable Email Poster Headline */}
        <div className="my-auto py-4">
          <p className="meta-label text-neutral-400 mb-3">CLICK TO COPY OR LAUNCH MAIL CLIENT</p>
          <button
            type="button"
            id="btn-giant-email"
            data-headline="true"
            onClick={onCopyEmail}
            className="wipe-active poster-title text-left text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem] text-white hover:opacity-75 transition-opacity break-all"
          >
            <span className="wipe-wrapper">
              <span className="wipe-text">AASHUTOSH89660@GMAIL.COM</span>
              <span className="wipe-bar" aria-hidden="true" />
            </span>
          </button>
        </div>

        {/* Bottom 6-Column Prospectus Metadata Footer */}
        <footer className="border-t border-border-dark pt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pb-8">
            <div>
              <p className="meta-label text-neutral-400">01 / ENGINEER</p>
              <p className="text-xs font-bold uppercase mt-1">AASHUTOSH GOYAL</p>
            </div>
            <div>
              <p className="meta-label text-neutral-400">02 / DIRECT PHONE</p>
              <a href="tel:+918966098596" className="text-xs font-bold uppercase mt-1 block hover:underline">
                +91-8966098596
              </a>
            </div>
            <div>
              <p className="meta-label text-neutral-400">03 / GITHUB ARCHIVE</p>
              <a
                href="https://github.com/Aashutosh1512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase mt-1 block hover:underline"
              >
                github.com/Aashutosh1512 ↗
              </a>
            </div>
            <div>
              <p className="meta-label text-neutral-400">04 / LINKEDIN</p>
              <a
                href="https://linkedin.com/in/aashutosh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase mt-1 block hover:underline"
              >
                linkedin.com/in/aashutosh ↗
              </a>
            </div>
            <div>
              <p className="meta-label text-neutral-400">05 / LOCAL TELEMETRY TIME</p>
              <p id="live-ist-clock" className="text-xs font-mono font-bold uppercase mt-1">
                {clockText}
              </p>
            </div>
            <div>
              <p className="meta-label text-neutral-400">06 / DESIGN SYSTEM</p>
              <p className="text-xs font-bold uppercase mt-1">GERSTNER SWISS GRID</p>
            </div>
          </div>

          <div className="border-t border-border-dark pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono uppercase text-neutral-400">
            <span>© 2026 AASHUTOSH GOYAL. ALL ARCHITECTURAL SPECIFICATIONS VERIFIED.</span>
            <a href="#hero" className="hover:text-white">
              BACK TO TOP ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
