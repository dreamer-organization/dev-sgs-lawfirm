import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
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

import { scrollToSection } from "@/helpers";

const menus = [
  {
    name: "Home",
    to: "/",
    section: 'home',
  },
  {
    name: "About Us",
    to: "/about-us",
    section: 'about-us'
  },
  {
    name: "Practice Areas",
    to: "/practice-areas",
    section: 'practice-areas'
  },
  {
    name: "Our Team",
    to: "/our-team",
    section: 'our-team'
  },
  {
    name: "News",
    to: "/news",
    section: 'news'
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

  useEffect(() => {
    const sections = menus
      .map((menu) => document.getElementById(menu.section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.2);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (
      e: MouseEvent
    ) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = "" };
  }, [open]);

  const handleMenu = (section: string) => {
    setActiveSection(section);
    if (location.pathname !== "/") {
      navigate({
        to: "/",
        search: { scroll: section },
      });
      return;
    }

    scrollToSection(section);
    setOpen(false);
  };

  const handleRoute = (to: string) => {
    window.location.href = to;
    setOpen(false);
    setOpenDropdown(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .45 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${scrolled ? "bg-primary-sgs/95 backdrop-blur-xl shadow-xl" : "bg-transparent"}`}>
        <div className="container-custom md:container mx-auto px-5">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <img
                  src={'navbar/logo-sgs.svg'}
                  className={`transition-all duration-300 ${scrolled
                    ? "h-12"
                    : "h-14"
                    }`}
                />

                <div>
                  <h1 className="font-title text-white text-2xl">
                    SGS LAWFIRM
                  </h1>
                  <p className="uppercase tracking-[1px] text-[10px] text-[#C6A15B]">
                    Professional - intellectual <br /> client oriented
                  </p>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              {menus.map((menu) => (
                <button
                  key={menu.name}
                  onClick={() => handleMenu(menu.section)}
                  className={`group relative font-medium transition-all duration-300 ${activeSection === menu.section 
                    ? "text-gold-sgs" 
                    : "text-white hover:text-gold-sgs"
                  } after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-gold-sgs after:transition-all after:duration-300 ${activeSection === menu.section 
                    ? "after:w-full" 
                    : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {menu.name}
                </button>
              ))}
            </nav>

            <div ref={dropdownRef} className="relative hidden lg:flex">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: .98 }}
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-2 bg-gold-sgs px-6 py-3 font-semibold text-black shadow-lg transition hover:shadow-yellow-400/30"
              >
                Consultation
                <motion.div
                  animate={{ rotate: openDropdown ? 180 : 0 }}
                  transition={{ duration: .25 }}
                >
                  <IconArrowRight
                    size={18}
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: .96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: .96 }}
                    transition={{ duration: .22 }}
                    className="absolute right-0 top-full mt-3 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 z-50"
                  >
                    {menusDropdown.map(
                      (item) => (
                        <motion.button
                          key={item.name}
                          whileHover={{ x: 6 }}
                          onClick={() => {
                            handleRoute(item.to);
                            setOpenDropdown(false);
                          }}
                          className="flex w-full flex-col items-start px-6 py-5 text-left transition hover:bg-sky-50"
                        >
                          <span className="font-semibold text-slate-800">
                            {item.name}
                          </span>

                          <span className="mt-1 text-sm text-slate-500">
                            {item.name ===
                              "Wakaf Saham Mandiri"
                              ? "Berwakaf langsung menggunakan saham syariah."
                              : "Berwakaf melalui dana tunai secara mudah dan aman."}
                          </span>
                        </motion.button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => setOpen(true)} className="lg:hidden text-gold-sgs">
              <IconMenu2 size={32} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[999] w-[330px] bg-primary-sgs flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <img src={'navbar/logo-sgs.svg'} className="h-14" />
                <button onClick={() => setOpen(false)} className="text-white">
                  <IconX size={30} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {menus.map((menu, index) => (
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
                        index * .07,
                    }}
                    onClick={() =>
                      handleMenu(
                        menu.section
                      )
                    }
                    className="flex w-full rounded-xl px-5 py-4 text-left text-white transition hover:bg-white/10"
                  >
                    {menu.name}
                  </motion.button>
                ))}
              </div>

              <div className="border-t border-white/10 p-6">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      !openDropdown
                    )
                  }
                  className="flex w-full items-center justify-between px-5 py-4 text-black !bg-gold-sgs"
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
                      className="overflow-hidden"
                    >
                      {menusDropdown.map(
                        (
                          item
                        ) => (
                          <button
                            key={
                              item.name
                            }
                            onClick={() =>
                              handleRoute(
                                item.to
                              )
                            }
                            className="flex w-full rounded-xl pl-10 pr-5 py-3 text-left text-white/80 transition hover:bg-white/10"
                          >
                            {item.name}
                          </button>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="mt-4 text-center text-xs text-white/60">
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