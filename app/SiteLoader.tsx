"use client";

import {useEffect, useRef, useState} from "react";

const VISIBLE_MS = 2000;
const SLOW_VISIBLE_MS = 2800;
const EXIT_MS = 420;

function isSlowConnection() {
  if (typeof navigator === "undefined") return false;
  if (!navigator.onLine) return true;
  const conn = (navigator as Navigator & {
    connection?: {saveData?: boolean; effectiveType?: string};
  }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  return conn.effectiveType === "slow-2g" || conn.effectiveType === "2g";
}

function isRealPageRefresh() {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (nav) {
    return nav.type === "reload" || nav.type === "navigate";
  }
  const legacy = (performance as Performance & {
    navigation?: {type?: number};
  }).navigation;
  return legacy?.type === 0 || legacy?.type === 1;
}

type Status = "loading" | "slow" | "offline";

export default function SiteLoader() {
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("loading");
  const hideTimer = useRef<number | null>(null);
  const exitTimer = useRef<number | null>(null);

  const syncStatus = () => {
    if (typeof navigator === "undefined") return;
    if (!navigator.onLine) setStatus("offline");
    else if (isSlowConnection()) setStatus("slow");
    else setStatus("loading");
  };

  const dismiss = () => {
    if (!navigator.onLine) return;
    setOpen(false);
    if (exitTimer.current) window.clearTimeout(exitTimer.current);
    exitTimer.current = window.setTimeout(() => {
      setMounted(false);
      document.documentElement.classList.add("siteLoaded");
    }, EXIT_MS);
  };

  const present = (ms: number) => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    if (exitTimer.current) window.clearTimeout(exitTimer.current);
    syncStatus();
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setOpen(true));
    });
    hideTimer.current = window.setTimeout(dismiss, ms);
  };

  useEffect(() => {
    setReady(true);

    const boot = document.getElementById("site-loader-boot");
    if (boot) {
      boot.classList.add("isHiding");
      window.setTimeout(() => boot.remove(), 280);
    }

    const onOnline = () => {
      syncStatus();
      dismiss();
    };
    const onOffline = () => {
      setStatus("offline");
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOpen(true));
      });
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    if (!isRealPageRefresh()) {
      document.documentElement.classList.add("siteLoaded");
      return () => {
        window.removeEventListener("online", onOnline);
        window.removeEventListener("offline", onOffline);
      };
    }

    present(isSlowConnection() ? SLOW_VISIBLE_MS : VISIBLE_MS);

    const conn = (navigator as Navigator & {
      connection?: EventTarget;
    }).connection;
    const onConnChange = () => syncStatus();
    conn?.addEventListener?.("change", onConnChange);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      conn?.removeEventListener?.("change", onConnChange);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready || !mounted) return null;

  const text =
    status === "offline"
      ? "Connection lost. Reconnecting…"
      : status === "slow"
        ? "Loading on a slow connection…"
        : "Loading…";

  return (
    <div
      className={`siteLoader${open ? " isOpen" : ""}${status === "offline" ? " isOffline" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={open}
    >
      <div className="siteLoaderInner">
        <img src="/logo.png" alt="" width={28} height={28} className="siteLoaderLogo" />
        <div className="siteLoaderRing" aria-hidden="true" />
        <p className="siteLoaderText">{text}</p>
      </div>
    </div>
  );
}
