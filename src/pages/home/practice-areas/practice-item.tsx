import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
    title: string;
    description: string;
    icon: React.ElementType;
}

export default function PracticeItem({
    title,
    description,
    icon: Icon,
}: Props) {
    return (
        <motion.article
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative h-[315px] overflow-hidden px-7 py-8 bg-secondary-sgs"
        >
            {/* Left Hover Line */}
            <motion.div
                variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
                transition={{ duration: .35, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full w-[2px] origin-top bg-[#C6A15B]"
            />

            <motion.div
                variants={{ rest: { y: 0 }, hover: { y: -6 } }}
                transition={{ duration: .35 }}
                className="grid h-full grid-rows-[42px_72px_1fr_24px]"
            >
                {/* Icon */}
                <div className="flex items-start">
                    <Icon
                        size={30}
                        strokeWidth={1.6}
                        className="text-[#C6A15B] transition-colors duration-300 group-hover:text-[#E4BC6A]"
                    />
                </div>

                {/* Title */}
                <div className="flex items-start">
                    <h3 className="max-w-[170px] font-title text-[18px] leading-[1.45] text-[#F4F1EA] transition-colors duration-300 group-hover:text-[#C6A15B]">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <div className="flex items-start">
                    <p className="max-w-[180px] text-[14px] leading-8 text-[#8C9298]">
                        {description}
                    </p>
                </div>

                {/* Arrow */}
                <motion.div
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: .25 }}
                    className="flex items-end"
                >
                    <ArrowRight
                        size={18}
                        className="text-[#C6A15B] transition-colors duration-300 group-hover:text-[#E4BC6A]"
                    />
                </motion.div>
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
                variants={{ rest: { opacity: 0, }, hover: { opacity: 1 } }}
                transition={{ duration: .35 }}
                className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.015] to-white/[0.03]"
            />
        </motion.article>
    );
}