import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PALETTE_KEYS, PROJECTS, RESUME_SUMMARY_TEXT } from './data/portfolioData';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';

import CapabilitiesSection from './components/CapabilitiesSection';
import ExperienceSection from './components/ExperienceSection';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import SearchModal from './components/SearchModal';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import ToastBanner from './components/ToastBanner';

export default function App() {
  const motionEnabled = true;

  const [heroPaletteIndex, setHeroPaletteIndex] = useState(1); // Starts at '02'
  const [headerTheme, setHeaderTheme] = useState('light');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [currentModalProjectId, setCurrentModalProjectId] = useState('01');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage('');
    }, 3200);
  }, []);

  const copyTextToClipboard = useCallback(
    (text, label) => {
      const fallbackCopy = () => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          showToast(label || 'COPIED TO CLIPBOARD');
        } catch (err) {
          showToast('PRESS CTRL+C TO COPY');
        }
        document.body.removeChild(ta);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => showToast(label || 'COPIED TO CLIPBOARD'))
          .catch(() => fallbackCopy());
      } else {
        fallbackCopy();
      }
    },
    [showToast]
  );

  // Adaptive Sticky Header Theme on Scroll
  useEffect(() => {
    const updateHeaderTheme = () => {
      const scrollY = window.scrollY + 56;
      let active = 'light';
      const sections = document.querySelectorAll('section[data-theme]');
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          active = sec.getAttribute('data-theme') || 'light';
        }
      });
      setHeaderTheme(active);
    };

    window.addEventListener('scroll', updateHeaderTheme, { passive: true });
    updateHeaderTheme();
    return () => window.removeEventListener('scroll', updateHeaderTheme);
  }, []);

  // Keyboard shortcuts (⌘K / Ctrl+K for Search, Escape to close modals)
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      } else if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setProjectModalOpen(false);
        setResumeModalOpen(false);
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);



  const handleCyclePalette = () => {
    setHeroPaletteIndex((prev) => (prev + 1) % PALETTE_KEYS.length);
  };

  const handleOpenProject = (id) => {
    setCurrentModalProjectId(id);
    setMegaMenuOpen(false);
    setProjectModalOpen(true);
  };

  const handlePrevProject = () => {
    const idx = PROJECTS.findIndex((p) => p.id === currentModalProjectId);
    const prevIdx = (idx - 1 + PROJECTS.length) % PROJECTS.length;
    setCurrentModalProjectId(PROJECTS[prevIdx].id);
  };

  const handleNextProject = () => {
    const idx = PROJECTS.findIndex((p) => p.id === currentModalProjectId);
    const nextIdx = (idx + 1) % PROJECTS.length;
    setCurrentModalProjectId(PROJECTS[nextIdx].id);
  };

  const handleFilterJump = (domain) => {
    setActiveFilter(domain);
    const workSec = document.getElementById('work');
    if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    copyTextToClipboard('aashutosh89660@gmail.com', 'EMAIL COPIED: AASHUTOSH89660@GMAIL.COM');
  };

  return (
    <div className={`min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground ${!motionEnabled ? 'motion-off' : ''}`}>
      <Header
        headerTheme={headerTheme}
        megaMenuOpen={megaMenuOpen}
        onToggleMegaMenu={() => setMegaMenuOpen((o) => !o)}
        onCloseMegaMenu={() => setMegaMenuOpen(false)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenProject={handleOpenProject}
        onOpenResume={() => {
          setMegaMenuOpen(false);
          setResumeModalOpen(true);
        }}
      />

      <main className="grow">
        <HeroSection
          heroPaletteKey={PALETTE_KEYS[heroPaletteIndex]}
          onCyclePalette={handleCyclePalette}
          motionEnabled={motionEnabled}
          onCopyEmail={handleCopyEmail}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <ManifestoSection motionEnabled={motionEnabled} />

        <ExperienceSection motionEnabled={motionEnabled} onOpenProject={handleOpenProject} />

        <CapabilitiesSection motionEnabled={motionEnabled} />

        <CredentialsSection motionEnabled={motionEnabled} />

        <ContactSection
          onCopyEmail={handleCopyEmail}
          onCopyDispatch={(formatted) =>
            copyTextToClipboard(formatted, 'INQUIRY DISPATCH COPIED TO CLIPBOARD')
          }
        />
      </main>

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onOpenProject={handleOpenProject}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        projectId={currentModalProjectId}
        motionEnabled={motionEnabled}
        onClose={() => setProjectModalOpen(false)}
        onPrevProject={handlePrevProject}
        onNextProject={handleNextProject}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onCopyResumeText={() =>
          copyTextToClipboard(RESUME_SUMMARY_TEXT, 'PLAIN-TEXT CV SUMMARY COPIED')
        }
      />

      <ToastBanner message={toastMessage} />
    </div>
  );
}
