import { motion } from "framer-motion";
import { ctaContacts } from "@/data/Cta";
import { IconCalendarEvent } from "@tabler/icons-react";

export default function ContactUs() {
    return (
        <section className="relative overflow-hidden bg-linear-to-r from-[#1A1C43] to-[#29246C] py-20">
            {/* Watermark */}
            <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 select-none text-[280px] font-serif leading-none text-white/[0.03]">
                SGS
            </div>

            <div className="relative mx-auto container-custom md:container px-6">
                <div className="grid gap-20 lg:grid-cols-[1.2fr_.9fr] items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >
                        <h2 className="max-w-[520px] font-serif text-5xl leading-[1.05] text-white">
                            Ready to Solve Your Legal Challenges?
                        </h2>
                        <p className="mt-6 max-w-[500px] text-xl leading-8 text-[#8E98A5]">
                            Let us help you navigate complex legal matters with confidence.
                        </p>

                        <motion.button
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: .98 }}
                            className="group mt-10 inline-flex items-center gap-3 bg-[#C9A34E] px-8 py-4 font-medium text-[#081119] transition-all duration-300 hover:bg-[#D7B05A]"
                        >
                            Schedule a Consultation

                            <IconCalendarEvent size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7, delay: .2 }}
                        className="grid gap-10 sm:grid-cols-2"
                    >
                        {ctaContacts.map((item) => (
                            <motion.div
                                whileHover={{ x: 6 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1 text-[#C9A34E]">
                                    {/* <Icon size={24} stroke={1.6} /> */}
                                </div>
                                <div>
                                    <h4 className="text-[28px] md:text-[20px] font-semibold text-white leading-none">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-[15px] text-[#8F97A3]">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}