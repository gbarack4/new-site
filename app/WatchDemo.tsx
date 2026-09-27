"use client";

import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

const DEMO_VIDEO =
  "https://userupload-813333281041-ap-southeast-2-an.s3.ap-southeast-2.amazonaws.com/Videos+/ads1.mov";

export default function WatchDemo() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("videoOpen");
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("videoOpen");
      document.body.style.overflow = "";
    };
  }, [open]);

  const modal =
    open && mounted
      ? createPortal(
          <div
            className="videoModal"
            role="dialog"
            aria-modal="true"
            aria-label="Product demo video"
            onClick={() => setOpen(false)}
          >
            <div className="videoModalInner" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="videoModalClose"
                aria-label="Close video"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <video
                className="videoModalPlayer"
                src={DEMO_VIDEO}
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                Your browser does not support the video player.
              </video>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button type="button" className="watch" onClick={() => setOpen(true)}>
        <b>▶</b> See how it works
      </button>
      {modal}
    </>
  );
}
