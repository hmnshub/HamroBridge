import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          NAVBAR
      ========================== */}
      <nav className="sticky top-0 z-40 w-full border-b border-surface-variant bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-[62px] items-center justify-between sm:h-20">

            {/* =========================
                LOGO
            ========================== */}
            <a
              href="#"
              className="flex min-w-0 items-center gap-1.5 sm:gap-2"
            >
              <span className="material-symbols-outlined shrink-0 text-[25px] text-primary sm:text-3xl">
                bridge
              </span>

              <span className="truncate text-[15px] font-bold tracking-tight text-on-surface sm:text-xl">
                Hamro Bridge
              </span>
            </a>

            {/* =========================
                DESKTOP NAV
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
                ACTIONS
            ========================== */}
            <div className="flex items-center gap-1.5 sm:gap-2">

              {/* Desktop Login */}
              <button
                type="button"
                className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-on-surface transition-colors hover:text-primary md:block"
              >
                Log in
              </button>

              {/* Join */}
              <button
                type="button"
                className="rounded-xl bg-primary px-3 py-2 text-[12px] font-semibold text-white shadow-sm transition-all hover:bg-primary/90 active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className="sm:hidden">Join</span>
                <span className="hidden sm:inline">Join Platform</span>
              </button>

              {/* Mobile Menu */}
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
          MOBILE MENU
      ========================== */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isDrawerOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >

        {/* Backdrop */}
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* =========================
            DRAWER
        ========================== */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-[340px] flex-col overflow-hidden rounded-l-3xl bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isDrawerOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* =========================
              DRAWER HEADER
          ========================== */}
          <div className="flex items-center justify-between border-b border-surface-variant px-5 py-4">

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
                  Nepal&apos;s talent marketplace
                </p>
              </div>
            </div>

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
              MENU CONTENT
          ========================== */}
          <div className="flex-1 overflow-y-auto px-4 py-5">

            <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
              Explore
            </p>

            <nav className="space-y-1">

              {/* Projects */}
              <a
                href="#projects"
                onClick={closeDrawer}
                className="group flex min-h-[52px] items-center gap-3 rounded-2xl px-3 text-[15px] font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[21px] text-on-surface-variant transition-colors group-hover:text-primary">
                  grid_view
                </span>

                <span>Browse Projects</span>

                <span className="material-symbols-outlined ml-auto text-[18px] text-on-surface-variant/50">
                  chevron_right
                </span>
              </a>

              {/* Talent */}
              <a
                href="#talent"
                onClick={closeDrawer}
                className="group flex min-h-[52px] items-center gap-3 rounded-2xl px-3 text-[15px] font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[21px] text-on-surface-variant transition-colors group-hover:text-primary">
                  person_search
                </span>

                <span>Find Talent</span>

                <span className="material-symbols-outlined ml-auto text-[18px] text-on-surface-variant/50">
                  chevron_right
                </span>
              </a>

              {/* How it works */}
              <a
                href="#how"
                onClick={closeDrawer}
                className="group flex min-h-[52px] items-center gap-3 rounded-2xl px-3 text-[15px] font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[21px] text-on-surface-variant transition-colors group-hover:text-primary">
                  help_outline
                </span>

                <span>How It Works</span>

                <span className="material-symbols-outlined ml-auto text-[18px] text-on-surface-variant/50">
                  chevron_right
                </span>
              </a>

              {/* Categories */}
              <a
                href="#categories"
                onClick={closeDrawer}
                className="group flex min-h-[52px] items-center gap-3 rounded-2xl px-3 text-[15px] font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-[21px] text-on-surface-variant transition-colors group-hover:text-primary">
                  category
                </span>

                <span>Categories</span>

                <span className="material-symbols-outlined ml-auto text-[18px] text-on-surface-variant/50">
                  chevron_right
                </span>
              </a>
            </nav>

            {/* =========================
                ACCOUNT
            ========================== */}
            <div className="mt-7 border-t border-surface-variant pt-6">

              <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
                Account
              </p>

              <button
                type="button"
                onClick={closeDrawer}
                className="w-full rounded-xl border border-surface-variant px-4 py-3.5 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-low"
              >
                Log in
              </button>

              <button
                type="button"
                onClick={closeDrawer}
                className="mt-3 w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                Join Platform
              </button>
            </div>
          </div>

          {/* =========================
              FOOTER
          ========================== */}
          <div className="border-t border-surface-variant bg-surface-container-low/30 px-5 py-4">

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[17px] text-emerald-600">
                verified
              </span>

              <span className="text-xs font-semibold text-emerald-600">
                Verified Community
              </span>
            </div>

            <p className="mt-1.5 text-[11px] leading-relaxed text-on-surface-variant">
              Connect with students, freelancers and businesses across Nepal.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}