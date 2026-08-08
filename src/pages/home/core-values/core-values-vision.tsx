import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    Target,
    UsersRound,
    Scale,
} from "lucide-react";

const values = [
    {
        id: 1,
        title: "PROFESSIONAL",
        titleSecond: "EXCELLENCE",
        description:
            "We uphold the highest professional standards through expertise, precision and a commitment to delivering exceptional legal solutions.",
        icon: UsersRound,
    },
    {
        id: 2,
        title: "INTEGRITY & TRUST",
        titleSecond: "",
        description:
            "Integrity is the foundation of our practice. We build lasting trust through transparency, ethical conduct and unwavering confidentiality.",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "CLIENT-CENTERED",
        titleSecond: "SOLUTIONS",
        description:
            "We focus on understanding our clients’ needs and delivering practical, effective solutions that create real and measurable value.",
        icon: Target,
    },
];

export default function CoreValuesVision() {
    return (
        <section
            id="core-values"
            className="relative isolate overflow-hidden bg-[#F8F5EF] py-24 lg:pb-28 lg:pt-16"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute left-1/2 top-[30%] h-175 w-225 -translate-x-1/2 rounded-full bg-premium-gold-sgs/5.5 blur-[130px]" />
                <div className="absolute -left-[110px] top-[-40px] hidden h-175 w-[300px] opacity-[0.10] lg:block">
                    <div className="absolute left-[80px] top-0 h-[70px] w-[180px] border-b-[12px] border-[#8B806F]" />

                    <div className="absolute left-[55px] top-[55px] h-[35px] w-[230px] rounded-sm bg-[#8B806F]" />

                    <div className="absolute left-[80px] top-[90px] h-[500px] w-[180px] rounded-t-[80px] bg-gradient-to-r from-[#8B806F]/30 via-[#8B806F]/10 to-[#8B806F]/30">
                        <div className="absolute left-[20px] top-0 h-full w-[25px] bg-[#8B806F]/20" />
                        <div className="absolute left-[65px] top-0 h-full w-[25px] bg-[#8B806F]/15" />
                        <div className="absolute left-[110px] top-0 h-full w-[25px] bg-[#8B806F]/20" />
                    </div>
                    <div className="absolute left-[45px] top-[580px] h-[40px] w-[250px] bg-[#8B806F]/30" />
                </div>

                <div className="absolute -right-[50px] top-[30px] hidden opacity-[0.11] lg:block">
                    <Scale
                        strokeWidth={1}
                        className="h-[500px] w-[500px] text-[#8B806F]"
                    />
                </div>
                
                <div className="absolute right-[80px] top-[40px] grid grid-cols-6 gap-[9px] opacity-40">
                    {Array.from({ length: 54 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-[4px] w-[4px] rounded-full bg-premium-gold-sgs"
                        />
                    ))}
                </div>

                <svg
                    className="absolute -left-20 top-[180px] h-[280px] w-[360px] opacity-40"
                    viewBox="0 0 360 280"
                    fill="none"
                >
                    <path
                        d="M-20 250C80 210 40 90 190 70C260 60 300 20 350 -20"
                        stroke="#C6A15B"
                        strokeWidth="1"
                    />
                    <path
                        d="M-20 270C100 220 65 105 205 85C275 75 320 30 365 -15"
                        stroke="#C6A15B"
                        strokeWidth="1"
                    />
                    <path
                        d="M-15 225C65 190 45 110 165 90"
                        stroke="#C6A15B"
                        strokeWidth="1"
                    />
                </svg>

                <div className="absolute bottom-[60px] left-[20px] grid grid-cols-8 gap-[10px] opacity-30">
                    {Array.from({ length: 64 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-[4px] w-[4px] rounded-full bg-premium-gold-sgs"
                        />
                    ))}
                </div>
            </div>

            <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mx-auto max-w-[1050px] text-center"
                >
                    {/* SMALL LABEL */}

                    <div className="flex items-center justify-center gap-6">
                        <span className="h-px w-16 bg-premium-gold-sgs" />

                        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.35em] text-[#B0833D]">
                            Our
                        </span>

                        <span className="h-px w-16 bg-premium-gold-sgs" />
                    </div>

                    {/* TITLE */}

                    <h2 className="mt-5 font-title text-5xl font-semibold leading-none tracking-[-0.02em] text-navy-sgs sm:text-6xl lg:text-4xl">
                        CORE VALUES{" "}
                        <span className="text-premium-gold-sgs">&amp;</span>{" "}
                        VISION
                    </h2>

                    {/* GOLD DIVIDER */}

                    <div className="mt-7 flex items-center justify-center">
                        <span className="h-px w-20 bg-premium-gold-sgs" />
                        <span className="mx-3 h-3 w-3 rotate-45 bg-premium-gold-sgs" />
                        <span className="h-px w-20 bg-premium-gold-sgs" />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mx-auto mt-8 max-w-[850px] font-sans text-base leading-8 text-[#4B5563] sm:text-lg">
                        Guided by values that shape our actions and a vision
                        that inspires our purpose, we deliver excellence,
                        integrity and trusted legal solutions.
                    </p>
                </motion.div>

                {/* ===================================================== */}
                {/* VALUES GRID */}
                {/* ===================================================== */}
                <div className="relative z-10 mt-20 grid gap-16 md:grid-cols-3 md:gap-6 lg:mt-18 lg:gap-7">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.article
                                key={value.id}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative"
                            >
                                <div className="relative min-h-100 overflow-hidden rounded-[18px] border border-[#1E3141] bg-gradient-to-b from-[#0A1927] to-navy-sgs px-7 pb-14 pt-14 shadow-[0_30px_60px_rgba(7,17,24,.18)] transition-all duration-500 group-hover:border-premium-gold-sgs/70 group-hover:shadow-[0_35px_70px_rgba(7,17,24,.30)] sm:px-10">
                                    {/* subtle background glow */}
                                    <div className="absolute left-1/2 top-0 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-premium-gold-sgs/[0.05] blur-[70px]" />
                                    {/* Decorative laurel-like lines */}
                                    <svg
                                        className="absolute bottom-3 left-4 h-[170px] w-[100px] opacity-[0.08]"
                                        viewBox="0 0 100 170"
                                        fill="none"
                                    >
                                        <path
                                            d="M85 165C45 140 25 100 25 50C25 25 40 10 55 5"
                                            stroke="#C6A15B"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M72 145C55 125 48 100 48 75"
                                            stroke="#C6A15B"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M60 125C38 112 30 98 26 80"
                                            stroke="#C6A15B"
                                            strokeWidth="2"
                                        />
                                    </svg>

                                    <svg
                                        className="absolute bottom-3 right-4 h-[170px] w-[100px] -scale-x-100 opacity-[0.08]"
                                        viewBox="0 0 100 170"
                                        fill="none"
                                    >
                                        <path
                                            d="M85 165C45 140 25 100 25 50C25 25 40 10 55 5"
                                            stroke="#C6A15B"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M72 145C55 125 48 100 48 75"
                                            stroke="#C6A15B"
                                            strokeWidth="2"
                                        />
                                    </svg>

                                    {/* ================================================= */}
                                    {/* CARD TITLE */}
                                    {/* ================================================= */}
                                    <div className="relative text-center">
                                        <h3 className="font-title text-[28px] font-semibold uppercase leading-[1.05] text-[#DDB86D] lg:text-[30px]">
                                            {value.title}
                                            {value.titleSecond && (
                                                <>
                                                    <br />
                                                    {value.titleSecond}
                                                </>
                                            )}
                                        </h3>

                                        {/* small divider */}

                                        <div className="mt-6 flex items-center justify-center">
                                            <span className="h-px w-16 bg-premium-gold-sgs/80" />

                                            <span className="mx-3 h-2.5 w-2.5 rotate-45 bg-premium-gold-sgs" />

                                            <span className="h-px w-16 bg-premium-gold-sgs/80" />
                                        </div>

                                        {/* description */}

                                        <p className="mx-auto mt-7 max-w-[330px] text-[16px] leading-7 text-[#E5E7EB]">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* ================================================= */}
                                    {/* GOLD BOTTOM BORDER */}
                                    {/* ================================================= */}

                                    <div className="absolute bottom-0 left-0 h-[6px] w-full bg-gradient-to-r from-[#8E682C] via-[#DDB86D] to-[#8E682C]" />

                                    {/* center diamond */}

                                    <div className="absolute bottom-[-7px] left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 border border-[#E2BC6C] bg-[#DDB86D]" />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* ===================================================== */}
                {/* CTA */}
                {/* ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                    }}
                    className="relative z-20 mt-16 flex justify-center lg:mt-20"
                >
                    <motion.a
                        href="#practice-areas"
                        whileHover={{
                            scale: 1.03,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        className="group relative flex min-h-[68px] min-w-[300px] items-center justify-center gap-8 overflow-hidden border border-premium-gold-sgs bg-navy-sgs px-10 shadow-[0_15px_40px_rgba(7,17,24,.20)]"
                    >
                        {/* Hover gold layer */}

                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#A87B32] via-[#DDB86D] to-[#A87B32] transition-transform duration-500 group-hover:translate-x-0" />

                        <span className="relative z-10 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:text-navy-sgs">
                            View Our Practice Areas
                        </span>

                        <ArrowRight
                            size={24}
                            strokeWidth={1.5}
                            className="relative z-10 text-[#DDB86D] transition-all duration-300 group-hover:translate-x-2 group-hover:text-navy-sgs"
                        />
                    </motion.a>
                </motion.div>
            </div>

            {/* ========================================================= */}
            {/* BOTTOM GOLD GLOW */}
            {/* ========================================================= */}

            <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[2px] w-[60%] -translate-x-1/2 bg-premium-gold-sgs opacity-60 blur-[2px]" />
        </section>
    );
}