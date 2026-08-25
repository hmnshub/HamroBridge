import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <nav className="sticky top-0 z-40 w-full border-b border-surface-variant bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">

            {/* =========================
                LOGO
            ========================== */}
            <a
              href="#"
              className="flex min-w-0 shrink-0 items-center gap-2"
            >
              <span className="material-symbols-outlined shrink-0 text-[26px] text-primary sm:text-3xl">
                bridge
              </span>

              <span className="truncate text-[15px] font-bold tracking-tight text-on-surface sm:text-xl">
                Hamro Bridge
              </span>
            </a>

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <div className="hidden items-center gap-6 text-sm font-medium text-on-surface-variant md:flex lg:gap-8">
              <a
                href="#projects"
                className="py-2 transition-colors hover:text-primary"
              >
                Browse Projects
              </a>

              <a
                href="#talent"
                className="py-2 transition-colors hover:text-primary"
              >
                Find Talent
              </a>

              <a
                href="#how"
                className="py-2 transition-colors hover:text-primary"
              >
                How It Works
              </a>

              <a
                href="#categories"
                className="py-2 transition-colors hover:text-primary"
              >
                Categories
              </a>
            </div>

            {/* =========================
                ACTION AREA
            ========================== */}
            <div className="flex items-center gap-2">

              {/* Desktop Login */}
              <button
                type="button"
                className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-on-surface transition-colors hover:text-primary md:block"
              >
                Log in
              </button>

              {/* Join Platform */}
              <button
                type="button"
                className="rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary/90 active:scale-95 sm:px-4 sm:text-sm"
              >
                <span className="hidden sm:inline">
                  Join Platform
                </span>

                <span className="sm:hidden">
                  Join
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-on-surface transition-colors hover:bg-surface-container-low md:hidden"
                aria-label="Open navigation menu"
                aria-expanded={isDrawerOpen}
              >
                <span className="material-symbols-outlined text-[24px]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================
          MOBILE DRAWER
      ========================== */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isDrawerOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >

        {/* =========================
            BACKDROP
        ========================== */}
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
            isDrawerOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* =========================
            DRAWER PANEL
        ========================== */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isDrawerOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* =========================
              DRAWER HEADER
          ========================== */}
          <div className="flex items-center justify-between border-b border-surface-variant px-5 py-5">

            {/* Drawer Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <span className="material-symbols-outlined text-primary">
                  bridge
                </span>
              </div>

              <div>
                <p className="text-sm font-bold text-on-surface">
                  Hamro Bridge
                </p>

                <p className="text-[11px] text-on-surface-variant">
                  Student–Talent Marketplace
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeDrawer}
              className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
              aria-label="Close navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                close
              </span>
            </button>
          </div>

          {/* =========================
              DRAWER CONTENT
          ========================== */}
          <div className="flex-1 overflow-y-auto px-4 py-6">

            {/* Explore Label */}
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
              Explore
            </p>

            {/* Navigation Links */}
            <nav className="space-y-1">

              {/* Browse Projects */}
              <a
                href="#projects"
                onClick={closeDrawer}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[22px] text-on-surface-variant transition-colors group-hover:text-primary">
                  grid_view
                </span>

                <span>
                  Browse Projects
                </span>
              </a>

              {/* Find Talent */}
              <a
                href="#talent"
                onClick={closeDrawer}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[22px] text-on-surface-variant transition-colors group-hover:text-primary">
                  person_search
                </span>

                <span>
                  Find Talent
                </span>
              </a>

              {/* How It Works */}
              <a
                href="#how"
                onClick={closeDrawer}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[22px] text-on-surface-variant transition-colors group-hover:text-primary">
                  help_outline
                </span>

                <span>
                  How It Works
                </span>
              </a>

              {/* Categories */}
              <a
                href="#categories"
                onClick={closeDrawer}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[22px] text-on-surface-variant transition-colors group-hover:text-primary">
                  category
                </span>

                <span>
                  Categories
                </span>
              </a>
            </nav>

            {/* =========================
                ACCOUNT SECTION
            ========================== */}
            <div className="mt-8 border-t border-surface-variant pt-6">

              <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                Account
              </p>

              {/* Login */}
              <button
                type="button"
                onClick={closeDrawer}
                className="w-full rounded-xl border border-surface-variant px-4 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                Log in
              </button>

              {/* Join Platform */}
              <button
                type="button"
                onClick={closeDrawer}
                className="mt-3 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                Join Platform
              </button>
            </div>
          </div>

          {/* =========================
              DRAWER FOOTER
          ========================== */}
          <div className="border-t border-surface-variant px-5 py-5">

            {/* Verification */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
              <span className="material-symbols-outlined text-[17px]">
                verified
              </span>

              <span>
                Verified Community
              </span>
            </div>

            {/* Description */}
            <p className="mt-2 text-[11px] leading-relaxed text-on-surface-variant">
              Connect with students, freelancers and businesses across Nepal.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}