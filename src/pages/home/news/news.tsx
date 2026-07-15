import { motion } from "framer-motion";

import NewsCard from "./news-card";
import { newsData } from "@/data/News";

import { IconArrowRight } from "@tabler/icons-react";

export default function News() {
    return (
        <section
            id="news"
            className="relative overflow-hidden bg-[#F6F2E9] py-28"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 right-0 h-[380px] w-[380px] rounded-full bg-[#C9A14A]/5 blur-[130px]" />
                <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#C9A14A]/5 blur-[120px]" />
            </div>

            <div className="relative mx-auto container-custom md:container px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-14">
                        {/* Top */}
                        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                            {/* Left */}
                            <div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: .5 }}
                                    className="mb-4 text-[14px] font-semibold uppercase tracking-[4px] text-[#C6A15B]"
                                >
                                    Knowledge Base
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: .08, duration: .6 }}
                                    className="font-serif text-[42px] leading-none text-[#111827] sm:text-[50px]"
                                >
                                    Legal Insights & News
                                </motion.h2>

                            </div>

                            {/* Right */}
                            <motion.a
                                href="/news"
                                whileHover={{ x: 6 }}
                                whileTap={{ scale: .98 }}
                                className="group inline-flex items-center gap-2 self-start font-semibold text-[#111827] transition hover:text-[#C6A15B] md:self-auto"
                            >
                                <span className="text-[18px]">
                                    View All Insights
                                </span>

                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.8 }}
                                >
                                    <IconArrowRight size={18} />
                                </motion.div>
                            </motion.a>

                        </div>

                        {/* Divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8 }}
                            className="mt-8 h-px origin-left bg-[#E6DDCF]"
                        />

                    </div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                >
                    {newsData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <NewsCard key={item.id} article={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}