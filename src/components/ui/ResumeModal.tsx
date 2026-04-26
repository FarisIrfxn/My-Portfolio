'use client';

import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  previewUrls: string[];
  downloadUrl: string;
}

export default function ResumeModal({ isOpen, onClose, previewUrls, downloadUrl }: ResumeModalProps) {
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

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Faris_Resume_ATS.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(downloadUrl, '_blank');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay">
      {/* Background layer for closing */}
      <div className="resume-modal-backdrop" onClick={onClose} />
      
      {/* Fixed Controls */}
      <div className="resume-modal-controls">
        <a 
          href={downloadUrl} 
          className="resume-modal-download"
          onClick={handleDownload}
          aria-label="Download"
        >
          <Download size={24} />
        </a>
        <button className="resume-modal-close" onClick={onClose} aria-label="Close">
          <X size={32} />
        </button>
      </div>
      
      {/* Scrollable Content */}
      <div className="resume-modal-scroll-area" onClick={onClose}>
        <div className="resume-image-container" onClick={(e) => e.stopPropagation()}>
          <div className="resume-pages-list">
            {previewUrls.map((url, index) => (
              <img 
                key={index}
                src={url} 
                alt={`Resume Page ${index + 1}`} 
                className="resume-image" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
