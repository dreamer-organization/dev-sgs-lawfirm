import { motion } from "framer-motion";
import {
    IconArrowRight,
    IconCalendarEvent,
} from "@tabler/icons-react";

import { NewsItem } from "@/data/News";

interface Props {
    article: NewsItem;
}

export default function NewsCard({
    article,
}: Props) {
    return (
        <motion.a
            href={article.slug}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#DDBB68] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]"
        >
            {/* IMAGE */}
            <div className="relative overflow-hidden aspect-[16/10]">
                <motion.img
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: .7 }}
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
                />
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-7">
                {/* META */}
                <div className="flex flex-wrap items-center gap-4 text-[13px]">
                    <div className="flex items-center gap-2 text-[#98A2B3]">
                        <IconCalendarEvent size={15} stroke={1.8} />
                        <span>{article.date}</span>
                    </div>

                    <span className="text-[12px] font-semibold tracking-[1.8px] text-premium-gold-sgs uppercase">
                        {article.category}
                    </span>
                </div>

                {/* TITLE */}
                <motion.h3
                    variants={{ hover: { color: "#C6A15B" } }}
                    transition={{ duration: .3 }}
                    className="mt-5 font-serif text-xl leading-tight text-[#101828]"
                >
                    {article.title}
                </motion.h3>

                {/* DESCRIPTION */}
                <p className="mt-5 flex-1 text-sm leading-8 text-[#667085]">
                    {article.description}
                </p>

                {/* BUTTON */}
                <motion.div
                    variants={{ hover: { x: 5 } }}
                    transition={{ duration: .25 }}
                    className="mt-8 inline-flex items-center gap-3 font-semibold text-[#111827]"
                >
                    Read Article
                    <IconArrowRight size={18} />
                </motion.div>
            </div>
        </motion.a>
    );
}