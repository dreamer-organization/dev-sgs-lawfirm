import { approachSteps } from "@/data/Approach";
import { motion } from "framer-motion";

export default function Approach() {
    return (
        <section className="relative w-full bg-primary-sgs overflow-hidden">
            <div className="grid lg:grid-cols-[45%_55%]">
                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="relative h-[420px] lg:h-auto" >
                    <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1974&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/45" />

                    {/* Gradient */}
                    <div className="absolute inset-y-0 right-0 w-72 bg-gradient-to-r from-transparent via-primary-sgs/60 to-primary-sgs" />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8, delay: .15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex items-center"
                >
                    <div className="w-full max-w-5xl px-8 md:px-14 lg:px-24 py-24">
                        {/* Label */}
                        <div className="flex items-center gap-5 mb-8">
                            <span className="uppercase tracking-[6px] text-[#B7924D] text-xs md:text-sm font-semibold">
                                Our Approach
                            </span>
                            <div className="h-px w-20 bg-[#B7924D]" />
                        </div>

                        {/* Title */}
                        <h2 className="text-white font-serif leading-[1.05] text-[42px] md:text-[58px] lg:text-[66px] max-w-4xl">
                            Strategic. Focused.
                            <br />
                            Result Driven.
                        </h2>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-[#9AA4AF] text-lg leading-9">
                            We take a client-centric approach to understand your
                            business, mitigate risks, and unlock opportunities.
                        </p>

                        {/* Timeline*/}
                        <div className="relative mt-8">
                            {/* Garis */}
                            <div className="hidden sm:block absolute top-[38px] left-0 right-0 border-t border-dashed border-[#8D6A2E]/60" />
                            <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-6">
                                {approachSteps.map((step, index) => {
                                    const Icon = step.icon;
                                    return (
                                        <motion.div
                                            key={step.title}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: .6, delay: index * .15 }}
                                            viewport={{ once: true }}
                                            className="relative flex flex-col items-center text-center"
                                        >
                                            {/* Circle */}
                                            <motion.div
                                                whileHover={{ y: -6, scale: 1.05 }}
                                                transition={{ duration: .3 }} 
                                                className="relative z-10 flex items-center justify-center w-[78px] h-[78px] rounded-full border border-gold-sgs bg-primary-sgs"
                                            >
                                                <Icon size={28} className="text-gold-sgs"/>
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="mt-8 text-md font-serif text-[#C8A05A] leading-snug whitespace-pre-line">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            {step.description && (
                                                <p className="mt-3 text-sm leading-8 text-[#8E98A4] max-w-[180px]">
                                                    {step.description}
                                                </p>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0E2231] rounded-full blur-[180px] opacity-20 pointer-events-none" />
        </section>
    );
}