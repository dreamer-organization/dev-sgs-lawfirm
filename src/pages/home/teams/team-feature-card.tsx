import { IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    // Linkedin,
    Mail,
} from "lucide-react";

interface Props {
    name: string;
    position: string;
    image: string;
    email: string;
    linkedin: string;
}

export default function FeaturedTeamCard({
    name,
    position,
    image,
    email,
    linkedin,
}: Props) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: true, amount: .3 }}
            transition={{ duration: .6 }}
            className="group overflow-hidden border border-[#24313B] bg-[#0A141D]"
        >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
                <motion.img
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: .8 }}
                    src={image}
                    alt={name}
                    className="h-[620px] w-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: .2 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#081119] via-[#081119]/30 to-transparent"
                />

                {/* Featured */}
                <div className="absolute left-8 top-8 rounded-full border border-[#C6A15B] bg-[#081119]/90 px-5 py-2 text-xs uppercase tracking-[3px] text-[#C6A15B] backdrop-blur">
                    Managing Partner
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-10">
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <motion.h2
                            variants={{hover: { color: "#C6A15B" }}}
                            transition={{ duration: .25 }}
                            className="font-serif text-[44px] leading-none text-[#F5F2EA]"
                        >
                            {name}
                        </motion.h2>

                        <p className="mt-4 text-sm uppercase tracking-[3px] text-[#8B98A6]">
                            {position}
                        </p>
                    </div>

                    <motion.div
                        variants={{hover: { x: 8 }}}
                    >
                        <ArrowUpRight
                            className="text-[#C6A15B]"
                            size={32}
                        />
                    </motion.div>
                </div>

                <p className="mt-8 max-w-[700px] text-[17px] leading-8 text-[#8E99A5]">
                    With more than two decades of experience in
                    corporate law, dispute resolution, and strategic
                    legal advisory, {name} has successfully represented
                    multinational corporations, government institutions,
                    and leading private enterprises across Indonesia.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a href={linkedin} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24313B] text-white transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-black">
                        <IconBrandLinkedin size={20}/>
                    </a>
                    <a href={email} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24313B] text-white transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-black">
                        <Mail size={20}/>
                    </a>
                    <motion.button
                        whileHover={{ x: 6 }}
                        className="ml-auto flex items-center gap-3 rounded-full border border-[#C6A15B] px-7 py-3 text-sm font-semibold uppercase tracking-[2px] text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-black"
                    >
                        View Profile
                        <ArrowUpRight size={18}/>
                    </motion.button>

                </div>

            </div>
        </motion.article>
    );
}