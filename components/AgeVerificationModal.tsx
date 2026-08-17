import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, AlertTriangle, Wine, Lock, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { STORE_DETAILS } from '../data/inventory';

interface AgeVerificationModalProps {
  onVerified?: () => void;
}

const STORAGE_KEY = 'alehouse_age_verified_status';

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onVerified }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDenied, setIsDenied] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  useEffect(() => {
    // Check if user has already verified their age
    try {
      const storedLocal = localStorage.getItem(STORAGE_KEY);
      const storedSession = sessionStorage.getItem(STORAGE_KEY);

      if (storedLocal === 'verified' || storedSession === 'verified') {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    } catch (e) {
      // Fallback if storage access is restricted
      setIsOpen(true);
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleConfirmAge = () => {
    try {
      if (rememberMe) {
        localStorage.setItem(STORAGE_KEY, 'verified');
      } else {
        sessionStorage.setItem(STORAGE_KEY, 'verified');
      }
    } catch (e) {
      console.warn('Storage write unavailable:', e);
    }
    setIsOpen(false);
    if (onVerified) onVerified();
  };

  const handleDenyAge = () => {
    setIsDenied(true);
  };

  const handleResetDecision = () => {
    setIsDenied(false);
  };

  const handleExitSite = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="age-verification-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-verification-title"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#040806]/90 backdrop-blur-xl"
      >
        {/* Ambient Warm Golden & Emerald Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#08100C] border border-[#C5A059]/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-10 text-[#F5EFEB] my-auto"
        >
          {/* Decorative Corner Filigree Borders */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]/60 pointer-events-none" />

          {!isDenied ? (
            /* STANDARD AGE CONFIRMATION SCREEN */
            <div className="text-center">
              
              {/* Brand Emblem */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-none bg-[#0C1813] border border-[#C5A059] mb-6 shadow-md">
                <Wine className="w-7 h-7 text-[#C5A059]" />
              </div>

              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.3em] text-[#C5A059] uppercase">
                  ESTD. 1998 · NAGAON, ASSAM
                </span>
              </div>

              {/* Title */}
              <h2 
                id="age-verification-title" 
                className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#F5EFEB] mb-2"
              >
                ALE HOUSE WINE SHOP
              </h2>

              <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-5 opacity-70" />

              {/* Legal Age Question */}
              <div className="bg-[#0C1813] border border-[#1B3228] p-4 sm:p-5 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#F5EFEB] mb-1">
                      Age Verification Required
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#D5CCC1] font-light leading-relaxed">
                      You must be of legal drinking age (<strong className="text-[#C5A059] font-medium">21 years or older</strong> in Assam, India) to enter and explore our spirits catalogue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question */}
              <p className="text-sm sm:text-base font-serif italic text-[#EDE6DD] mb-6">
                Are you of legal drinking age in your place of residence?
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
                
                {/* YES / CONFIRM */}
                <button
                  id="age-confirm-btn"
                  onClick={handleConfirmAge}
                  className="flex-1 py-3.5 px-6 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
                >
                  <span>I AM 21 OR OLDER</span>
                  <ArrowRight className="w-4 h-4 text-[#08100C]" />
                </button>

                {/* NO / DENY */}
                <button
                  id="age-deny-btn"
                  onClick={handleDenyAge}
                  className="py-3.5 px-6 bg-[#0C1813] hover:bg-[#1B3228] text-[#D5CCC1] hover:text-[#F5EFEB] font-sans font-semibold text-xs uppercase tracking-[0.18em] border border-[#1B3228] hover:border-[#C5A059]/50 transition-all cursor-pointer"
                >
                  <span>I AM UNDER 21</span>
                </button>

              </div>

              {/* Remember Me Option */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-[#BCB3A7] hover:text-[#F5EFEB] transition-colors select-none">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded-none accent-[#C5A059] bg-[#0C1813] border-[#1B3228] cursor-pointer"
                  />
                  <span>Remember my verification on this device</span>
                </label>
              </div>

              {/* Statutory Health Notice */}
              <div className="border-t border-[#1B3228] pt-4 text-[11px] text-[#8C8275] font-light leading-normal space-y-1">
                <p>
                  <strong className="text-[#BCB3A7]">Statutory Warning:</strong> Consumption of alcohol is injurious to health. Be safe, do not drink and drive.
                </p>
                <p>
                  By entering, you accept our responsible consumption policy.
                </p>
              </div>

            </div>
          ) : (
            /* ACCESS RESTRICTED SCREEN (UNDER LEGAL AGE) */
            <div className="text-center py-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-none bg-red-950/40 border border-red-800/80 mb-6 shadow-md">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>

              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-red-400 uppercase block mb-2">
                ACCESS RESTRICTED
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F5EFEB] mb-3">
                Legal Drinking Age Required
              </h2>

              <div className="w-12 h-[1px] bg-red-800/60 mx-auto mb-4" />

              <p className="text-xs sm:text-sm text-[#D5CCC1] font-light leading-relaxed max-w-md mx-auto mb-6">
                In compliance with liquor retail laws in Assam and India, our website and catalogue are strictly reserved for individuals of legal drinking age (21 years or older).
              </p>

              <div className="bg-[#0C1813] border border-[#1B3228] p-4 text-xs text-[#BCB3A7] mb-6">
                Thank you for your understanding. Please revisit <strong>ALE HOUSE WINE SHOP</strong> once you have attained legal drinking age.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleExitSite}
                  className="w-full sm:w-auto py-3 px-6 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow"
                >
                  Exit Website
                </button>

                <button
                  onClick={handleResetDecision}
                  className="w-full sm:w-auto py-3 px-6 bg-[#0C1813] hover:bg-[#1B3228] text-[#BCB3A7] hover:text-[#F5EFEB] border border-[#1B3228] text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>I entered by mistake</span>
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AgeVerificationModal;
