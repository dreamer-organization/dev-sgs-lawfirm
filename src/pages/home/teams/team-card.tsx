import { motion } from "framer-motion";
import {
    IconBrandLinkedinFilled,
    IconMailFilled,
} from "@tabler/icons-react";

interface Props {
    name: string;
    position: string;
    description: string;
    image: string;
    linkedin: string;
    email: string;
    onClick?: () => void;
}

export default function TeamCard({
    name,
    position,
    description,
    image,
    linkedin,
    email,
    onClick,
}: Props) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: .45 }}
            onClick={onClick}
            className="group relative overflow-hidden rounded-md border border-[#27333D] bg-secondary-sgs transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A15B] hover:shadow-[0_30px_80px_rgba(198,161,91,.15)]"
        >
            {/* IMAGE */}
            <div className="relative overflow-hidden cursor-pointer">
                <motion.img
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: .6 }}
                    src={image}
                    alt={name}
                    className="h-[320px] w-full object-cover"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: .35 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#081119] via-[#081119]/20 to-transparent"
                />

                {/* GOLD LINE */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#8D6A2C] via-[#C6A15B] to-[#8D6A2C]" />
            </div>

            {/* CONTENT */}
            <div className="px-7 py-7 grid grid-rows-[0.8fr_0.2fr_1fr_0.5fr] text-center">
                <motion.h3
                    variants={{ hover: { color: "#C6A15B" } }}
                    transition={{ duration: .25 }}
                    className="font-serif text-[24px] leading-tight text-[#F5F2EA]"
                >
                    {name}
                </motion.h3>

                <p className="mt-2 text-[15px] font-medium text-[#C6A15B]">
                    {position}
                </p>

                <p className="mx-auto mt-4 max-w-[260px] text-[15px] text-[#96A3AE]">
                    {description}
                </p>

                {/* SOCIAL */}
                <div className="mt-6 flex justify-center gap-5">
                    <motion.a
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: .95 }}
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#394957] text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-[#081119]"
                    >
                        <IconBrandLinkedinFilled size={18} />
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: .95 }}
                        href={email}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#394957] text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-[#081119]">
                        <IconMailFilled size={18} />
                    </motion.a>
                </div>
            </div>

            {/* BORDER HOVER */}

            <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 rounded-md border border-[#C6A15B]"
            />
        </motion.article>
    );
}