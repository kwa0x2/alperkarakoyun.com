"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ArrowUpRight, FileText, X } from "@/components/icons";
import { site } from "@/lib/site";

type CvContextValue = { open: () => void };

const CvContext = createContext<CvContextValue | null>(null);

export function useCv() {
  const ctx = useContext(CvContext);
  if (!ctx) throw new Error("useCv must be used within CvProvider");
  return ctx;
}

export function CvProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <CvContext.Provider value={{ open }}>
      {children}
      {isOpen ? <CvModal onClose={close} /> : null}
    </CvContext.Provider>
  );
}

function CvModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae"
    >
      <button
        type="button"
        aria-label="Close CV"
        onClick={onClose}
        className="cv-overlay absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
      />

      <div className="cv-panel relative flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <FileText className="h-4 w-4 text-accent" />
            Curriculum Vitae
          </div>
          <div className="flex items-center gap-1">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:bg-subtle hover:text-foreground"
            >
              Open
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={site.resume}
              download
              className="hidden rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:bg-subtle hover:text-foreground sm:inline-flex"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <iframe
          src={`${site.resume}#view=FitH`}
          title="Alper Karakoyun CV"
          className="h-full w-full flex-1 bg-white"
        />
      </div>
    </div>
  );
}

export function OpenCv({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useCv();
  return (
    <button type="button" onClick={open} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
