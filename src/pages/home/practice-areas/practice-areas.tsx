import { practiceAreas } from "@/data/PracticeAreas";
import { motion } from "framer-motion";

import PracticeItem from "./practice-item";

export default function PracticeAreas() {
    return (
        <section
            id="practice-areas"
            className="relative overflow-hidden bg-blue-sgs py-28 lg:py-36"
        >
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C6A15B]/5 blur-[180px]" />
            </div>

            <div className="relative mx-auto max-w-[1280px] px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: .7 }}
                >
                    <div className="mb-16 flex flex-col items-center">
                        <div className="flex items-center gap-5">
                            <span className="h-px w-14 bg-[#7F6A40]/40" />
                            <span className="text-[12px] uppercase tracking-[5px] font-semibold text-gold-sgs">
                                Practice Areas
                            </span>

                            <span className="h-px w-14 bg-[#7F6A40]/40" />

                        </div>

                        <h2 className="mt-5 font-title text-center text-[56px] leading-none text-[#F6F2EA]">
                            Comprehensive Legal Services
                            <br />
                            for Every Need
                        </h2>
                    </div>
                </motion.div>

                {/* Desktop */}
                <div className="hidden lg:flex lg:flex-wrap lg:justify-center overflow-hidden gap-2 cursor-pointer">
                    {practiceAreas.map((item, index) => (
                        <div
                            key={item.title}
                            className={`${index !== practiceAreas.length - 1
                                ? "border-r border-border-sgs"
                                : ""
                            }`}
                        >
                            <PracticeItem {...item} />
                        </div>
                    ))}
                </div>

                {/* Tablet */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7, delay: .15 }}
                    className="hidden md:flex lg:hidden md:flex-wrap md:justify-center md:overflow-hidden gap-2"
                >
                    {practiceAreas.map((item, index) => (
                        <div
                            key={item.title}
                            className={`${index < 3
                                ? "border-b border-border-sgs"
                                : ""} ${index % 3 !== 2
                                ? "border-r border-border-sgs"
                                : ""
                            }`}
                        >
                            <PracticeItem
                                {...item}
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="grid md:hidden grid-cols-1 gap-2"
                >
                    {practiceAreas.map((item, index) => (
                        <div
                            key={item.title}
                            className={`${index !==
                                practiceAreas.length - 1
                                ? "border-b border-border-sgs"
                                : ""
                            }`}
                        >
                            <PracticeItem
                                {...item}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}