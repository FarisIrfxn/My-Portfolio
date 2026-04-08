'use client';

import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default function ResumeModal({ isOpen, onClose, imageUrl }: ResumeModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <button className="resume-modal-close" onClick={onClose} aria-label="Close">
         <X size={32} />
      </button>
      
      <div className="resume-image-container" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Resume" className="resume-image" />
      </div>
    </div>
  );
}
