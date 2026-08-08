import { motion, type Variants } from "framer-motion";
import MainLayout from "../layouts/MainLayout";

import {
    IconGavel,
    IconCoins,
    IconBriefcase,
    IconBulb,
    IconFileInvoice,
    // IconHandshake,
    IconHome,
    IconArrowRight,
    IconScale,
    IconChevronRight,
} from "@tabler/icons-react";

const practiceAreas = [
    {
        title: "General Corporate & Liquidation",
        description: "Combining experience and practicality to help clients manage and mitigate potential legal issues in day-to-day business activities, as well as arranging company liquidation based on client needs.",
        imageIcon: '/practice-areas/1.svg',
    },
    {
        title: "Litigation & Dispute Settlement",
        description: "Providing meticulous legal advice and representation in default cases, real estate, corporate fraud, employment claims, land disputes, criminal acts, and more based on strategic solutions.",
        imageIcon: '/practice-areas/2.svg',
    },
    {
        title: "Industrial & Employment",
        description: "Preventing industrial catastrophes such as internal fraud and embezzlement through expert advice backed by long-standing experience in handling industrial relations matters.",
        imageIcon: '/practice-areas/3.svg',
    },
    {
        title: "Finance & Banking",
        description: "Addressing the financial and banking rules and regulations challenges of doing business by providing practical and commercial legal advice tailored to client needs.",
        imageIcon: '/practice-areas/4.svg',
    },
    {
        title: "INTELLECTUAL PROPERTY RIGHTS",
        description: "Offering a complete package of legal services for filing registration, protection, and enforcement of every intellectual property right for businesses.",
        imageIcon: '/practice-areas/5.svg',
    },
    {
        title: "ENGINEERING, & CONSTRUCTION",
        description: "Handling complex transactions across EPC aspects administratively, commercially, and practically to prevent and resolve potential future disputes.",
        imageIcon: '/practice-areas/6.svg',
    },
    {
        title: "MERGERS & ACQUISITIONS",
        description: "Providing integrated legal services to ensure the overall success of M&A deals and full compliance with Indonesia's rigorous antitrust regime.",
        imageIcon: '/practice-areas/7.svg',
    },
    {
        title: "ANTI MONOPOLY & BUSINESS COMPETITION",
        description: "Representing and assisting clients before the Indonesian Competition Supervisory Commission (KPPU) and court proceedings regarding alleged competition law violations.",
        imageIcon: '/practice-areas/8.svg',
    },
    {
        title: "ENERGY & NATURAL RESOURCES",
        description: "Offering an extensive range of drafting and reviewing agreements, advising on compliance requirements, and interpreting updated statutory energy provisions.",
        imageIcon: '/practice-areas/9.svg',
    },
    {
        title: "DEBT RESTRUCTURING & BANKRUPTCY",
        description: "Delivering collaborative actions and solutions to solve debt restructuring and bankruptcy issues through in-depth research and efficient legal courses.",
        imageIcon: '/practice-areas/10.svg',
    },
    {
        title: "CONSUMER PROTECTION",
        description: "Positioning client issues at the center of our work with experienced professionals who are efficiently familiar with corporate consumer protection strategies.",
        imageIcon: '/practice-areas/11.svg',
    },
    {
        title: "REAL ESTATE & PROPERTY",
        description: "Handling land and property acquisitions alongside full-package advice and dispute settlement solutions for real estate and property matters.",
        imageIcon: '/practice-areas/12.svg',
    },
    {
        title: "FINTECH LENDING (P2P LENDING)",
        description: "Providing strong legal representation in P2P lending disputes, NPL litigation, debt restructuring, and corporate legal aspects of P2P business operations.",
        imageIcon: '/practice-areas/13.svg',
    },
    {
        title: "REGULATION OF OJK",
        description: "Assisting firms in achieving full regulatory adherence to OJK frameworks, licensing, POJK compliance reviews, and internal policy amendments.",
        imageIcon: '/practice-areas/14.svg',
    },
    {
        title: "TAX ADVISORY & DISPUTE SERVICES",
        description: "Providing strategic tax support including compliance, reporting (SPT), handling tax inquiries (SP2DK), audits, and dispute resolution to manage tax risks.",
        imageIcon: '/practice-areas/15.svg',
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function PracticeAreasPage() {
    return (
        <MainLayout>
            <div className="min-h-screen bg-[#F7F3EC]">


                {/* HERO SECTION */}
                <section className="relative py-12 pt-44 overflow-hidden bg-navy-sgs">
                    {/* Background Image */}
                    <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=80" className="absolute inset-0 h-full w-full object-cover object-center" />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-navy-sgs/75" />

                    {/* Left Gradient */}
                    <div className="absolute inset-y-0 left-0 w-[65%] bg-linear-to-r from-navy-sgs via-navy-sgs/90 to-transparent" />

                    {/* Top Gradient */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#020912]/80 to-transparent" />

                    {/* Bottom Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#050E18] to-transparent" />

                    {/* Decorative Gold Dots */}
                    <div className="absolute left-0 top-20 h-44 w-28 opacity-40">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#C6A15B 1px, transparent 1px)",
                                backgroundSize: "10px 10px",
                            }}
                        />
                    </div>

                    <div className="absolute right-8 top-10 h-40 w-32 opacity-25">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#C6A15B 1px, transparent 1px)",
                                backgroundSize: "10px 10px",
                            }}
                        />
                    </div>

                    {/* Decorative Law Column */}
                    <div className="absolute -left-10 bottom-0 opacity-20">
                        <div className="h-82.5 w-47.5 border-x border-basic-bg-basic-gold-metallic-sgs/30" />
                    </div>

                    {/* Decorative Justice Figure */}
                    <div className="absolute right-[5%] bottom-0 hidden lg:block opacity-35">
                        <div className="relative h-75 w-57.5">

                            {/* Head */}
                            <div className="absolute left-23.75 top-3 h-12 w-12 rounded-full border border-basic-bg-basic-gold-metallic-sgs" />

                            {/* Body */}
                            <div className="absolute left-17.5 top-14 h-52 w-20 rounded-t-full border border-basic-bg-basic-gold-metallic-sgs/70" />

                            {/* Arm */}
                            <div className="absolute right-2 top-24 h-px w-32 rotate-[-15deg] bg-basic-gold-metallic-sgs" />

                            {/* Scales */}
                            <div className="absolute -right-3.75 top-16">
                                <div className="h-px w-28 bg-basic-gold-metallic-sgs" />

                                <div className="absolute left-4 top-0 h-20 w-px bg-basic-gold-metallic-sgs" />
                                <div className="absolute right-4 top-0 h-20 w-px bg-basic-gold-metallic-sgs" />

                                <div className="absolute -left-1 top-16 h-8 w-10 rounded-b-full border border-basic-bg-basic-gold-metallic-sgs" />
                                <div className="absolute -right-1 top-16 h-8 w-10 rounded-b-full border border-basic-bg-basic-gold-metallic-sgs" />
                            </div>
                        </div>
                    </div>

                    {/* CONTENT HERO */}
                    <div className="container-custom md:container relative z-10 mx-auto flex h-full items-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .7 }}
                            className="max-w-160"
                        >
                            <p className="mb-5 font-semibold uppercase tracking-[4px] text-transparent bg-clip-text bg-basic-gold-metallic-sgs">
                                Practices Area
                            </p>

                            {/* Divider */}
                            <div className="mt-1 mb-3 flex items-center gap-4">
                                <div className="h-px w-18.5 bg-premium-gold-sgs" />
                                <div className="h-2.5 w-2.5 rotate-45 bg-premium-gold-sgs" />
                                <div className="h-px w-18.5 bg-premium-gold-sgs" />
                            </div>

                            <h1 className="font-serif text-[72px] leading-[1.05] text-white">
                                Comprehensive Legal Services <span className="text-transparent bg-clip-text bg-basic-gold-metallic-sgs">for Every Need.</span>
                            </h1>

                            <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
                                {["Home", "Practices Area"].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span
                                            className={
                                                index === item.length
                                                    ? "text-transparent bg-clip-text bg-basic-gold-metallic-sgs"
                                                    : ""
                                            }
                                        >
                                            {item}
                                        </span>

                                        {index !== item.length && (
                                            <IconChevronRight
                                                size={14}
                                                stroke={1.5}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Gold Bottom Line */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-basic-gold-metallic-sgs/70" />
                </section>

                <section className="relative overflow-hidden bg-premium-gold-sgs-50 py-20 lg:py-24">
                    {/* Background Decorative Dots - Left */}
                    <div className="absolute left-0 top-12 h-50 w-32 opacity-40">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#C6A15B 1px, transparent 1px)",
                                backgroundSize: "10px 10px",
                            }}
                        />
                    </div>
                    {/* Background Decorative Dots - Right */}
                    <div className="absolute bottom-20 right-0 h-48 w-32 opacity-30">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#C6A15B 1px, transparent 1px)",
                                backgroundSize: "10px 10px",
                            }}
                        />
                    </div>
                    <div className="container-custom relative z-10 mx-auto px-6">
                        {/* Section Heading */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="mb-14 text-center"
                        >
                            <p className="font-semibold uppercase tracking-[4px] text-premium-gold-sgs">
                                Our Expertise
                            </p>
                            <h2 className="mt-3 font-serif text-4xl font-semibold uppercase tracking-wide text-[#071118] md:text-5xl">
                                Legal Services
                            </h2>
                            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                                <div className="h-px w-20 bg-premium-gold-sgs" />
                                <div className="h-2 w-2 rotate-45 bg-premium-gold-sgs" />
                                <div className="h-px w-20 bg-premium-gold-sgs" />
                            </div>
                            <p className="mx-auto mt-6 max-w-180 text-[16px] leading-7 text-[#59616A]">
                                Our comprehensive practice areas are designed to
                                provide strategic, practical, and commercially
                                focused legal solutions for every stage of your
                                business.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
                        >
                            {practiceAreas.map((area, index) => {
                                return (
                                    <motion.div
                                        key={area.title}
                                        variants={cardVariants}
                                        className="group relative flex h-full min-h-94.5 flex-col border border-[#D8D2C8] bg-[#FCFAF6] p-6 shadow-[0_8px_25px_rgba(20,30,40,0.04)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-premium-gold-sgs hover:shadow-[0_18px_35px_rgba(7,17,24,0.12)]"
                                    >
                                        {/* Top Gold Accent */}
                                        <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-premium-gold-sgs transition-transform duration-500 group-hover:scale-x-100" />
                                        {/* Number */}
                                        <span className="absolute right-6 top-6 font-sans text-sm tracking-wide text-premium-gold-sgs/80">
                                            {index + 1}
                                        </span>

                                        {/* Icon */}
                                        <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center">
                                            <img src={area.imageIcon} alt="" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="max-w-55 font-serif text-[22px] font-bold uppercase leading-[0.95] text-navy-bg-navy-sgs">
                                            {area.title}
                                        </h3>

                                        {/* Gold divider */}
                                        <div className="mt-5 flex items-center gap-2">
                                            <span className="h-px w-11 bg-premium-gold-sgs" />
                                            <span className="h-1.5 w-1.5 rotate-45 bg-premium-gold-sgs" />
                                        </div>

                                        {/* Description */}
                                        <p className="mt-6 font-sans text-[14px] leading-7 text-[#40526A]">
                                            {area.description}
                                        </p>

                                        {/* Arrow */}
                                        <div className="mt-auto flex justify-end pt-8">
                                            <IconArrowRight
                                                size={24}
                                                stroke={1.5}
                                                className="text-premium-gold-sgs"
                                            />
                                        </div>

                                        {/* Bottom Gold Line */}
                                        <div className="absolute inset-x-0 bottom-0 h-0.75 bg-premium-gold-metallic-sgs" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-navy-sgs py-14">
                    {/* Background */}
                    <div className="absolute inset-0 bg-linear-to-r from-navy-bg-navy-sgs via-[#071522] to-navy-bg-navy-sgs" />
                    {/* Decorative Glow */}
                    <div className="absolute left-[10%] top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-premium-gold-sgs/5 blur-3xl" />
                    <div className="absolute right-[10%] top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-premium-gold-sgs/5 blur-3xl" />
                    <div className="container-custom relative z-10 mx-auto px-6">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1.5fr_auto]">
                            {/* LEFT */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="flex items-center gap-6"
                            >
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-premium-gold-sgs">
                                    <img src="/navbar/logo-sgs.png" alt="SGS" />
                                </div>
                                <div>
                                    <p className="font-serif text-xl font-semibold leading-tight text-premium-gold-sgs">
                                        EXPERIENCED.
                                    </p>
                                    <p className="font-serif text-xl font-semibold leading-tight text-premium-gold-sgs">
                                        DEDICATED.
                                    </p>
                                    <p className="font-serif text-xl font-semibold leading-tight text-premium-gold-sgs">
                                        TRUSTED.
                                    </p>
                                </div>
                            </motion.div>

                            {/* DIVIDER */}
                            <div className="hidden h-20 w-px bg-premium-gold-sgs/40 lg:block" />

                            {/* CENTER */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="text-center"
                            >
                                <p className="text-[15px] leading-7 text-[#E3E8EC] md:text-[16px]">
                                    We are committed to delivering practical legal
                                    solutions with integrity, professionalism,
                                    and a deep understanding of our clients'
                                    goals.
                                </p>
                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <div className="h-px w-20 bg-premium-gold-sgs" />
                                    <div className="h-2 w-2 rotate-45 bg-premium-gold-sgs" />
                                    <div className="h-px w-20 bg-premium-gold-sgs" />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}