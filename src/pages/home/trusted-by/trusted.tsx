import { motion } from "framer-motion";

const clients = [
    {
        id: 1,
        name: "G4S",
        logo: "/trusted-by/client-1.webp",
    },
    {
        id: 2,
        name: "UOB",
        logo: "/trusted-by/client-2.webp",
    },
    {
        id: 3,
        name: "Boost",
        logo: "/trusted-by/client-3.webp",
    },
    {
        id: 4,
        name: "ON",
        logo: "/trusted-by/client-4.webp",
    },
    {
        id: 5,
        name: "Prodigi",
        logo: "/trusted-by/client-5.webp",
    },
    {
        id: 6,
        name: "IVOJI",
        logo: "/trusted-by/client-6.webp",
    },
    {
        id: 7,
        name: "Musim Mas",
        logo: "/trusted-by/client-7.webp",
    },
    {
        id: 8,
        name: "Alamii",
        logo: "/trusted-by/client-8.webp",
    },
    {
        id: 9,
        name: "Amartha",
        logo: "/trusted-by/client-9.webp",
    },
    {
        id: 10,
        name: "AsiaPay",
        logo: "/trusted-by/client-10.webp",
    },
    {
        id: 11,
        name: "Blur London",
        logo: "/trusted-by/client-11.webp",
    },
    {
        id: 12,
        name: "FIFGROUP",
        logo: "/trusted-by/client-12.webp",
    },
    {
        id: 13,
        name: "ICS Compute",
        logo: "/trusted-by/client-13.webp",
    },
];

export default function TrustedBy() {
    return (
        <section className="relative overflow-hidden bg-navy-sgs py-32 lg:py-40">

            {/* ================= BACKGROUND ================= */}

            <div className="absolute inset-0">

                {/* radial glow */}
                <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/5 blur-[180px]" />

                {/* top gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,161,91,.06),transparent_65%)]" />

            </div>

            {/* left top gold lines */}

            <svg
                className="absolute left-0 top-0 h-[260px] w-[260px] opacity-30"
                viewBox="0 0 300 300"
                fill="none"
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <path
                        key={i}
                        d={`M-40 ${20 + i * 18}
                            C60 ${-20 + i * 18},
                            180 ${20 + i * 18},
                            340 ${-10 + i * 18}`}
                        stroke="#C6A15B"
                        strokeWidth="1"
                    />
                ))}
            </svg>

            {/* right bottom */}

            <svg
                className="absolute bottom-0 right-0 h-[260px] w-[260px] rotate-180 opacity-30"
                viewBox="0 0 300 300"
                fill="none"
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <path
                        key={i}
                        d={`M-40 ${20 + i * 18}
                            C60 ${-20 + i * 18},
                            180 ${20 + i * 18},
                            340 ${-10 + i * 18}`}
                        stroke="#C6A15B"
                        strokeWidth="1"
                    />
                ))}
            </svg>

            {/* dot pattern */}

            <div className="absolute right-16 top-16 grid grid-cols-8 gap-4 opacity-30">
                {Array.from({ length: 64 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#C6A15B]"
                    />
                ))}
            </div>

            <div className="absolute bottom-16 left-16 grid grid-cols-8 gap-4 opacity-20">
                {Array.from({ length: 64 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#C6A15B]"
                    />
                ))}
            </div>

            {/* ================= CONTENT ================= */}

            <div className="relative container-custom">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: .7,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <div className="flex items-center justify-center gap-5">

                        <span className="h-px w-20 bg-[#C6A15B]" />

                        <div className="h-3 w-3 rotate-45 bg-[#C6A15B]" />

                        <span className="h-px w-20 bg-[#C6A15B]" />

                    </div>

                    <p className="mt-8 tracking-[0.35em] uppercase text-[#C6A15B] text-xl font-light">
                        Trusted By
                    </p>

                    <div className="mx-auto mt-8 h-[2px] w-40 bg-[#C6A15B]" />

                    <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-[#B7C1CB]">

                        We are proud to collaborate with forward-thinking
                        organizations that value integrity, expertise,
                        professionalism, and long-term legal partnership.

                    </p>

                </motion.div>

                {/* LOGO GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    className="relative z-10 mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {clients.map((client) => (
                        <motion.div
                            key={client.name}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.55,
                            }}
                            whileHover={{
                                y: -6,
                            }}
                            className="group relative overflow-hidden rounded-xl border border-[#263445] bg-linear-to-br from-secondary-sgs to-navy-sgs transition-all duration-500 hover:border-[#C6A15B] hover:shadow-[0_0_40px_rgba(198,161,91,.18)]"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-3xl" />
                            </div>

                            {/* Gold Top Border */}
                            <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />

                            {/* Content */}
                            <div className="relative flex h-[140px] items-center justify-center p-10 cursor-pointer">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-30 max-w-[180px] object-contain transition-all duration-500 grayscale brightness-90 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 rounded-md"
                                />
                            </div>

                            {/* Bottom Glow */}
                            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative Line Top Left */}
                <div className="pointer-events-none absolute left-0 top-0 opacity-30">
                    <svg
                        width="420"
                        height="240"
                        viewBox="0 0 420 240"
                        fill="none"
                    >
                        {Array.from({ length: 14 }).map((_, i) => (
                            <path
                                key={i}
                                d={`M-${i * 16} 0 Q180 ${90 + i * 12} 420 ${30 + i * 16}`}
                                stroke="#C6A15B"
                                strokeWidth=".7"
                                opacity=".45"
                            />
                        ))}
                    </svg>
                </div>

                {/* Decorative Line Bottom Right */}
                <div className="pointer-events-none absolute bottom-0 right-0 rotate-180 opacity-30">
                    <svg
                        width="420"
                        height="240"
                        viewBox="0 0 420 240"
                        fill="none"
                    >
                        {Array.from({ length: 14 }).map((_, i) => (
                            <path
                                key={i}
                                d={`M-${i * 16} 0 Q180 ${90 + i * 12} 420 ${30 + i * 16}`}
                                stroke="#C6A15B"
                                strokeWidth=".7"
                                opacity=".45"
                            />
                        ))}
                    </svg>
                </div>

                {/* Dot Pattern */}
                <div className="absolute right-20 top-16 grid grid-cols-8 gap-3 opacity-20">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-[2px] w-[2px] rounded-full bg-[#C6A15B]"
                        />
                    ))}
                </div>

                <div className="absolute bottom-20 left-12 grid grid-cols-8 gap-3 opacity-20">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-[2px] w-[2px] rounded-full bg-[#C6A15B]"
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}