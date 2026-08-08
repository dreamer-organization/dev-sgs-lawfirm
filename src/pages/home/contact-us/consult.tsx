import { motion } from "framer-motion";
import {
    IconUser,
    IconMail,
    IconBuilding,
    IconScale,
    IconMessage2,
    IconArrowRight,
} from "@tabler/icons-react";

export default function ConsultSection() {
    return (
        <section
            id="consult"
            className="relative overflow-hidden bg-primary-blue border-t border-premium-gold-sgs"
        >
            {/* ================= MAIN GRID ================= */}

            <div className="grid min-h-[920px] lg:grid-cols-2">

                {/* ================================================= */}
                {/* LEFT */}
                {/* ================================================= */}

                <div className="relative overflow-hidden bg-[#F8F4EE]">

                    {/* background blur */}

                    <div className="absolute -left-60 -top-60 h-[600px] w-[600px] rounded-full bg-[#D8B97A]/25 blur-[140px]" />

                    <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-[#D8B97A]/15 blur-[100px]" />

                    {/* dotted */}

                    <div className="absolute bottom-12 left-12 grid grid-cols-8 gap-3 opacity-30">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <span
                                key={i}
                                className="h-[3px] w-[3px] rounded-full bg-[#C6A15B]"
                            />
                        ))}
                    </div>

                    <div className="relative z-20 mx-auto flex h-full max-w-[760px] flex-col justify-center px-10 py-24 lg:px-20">

                        {/* ================= TITLE ================= */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                        >

                            <h2 className="font-title text-[64px] leading-none text-[#B8893E]">
                                CONSULT YOUR NEEDS
                            </h2>

                            {/* divider */}

                            <div className="mt-8 flex items-center justify-center lg:justify-start">

                                <div className="h-px w-32 bg-[#C6A15B]" />

                                <div className="mx-3 h-3 w-3 rotate-45 bg-[#C6A15B]" />

                                <div className="h-px w-32 bg-[#C6A15B]" />

                            </div>

                            <p className="mt-10 max-w-[620px] text-[22px] leading-10 text-[#4B5563]">
                                Contact us for a free consultation or in-depth analysis
                                based on a legal perspective for your legal,
                                licensing and business growth needs.
                            </p>

                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                            className="mt-16"
                        >
                            {/* ================= NAME ================= */}

                            <div className="group flex items-center gap-6 border-b border-[#D6D0C6] pb-5 transition-all duration-300 focus-within:border-[#C6A15B]">
                                <IconUser
                                    size={26}
                                    className="text-[#C6A15B] transition-all duration-300 group-focus-within:scale-110"
                                />

                                <label className="min-w-[150px] text-[18px] font-semibold text-[#1E293B]">
                                    Full Name*
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full bg-transparent text-[18px] text-[#374151] placeholder:text-[#9CA3AF] outline-none"
                                />
                            </div>

                            {/* ================= EMAIL ================= */}

                            <div className="group mt-8 flex items-center gap-6 border-b border-[#D6D0C6] pb-5 transition-all duration-300 focus-within:border-[#C6A15B]">
                                <IconMail
                                    size={26}
                                    className="text-[#C6A15B] transition-all duration-300 group-focus-within:scale-110"
                                />

                                <label className="min-w-[150px] text-[18px] font-semibold text-[#1E293B]">
                                    Email Address*
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent text-[18px] text-[#374151] placeholder:text-[#9CA3AF] outline-none"
                                />
                            </div>

                            {/* ================= COMPANY ================= */}

                            <div className="group mt-8 flex items-center gap-6 border-b border-[#D6D0C6] pb-5 transition-all duration-300 focus-within:border-[#C6A15B]">
                                <IconBuilding
                                    size={26}
                                    className="text-[#C6A15B] transition-all duration-300 group-focus-within:scale-110"
                                />

                                <label className="min-w-[150px] text-[18px] font-semibold text-[#1E293B]">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full bg-transparent text-[18px] text-[#374151] placeholder:text-[#9CA3AF] outline-none"
                                />
                            </div>

                            {/* ================= SERVICE ================= */}

                            <div className="group mt-8 flex items-center gap-6 border-b border-[#D6D0C6] pb-5 transition-all duration-300 focus-within:border-[#C6A15B]">
                                <IconScale
                                    size={26}
                                    className="text-[#C6A15B] transition-all duration-300 group-focus-within:scale-110"
                                />

                                <label className="min-w-[150px] text-[18px] font-semibold text-[#1E293B]">
                                    Legal Service
                                </label>

                                <select className="w-full cursor-pointer bg-transparent text-[18px] text-[#6B7280] outline-none">
                                    <option>Select the legal service you need</option>
                                    <option>Corporate Law</option>
                                    <option>Litigation</option>
                                    <option>Banking & Finance</option>
                                    <option>Employment Law</option>
                                    <option>Intellectual Property</option>
                                    <option>Tax Law</option>
                                    <option>Mergers & Acquisition</option>
                                </select>
                            </div>

                            {/* ================= MESSAGE ================= */}

                            <div className="group mt-8 flex items-start gap-6 border-b border-[#D6D0C6] pb-5 transition-all duration-300 focus-within:border-[#C6A15B]">
                                <IconMessage2
                                    size={26}
                                    className="mt-2 text-[#C6A15B] transition-all duration-300 group-focus-within:scale-110"
                                />

                                <label className="min-w-[150px] pt-1 text-[18px] font-semibold text-[#1E293B]">
                                    Message*
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="Tell us more about your legal needs..."
                                    className="w-full resize-none bg-transparent text-[18px] leading-8 text-[#374151] placeholder:text-[#9CA3AF] outline-none"
                                />
                            </div>

                            {/* ================= BUTTON ================= */}

                            <motion.button
                                whileHover={{
                                    scale: 1.03,
                                    y: -3,
                                }}
                                whileTap={{
                                    scale: .98,
                                }}
                                className="group relative mt-16 flex h-[78px] w-[460px] items-center justify-between overflow-hidden border border-[#C6A15B] bg-transparent px-12 transition-all duration-500 hover:bg-[#081119]"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C6A15B]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                                <span className="relative text-[20px] font-semibold uppercase tracking-[0.35em] text-[#081119] transition-colors duration-300 group-hover:text-white">
                                    Schedule Consultation
                                </span>

                                <motion.div
                                    whileHover={{
                                        x: 6,
                                    }}
                                    transition={{
                                        duration: .2,
                                    }}
                                    className="relative"
                                >
                                    <IconArrowRight
                                        size={30}
                                        className="text-[#081119] transition-colors duration-300 group-hover:text-white"
                                    />
                                </motion.div>
                            </motion.button>
                        </motion.form>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3 }}
                            className="mt-16 space-y-9"
                        >

                            {/* PART 2 */}

                        </motion.div>

                    </div>
                </div>

                {/* ================================================= */}
                {/* RIGHT */}
                {/* ================================================= */}

                <div className="relative overflow-hidden bg-navy-sgs">

                    {/* office background */}

                    <img
                        src="/consult.png"
                        className="absolute inset-0 h-full w-full object-cover opacity-25"
                    />

                    {/* overlay */}

                    <div className="absolute inset-0 bg-navy-sgs/70" />

                    {/* glow */}

                    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[180px]" />

                    {/* column */}

                    <img
                        src="/images/column-outline.png"
                        className="absolute left-5 top-10 w-[250px] opacity-10"
                    />

                    {/* leaf */}

                    <img
                        src="/images/leaf-outline.png"
                        className="absolute bottom-10 right-10 w-[180px] opacity-10"
                    />

                    {/* floating decoration */}

                    <motion.div
                        animate={{
                            y: [-12, 12, -12],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 7,
                        }}
                        className="absolute left-[120px] top-[240px] h-[170px] w-[170px] rounded-[40px] border border-[#C6A15B]/25"
                    />

                    <motion.div
                        animate={{
                            y: [10, -15, 10],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                        }}
                        className="absolute bottom-[120px] left-[70px] h-[180px] w-[180px] rounded-[45px] border border-[#C6A15B]/20"
                    />

                    <div className="relative flex h-full items-center justify-center overflow-hidden">

                        {/* ===================================== */}
                        {/* GOLD CARD */}
                        {/* ===================================== */}

                        <motion.div
                            animate={{
                                y: [-8, 8, -8],
                                rotate: [-2, 2, -2],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 8,
                                ease: "easeInOut",
                            }}
                            className="absolute h-[700px] w-[520px] rounded-[48px] bg-gradient-to-br from-[#F0C977] via-[#D6AE61] to-[#A7772E] shadow-[0_60px_120px_rgba(0,0,0,.45)]"
                        />

                        {/* ===================================== */}
                        {/* DARK CARD */}
                        {/* ===================================== */}

                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 7,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 h-[640px] w-[520px] rounded-[42px] border border-[#C6A15B]/70 bg-gradient-to-b from-navy-sgs to-secondary-sgs shadow-[0_50px_120px_rgba(0,0,0,.65)]"
                        >

                            {/* gold glow */}

                            <div className="absolute left-1/2 top-0 h-[6px] w-[180px] -translate-x-1/2 rounded-full bg-[#F3CF84] shadow-[0_0_40px_#F3CF84]" />

                            {/* ===================================== */}
                            {/* LOGO */}
                            {/* ===================================== */}

                            <div className="flex h-full flex-col items-center justify-center">

                                <motion.img
                                    whileHover={{
                                        scale: 1.04,
                                    }}
                                    transition={{
                                        duration: .3,
                                    }}
                                    src="/navbar/logo-sgs.png"
                                    alt="SGS"
                                    className="w-[250px]"
                                />

                                <h2 className="mt-10 font-title text-[42px] tracking-wide text-[#D9B16A]">
                                    SITEPU GOZALI SITORUS
                                </h2>

                                <div className="mt-8 flex items-center">

                                    <div className="h-px w-24 bg-[#C6A15B]" />

                                    <div className="mx-3 h-3 w-3 rotate-45 bg-[#C6A15B]" />

                                    <div className="h-px w-24 bg-[#C6A15B]" />

                                </div>

                            </div>

                        </motion.div>

                        {/* ===================================== */}
                        {/* SMALL FLOATING CARD */}
                        {/* ===================================== */}

                        <motion.div
                            animate={{
                                y: [-15, 15, -15],
                                rotate: [2, -2, 2],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 9,
                            }}
                            className="absolute left-[90px] top-[170px] h-[150px] w-[150px] rounded-[34px] border border-[#C6A15B]/20 bg-[#101B2A]/40 backdrop-blur-xl"
                        />

                        <motion.div
                            animate={{
                                y: [15, -15, 15],
                                rotate: [-2, 2, -2],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                            }}
                            className="absolute bottom-[110px] left-[120px] h-[170px] w-[170px] rounded-[38px] border border-[#C6A15B]/15 bg-[#0D1623]/40 backdrop-blur-xl"
                        />

                        {/* ===================================== */}
                        {/* RADIAL LIGHT */}
                        {/* ===================================== */}

                        <div className="absolute h-[800px] w-[800px] rounded-full bg-[#C6A15B]/10 blur-[180px]" />

                        {/* ===================================== */}
                        {/* DECORATIVE LINES */}
                        {/* ===================================== */}

                        <svg
                            className="absolute left-0 top-0 h-full w-full opacity-[0.06]"
                            viewBox="0 0 900 900"
                            fill="none"
                        >
                            <path
                                d="M180 80C250 120 270 180 270 260"
                                stroke="#D9B16A"
                                strokeWidth="2"
                            />

                            <path
                                d="M180 120C290 180 330 260 330 350"
                                stroke="#D9B16A"
                                strokeWidth="2"
                            />

                            <path
                                d="M740 760C660 710 640 640 640 560"
                                stroke="#D9B16A"
                                strokeWidth="2"
                            />

                            <path
                                d="M780 780C650 700 590 620 590 510"
                                stroke="#D9B16A"
                                strokeWidth="2"
                            />
                        </svg>

                        {/* ===================================== */}
                        {/* GLOW DOTS */}
                        {/* ===================================== */}

                        <div className="absolute right-12 top-10 grid grid-cols-8 gap-3 opacity-30">
                            {Array.from({ length: 64 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="h-[3px] w-[3px] rounded-full bg-[#C6A15B]"
                                />
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}