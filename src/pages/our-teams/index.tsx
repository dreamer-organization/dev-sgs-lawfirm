
import { motion, type Variants } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { IconBrandLinkedin, IconChevronRight, IconMail, IconPhone, IconScale, IconUser } from "@tabler/icons-react";
import { teamMembers } from "@/data/Team";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
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
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function TeamsPage() {
    return (
        <MainLayout>
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
                            backgroundImage: "radial-gradient(#C6A15B 1px, transparent 1px)",
                            backgroundSize: "10px 10px",
                        }}
                    />
                </div>

                <div className="absolute right-8 top-10 h-40 w-32 opacity-25">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: "radial-gradient(#C6A15B 1px, transparent 1px)",
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
                            Our Teams
                        </p>
                        {/* Divider */}
                        <div className="mt-1 mb-3 flex items-center gap-4">
                            <div className="h-px w-11 bg-premium-gold-sgs" />
                            <div className="h-2.5 w-2.5 rotate-45 bg-premium-gold-sgs" />
                            <div className="h-px w-11 bg-premium-gold-sgs" />
                        </div>
                        <h1 className="font-serif text-[72px] leading-[1.05] text-white">
                            Experienced Lawyers.
                            <span className="text-transparent bg-clip-text bg-basic-gold-metallic-sgs">
                                Proven Results.
                                {" "}
                            </span>
                        </h1>
                        <p className="mt-8 max-w-130 text-[20px] leading-9 text-[#C7D0D8]">
                            We team consists of experienced lawyers with diverse expertise and a strong track record of success.
                        </p>
                        <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
                            {["Home", "Teams"].map((item, index) => (
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

            <section className="relative bg-premium-gold-sgs-50 px-6 py-14 md:py-16 lg:py-20">

                {/* Background Texture */}
                <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "radial-gradient(#C6A15B 0.6px, transparent 0.6px)",
                            backgroundSize: "18px 18px",
                            maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                        }}
                    />
                </div>

                <div className="relative z-10 mx-auto container-custom md:container]">
                    {/* SECTION HEADING */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="mb-9 text-center"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <span className="h-px w-20 bg-basic-gold-metallic-sgs" />
                            <h2 className="font-serif text-[30px] font-semibold uppercase tracking-[1px] text-navy-sgs-dafrom-navy-sgs-dark md:text-[34px]">
                                MEET OUR PROFESSIONALS
                            </h2>
                            <span className="h-px w-20 bg-basic-gold-metallic-sgs" />
                        </div>
                        <div className="mt-3 flex justify-center">
                            <div className="h-2 w-2 rotate-45 bg-basic-gold-metallic-sgs" />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.08,
                        }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {teamMembers.map((member) => (
                            <motion.article
                                key={member.id}
                                variants={cardVariants}
                                className="group relative flex flex-col overflow-hidden border border-[#DDD7CE] bg-[#FCFAF7] shadow-[0_8px_25px_rgba(7,17,24,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(7,17,24,0.15)]"
                            >
                                <div className="relative aspect-[1] overflow-hidden bg-navy-sgs">
                                    {/* Image */}
                                    <img
                                        src={member.imageDetail}
                                        alt={member.name.replace("\n", " ")}
                                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-navy-sgs-dark/55 via-transparent to-transparent" />
                                    {/* Gold Glow */}
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-navy-sgs-dark/30 to-transparent" />
                                    {/* Profile Badge */}
                                    <div className="absolute -bottom-px left-1/2 flex h-13.75 w-13.75 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-[3px] border-basic-bg-basic-gold-metallic-sgs bg-navy-sgs shadow-[0_3px_15px_rgba(0,0,0,0.3)]">
                                        <div className="flex h-10.75 w-10.75 items-center justify-center rounded-full border border-basic-bg-basic-gold-metallic-sgs/50">
                                            <IconUser
                                                size={21}
                                                stroke={1.4}
                                                className="text-transparent bg-clip-text bg-basic-gold-metallic-sgs"
                                            />
                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-1 flex-col px-4 pb-4 pt-8 text-center">
                                    {/* Name */}
                                    <h3 className="min-h-11.5 whitespace-pre-line font-serif text-[17px] font-bold uppercase leading-[1.15] tracking-[0.5px] text-navy-sgs-dafrom-navy-sgs-dark">
                                        {member.name}
                                    </h3>
                                    {/* Position */}
                                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[1.3px] text-premium-gold-sgs">
                                        {member.position}
                                    </p>
                                    {/* Small Divider */}
                                    <div className="mx-auto mt-2 flex items-center justify-center gap-2">
                                        <span className="h-px w-7 bg-basic-gold-metallic-sgs" />
                                        <span className="h-1.25 w-1.25 rotate-45 bg-basic-gold-metallic-sgs" />
                                        <span className="h-px w-7 bg-basic-gold-metallic-sgs" />
                                    </div>
                                    {/* Description */}
                                    <p className="mt-3 min-h-18 text-[11px] leading-[1.65] text-[#27333D]">
                                        {member.description}
                                    </p>
                                    {/* Social */}
                                    <div className="mt-auto flex items-center justify-center gap-4 pt-4">
                                        <a
                                            href={member.linkedin}
                                            aria-label={`${member.name} LinkedIn`}
                                            className="text-transparent bg-clip-text bg-basic-gold-metallic-sgs transition-colors duration-300 hover:text-navy-sgs-dafrom-navy-sgs-dark"
                                        >
                                            <IconBrandLinkedin
                                                size={20}
                                                stroke={1.8}
                                            />
                                        </a>
                                        <a
                                            href={member.email}
                                            aria-label={`${member.name} Email`}
                                            className="text-transparent bg-clip-text bg-basic-gold-metallic-sgs transition-colors duration-300 hover:text-navy-sgs-dafrom-navy-sgs-dark"
                                        >
                                            <IconMail
                                                size={20}
                                                stroke={1.7}
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* Gold Bottom Border */}
                                <div className="h-0.75 w-full bg-basic-gold-metallic-sgs transition-all duration-500 group-hover:h-1.25" />
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-navy-sgs">
                {/* Background */}
                <div className="absolute inset-0 bg-linear-to-r from-navy-sgs via-navy-sgs to-navy-sgs" />
                {/* Decorative Gold Line */}
                <div className="absolute left-0 top-0 h-px w-full bg-basic-gold-metallic-sgs/50" />
                {/* Decorative Background */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-basic-bg-basic-gold-metallic-sgs/10" />
                <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-basic-bg-basic-gold-metallic-sgs/10" />
                <div className="relative z-10 mx-auto grid max-w-287.5 grid-cols-1 items-center gap-8 px-6 py-7 md:grid-cols-[180px_1fr] md:gap-10">
                    {/* LEFT */}
                    <div className="flex items-center justify-center gap-5 md:justify-start">
                        <div className="flex h-19 w-19 shrink-0 items-center justify-center rounded-full border border-basic-bg-basic-gold-metallic-sgs">
                            <div className="flex h-15.5 w-15.5 items-center justify-center rounded-full border border-basic-bg-basic-gold-metallic-sgs/50">
                                <img src="/navbar/logo-sgs.png" alt="SGS" />
                            </div>
                        </div>
                        <div className="font-serif text-[15px] font-semibold uppercase leading-7 tracking-[1px] text-transparent bg-clip-text bg-basic-gold-metallic-sgs">
                            <div>EXPERIENCED.</div>
                            <div>DEDICATED.</div>
                            <div>TRUSTED.</div>
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="relative text-center">
                        <div className="absolute -left-5 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-basic-gold-metallic-sgs/40 md:block" />
                        <p className="mx-auto max-w-152.5 text-[14px] leading-7 text-[#E5E8EB] md:text-[15px]">
                            With a strong foundation in legal excellence
                            and a client-first approach, our team is here
                            to navigate complex challenges and deliver
                            results that matter.
                        </p>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <span className="h-px w-16 bg-basic-gold-metallic-sgs/60" />
                            <span className="h-2 w-2 rotate-45 bg-basic-gold-metallic-sgs" />
                            <span className="h-px w-16 bg-basic-gold-metallic-sgs/60" />
                        </div>
                        <div className="absolute -right-5 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-basic-gold-metallic-sgs/40 md:block" />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}