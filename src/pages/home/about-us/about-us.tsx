import { Button } from "@/components/ui/button";
import { IconFileTypePdf } from "@tabler/icons-react";
import { motion } from "framer-motion";

import {
    ShieldCheck,
    Target,
    Lightbulb,
    Award,
} from "lucide-react";

const values = [
    {
        title: "Integrity",
        description:
            "Ethical, transparent, and accountable in every action.",
        icon: ShieldCheck,
    },
    {
        title: "Client-Focused",
        description:
            "Your goals and business continuity are our priority.",
        icon: Target,
    },
    {
        title: "Practical Solutions",
        description:
            "Commercially aware legal strategies.",
        icon: Lightbulb,
    },
    {
        title: "Excellence",
        description:
            "Committed to the highest standards of profession.",
        icon: Award,
    },
];

export default function AboutUs() {
    return (
        <section id="about-us" className="relative py-28 lg:py-36 container-custom md:container">
            {/* About Us */}
            <div className="grid items-center gap-20 lg:grid-cols-[0.45fr_0.55fr]">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .3 }}
                    transition={{ duration: .7 }}
                >
                    {/* Label */}
                    <span className="text-md font-bold uppercase tracking-[4px] text-secondary-gold-sgs">
                        ABOUT US
                    </span>

                    {/* Title */}
                    <h2 className="mt-4 max-w-2xl font-serif text-xl font-semibold leading-none text-primary-sgs md:text-2xl lg:text-4xl">
                        Young. Dynamic.
                        <br />
                        Always Evolving.
                    </h2>

                    {/* Paragraph */}
                    <p className="mt-6 text-primary-sgs">History - SGS Law Firm</p>
                    <p className="mt-1 max-w-2xl text-[18px] leading-9 text-gold-sgs">
                        "In March 2022, our firm which was formerly known as “GS&Co. Law Firm” rebranded its identity as “Sitepu Gozali Sitorus Law Firm” or “SGS Law Firm”."
                    </p>

                    <p className="mt-4 max-w-2xl text-[15px] text-gray-sgs">
                        Our name and brand have changed, but our passion for providing professional legal services and assistance has never been stronger.
                    </p>
                    <p className="mt-4 max-w-2xl text-[15px] text-gray-sgs">
                        Our name and brand have changed, but our passion for providing professional legal services and assistance has never been stronger.
                    </p>
                    <p className="mt-4 max-w-2xl text-[15px] text-gray-sgs">
                        Our new logo, with the letters <span className="font-extrabold">"S," "G," and "S,"</span> neatly arranged in the center, represents the pillars of justice, surrounded by a shield, signifying that we will uphold and protect the justice of each of our clients.
                    </p>

                    {/* Values */}
                    <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {values.map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    whileHover={{ x: 6 }}
                                    transition={{ duration: .25 }}
                                    className="flex gap-4"
                                >
                                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#D8B35B]/10">
                                        <Icon size={18} className="text-secondary-gold-sgs" />
                                    </div>

                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#101828]">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 max-w-42.5 text-[15px] leading-7 text-secondary-gray-sgs">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="relative"
                >
                    {/* Frame */}
                    <div className="overflow-hidden rounded-sm border-2 border-gold-sgs bg-white p-3">
                        <img src="/about/images-about-sgs-law-firm.webp" alt="" className="w-full" />
                    </div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: .35 }}
                        className="absolute -left-8 bottom-8 flex items-center gap-5 rounded-lg! bg-primary-sgs px-6 py-2 md:px-7 md:py-6 shadow-[0_18px_50px_rgba(0,0,0,.25)] border-b-[5px] border-gold-sgs"
                    >
                        <div className="text-md md:text-4xl font-bold leading-none text-gold-sgs">
                            20+
                        </div>
                        <div className="text-[10px] md:text-lg sm:leading-5 text-white">
                            Years of
                            <br />
                            Combined
                            <br />
                            Experience
                        </div>
                    </motion.div>

                </motion.div>

            </div>

            
            {/* Who We Are */}
            <div className="mt-24 grid items-center gap-20 lg:grid-cols-[0.52fr_0.48fr]">
                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .3 }}
                    transition={{ duration: .8 }}
                >
                    <div className="overflow-hidden rounded-sm border-2 border-gold-sgs bg-white p-3">
                        <img src="/about/Gambar-visi-sgs-law-firm.webp" alt="" className="w-full object-cover" />
                    </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* LABEL */}
                    <span className="text-md font-bold uppercase tracking-[4px] text-secondary-gold-sgs">
                        WHO WE ARE
                    </span>

                    {/* TITLE */}
                    <h2 className="mt-4 max-w-2xl font-serif text-md font-semibold leading-none text-primary-sgs md:text-2xl lg:text-4xl">
                        With our recognized leadership in applying legal service and technology innovation, we deliver commercial advantage to clients.
                    </h2>

                    {/* PARAGRAPH */}
                    <p className="mt-4 max-w-155 text-md leading-9 text-gray-sgs">
                        Our lawyers offer clients a range of integrated global capabilities, including some of the world’s most active M&A, real estate, financial services, litigation and corporate risk practices.
                    </p>

                    <Button variant="red_outline" className="mt-4">
                        <IconFileTypePdf /> Download SGS Law Firm Profile.pdf
                    </Button>
                </motion.div>

            </div>

            {/* Our Value */}
            <div className="mt-24 grid items-center gap-20 container-custom lg:container">
                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center"
                >
                    {/* LABEL */}
                    <span className="text-md font-bold uppercase tracking-[4px] text-secondary-gold-sgs">
                        OUR VALUE
                    </span>

                    {/* TITLE */}
                    <h2 className="mt-4 font-serif text-md font-semibold leading-none text-primary-sgs md:text-2xl lg:text-4xl">
                        " SGS Law Firm provides comprehensive legal solutions for both individual (B2C) and corporate (B2B) clients "
                    </h2>

                    {/* PARAGRAPH */}
                    <p className="mt-10 text-md text-gray-sgs">
                        We operate as a Strategic Shield and Catalyst, acting as a strong defense against legal risks while serving as a powerful accelerator for your business goals.
                    </p>

                    <p className="mt-1 text-md text-gray-sgs">
                        We combine uncompromising integrity with intellectual acumen to navigate complex and highly regulated sectors, including Banking, Fintech, Property, and Outsourcing.
                    </p>

                    <p className="mt-1 text-md text-gray-sgs">
                        SGS Law Firm team ensures that every legal action is a proactive, precise, and measurable step towards your long-term success.
                    </p>

                </motion.div>

            </div>
        </section>
    );
}