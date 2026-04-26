'use client';

import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  previewUrl: string;
  downloadUrl: string;
}

export default function ResumeModal({ isOpen, onClose, previewUrl, downloadUrl }: ResumeModalProps) {
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

  const isPDF = previewUrl.toLowerCase().endsWith('.pdf');

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-controls">
        <a 
          href={downloadUrl} 
          download="Faris_Resume_ATS.pdf"
          className="resume-modal-download"
          onClick={(e) => e.stopPropagation()}
          aria-label="Download"
        >
          <Download size={24} />
        </a>
        <button className="resume-modal-close" onClick={onClose} aria-label="Close">
          <X size={32} />
        </button>
      </div>
      
      <div className="resume-image-container" onClick={(e) => e.stopPropagation()}>
        {isPDF ? (
          <iframe 
            src={`${previewUrl}#toolbar=0&view=FitH`} 
            className="resume-pdf-viewer"
            title="Resume PDF"
          />
        ) : (
          <img src={previewUrl} alt="Resume" className="resume-image" />
        )}
      </div>
    </div>
  );
}
