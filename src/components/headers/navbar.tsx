import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowRight,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import {
  useLocation,
  useNavigate,
} from "@tanstack/react-router";

type MenuItem = {
  name: string;
  to: string;
  section?: string;
  type: "scroll" | "route";
};

const menus: MenuItem[] = [
  {
    name: "Home",
    to: "/",
    section: "home",
    type: "scroll",
  },
  {
    name: "About Us",
    to: "/",
    section: "about-us",
    type: "scroll",
  },
  {
    name: "Practice Areas",
    to: "/practice-areas",
    type: "route",
  },
  {
    name: "Our Team",
    to: "/teams",
    type: "route",
  },
  {
    name: "News",
    to: "/news",
    type: "route",
  },
  {
    name: "Terms",
    to: "/terms",
    type: "route",
  },
  {
    name: "Contact",
    to: "/contact",
    type: "route",
  },
];

const menusDropdown = [
  {
    name: "Test 1",
    to: "#",
  },
  {
    name: "Test 2",
    to: "#",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
  |--------------------------------------------------------------------------
  | NORMALIZE PATHNAME
  |--------------------------------------------------------------------------
  */
  const pathname = location.pathname.replace(/\/$/, "") || "/";

  /*
  |--------------------------------------------------------------------------
  | SCROLL SECTION OBSERVER
  |--------------------------------------------------------------------------
  |
  | Observer hanya dijalankan ketika berada di homepage.
  |
  */
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const sectionIds = ["home", "about-us"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );
        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.4, 0.6],
      }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  /*
  |--------------------------------------------------------------------------
  | RESET ACTIVE SECTION WHEN ROUTE CHANGES
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    }
  }, [pathname]);

  /*
  |--------------------------------------------------------------------------
  | SCROLL DETECTION
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > window.innerHeight * 0.2
      );
    };
    handleScroll();
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | CLOSE DROPDOWN WHEN CLICK OUTSIDE
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener(
      "mousedown",
      handleClick
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | MOBILE BODY LOCK
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
  |--------------------------------------------------------------------------
  | SCROLL TO SECTION
  |--------------------------------------------------------------------------
  */
  const scrollToTarget = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }
    const navbarOffset = 120;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: "smooth",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE MENU
  |--------------------------------------------------------------------------
  */
  const handleMenu = async (
    menu: MenuItem
  ) => {
    setOpen(false);
    setOpenDropdown(false);
    if (menu.type === "scroll") {
      setActiveSection(menu.section ?? "");
      if (pathname === "/") {
        if (menu.section) {
          scrollToTarget(menu.section);
        }

        return;
      }
      await navigate({
        to: "/",
      });
      setTimeout(() => {
        if (menu.section) {
          scrollToTarget(menu.section);
        }
      }, 100);

      return;
    }
    await navigate({
      to: menu.to,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE DROPDOWN ROUTE
  |--------------------------------------------------------------------------
  */
  const handleRoute = async (to: string) => {
    setOpenDropdown(false);
    setOpen(false);

    if (to.startsWith("#")) {
      return;
    }

    await navigate({
      to,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | ACTIVE MENU
  |--------------------------------------------------------------------------
  */
  const isMenuActive = (menu: MenuItem) => {
    if (menu.type === "scroll") {
      return (
        pathname === "/" &&
        activeSection === menu.section
      );
    }
    return pathname === menu.to;
  };

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ========================================================= */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300
          ${scrolled
            ? `bg-navy-sgs/95 backdrop-blur-xl shadow-xl border-b-2 border-premium-gold-sgs`
            : `bg-transparent border-b-2 border-transparent`
          }
        `}
      >
        <div className="container-custom md:container mx-auto px-5">
          {/* ===================================================== */}
          {/* TOP BAR */}
          {/* ===================================================== */}
          <div className="hidden md:flex justify-between py-3 border-b border-premium-gold-sgs">
            {/* LOCATION */}
            <a
              className="gold-text-hover flex items-center text-sm text-white"
              href="https://maps.app.goo.gl/wKgLM78WyvjoqT217"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="mr-1 text-gold-sgs"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <strong>
                Menara Jakarta
              </strong>
              , Kota Adm. Jakarta Pusat, 10610
            </a>

            {/* PHONE */}
            <h1 className="text-white transition-all duration-300 hover:bg-gold-metallic hover:bg-clip-text hover:text-transparent">
              (+62) 811-1443-339
            </h1>
          </div>

          {/* ===================================================== */}
          {/* MAIN NAVBAR */}
          {/* ===================================================== */}
          <div
            className={`flex items-center justify-between transition-all duration-300
              ${scrolled
                ? "py-3"
                : "py-5"
              }
            `}
          >
            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/navbar/logo-sgs.svg"
                  alt="SGS Lawfirm"
                  className={`transition-all duration-300
                    ${scrolled
                      ? "h-12"
                      : "h-14"
                    }
                  `}
                />
                <div>
                  <h1 className="font-title text-white text-2xl">
                    SGS LAWFIRM
                  </h1>

                  <p className="uppercase tracking-[1px] text-[10px] text-premium-gold-sgs">
                    Professional - intellectual
                    <br />
                    client oriented
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* DESKTOP MENU */}
            {/* ================================================= */}
            <nav
              className="hidden lg:flex items-center gap-10"
            >
              {menus.map((menu) => {
                const active =
                  isMenuActive(menu);

                return (
                  <button
                    key={menu.name}
                    type="button"
                    onClick={() =>
                      handleMenu(menu)
                    }
                    className={` group relative font-medium transition-all duration-300 cursor-pointer
                      ${active
                        ? "text-premium-gold-sgs"
                        : "text-white hover:text-premium-gold-sgs"
                      } after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-premium-gold-sgs after:transition-all after:duration-300
                      ${active
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                      }
                    `}
                  >
                    {menu.name}
                  </button>
                );
              })}
            </nav>
            <div
              ref={dropdownRef}
              className="relative hidden lg:flex"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() =>
                  setOpenDropdown(
                    !openDropdown
                  )}
                className="flex items-center gap-2 bg-basic-gold-metallic-sgs px-6 py-3 font-semibold text-black shadow-lg transition hover:shadow-yellow-400/30 cursor-pointer rounded-md"
              >
                Appointment
                <motion.div
                  animate={{
                    rotate:
                      openDropdown
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <IconArrowRight
                    size={18}
                  />
                </motion.div>
              </motion.button>

              {/* DROPDOWN */}
              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.22,
                    }}
                    className="
                      absolute
                      right-0
                      top-full
                      mt-3
                      w-80
                      overflow-hidden
                      rounded-2xl
                      bg-white
                      shadow-2xl
                      border
                      border-slate-100
                      z-50
                    "
                  >
                    {menusDropdown.map(
                      (item) => (
                        <motion.button
                          key={item.name}
                          whileHover={{
                            x: 6,
                          }}
                          onClick={() =>
                            handleRoute(
                              item.to
                            )
                          }
                          className="
                            flex
                            w-full
                            flex-col
                            items-start
                            px-6
                            py-5
                            text-left
                            transition
                            hover:bg-sky-50
                          "
                        >
                          <span
                            className="
                              font-semibold
                              text-slate-800
                            "
                          >
                            {item.name}
                          </span>

                          <span
                            className="
                              mt-1
                              text-sm
                              text-slate-500
                            "
                          >
                            HALO
                          </span>
                        </motion.button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ================================================= */}
            {/* MOBILE BUTTON */}
            {/* ================================================= */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden text-premium-gold-sgs"
            >
              <IconMenu2 size={32} />
            </button>

          </div>
        </div>
      </motion.header>

      {/* ========================================================= */}
      {/* MOBILE MENU */}
      {/* ========================================================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setOpen(false)
              }
              className="fixed inset-0 z-998 bg-black/50 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
              className="fixed right-0 top-0 bottom-0 z-999 w-82.5 bg-navy-sgs flex flex-col shadow-2xl"
            >
              {/* ============================================= */}
              {/* MOBILE HEADER */}
              {/* ============================================= */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <img
                  src="/navbar/logo-sgs.svg"
                  alt="SGS Lawfirm"
                  className="h-14"
                />
                <button
                  type="button"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="text-white"
                >
                  <IconX size={30} />
                </button>

              </div>

              {/* ============================================= */}
              {/* MOBILE MENUS */}
              {/* ============================================= */}
              <div className="flex-1 overflow-y-auto p-6">
                {menus.map(
                  (menu, index) => {
                    const active =
                      isMenuActive(menu);

                    return (
                      <motion.button
                        key={menu.name}
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.07,
                        }}
                        onClick={() =>
                          handleMenu(menu)
                        }
                        className={`relative flex w-full rounded-xl px-5 py-4 text-left transition-all duration-300
                          ${active
                            ? `text-premium-gold-sgs bg-white/5`
                            : `text-white hover:bg-white/10 hover:text-premium-gold-sgs`
                          }
                          ${active
                            ? `before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-premium-gold-sgs`
                            : ""
                          }
                        `}
                      >
                        {menu.name}
                      </motion.button>
                    );
                  }
                )}
              </div>

              {/* ============================================= */}
              {/* MOBILE CONSULTATION */}
              {/* ============================================= */}
              <div
                className="
                  border-t
                  border-white/10
                  p-6
                "
              >
                {/* <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      !openDropdown
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-4
                    text-black
                    bg-premium-gold-sgs
                    rounded-md
                  "
                >
                  Consultation

                  <motion.div
                    animate={{
                      rotate:
                        openDropdown
                          ? 180
                          : 0,
                    }}
                  >
                    <IconChevronDown
                      size={18}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openDropdown && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="
                        overflow-hidden
                      "
                    >
                      {menusDropdown.map(
                        (item) => (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() =>
                              handleRoute(
                                item.to
                              )
                            }
                            className="
                              flex
                              w-full
                              rounded-xl
                              pl-10
                              pr-5
                              py-3
                              text-left
                              text-white/80
                              transition
                              hover:bg-white/10
                              hover:text-premium-gold-sgs
                            "
                          >
                            {item.name}
                          </button>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence> */}

                <p
                  className="
                    mt-2
                    text-center
                    text-xs
                    text-white/60
                  "
                >
                  SGS Lawfirm © 2026
                </p>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}