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
                    <h2 className="mt-4 max-w-2xl font-serif text-2xl font-semibold leading-[1] text-primary-sgs md:text-4xl lg:text-6xl">
                        Young. Dynamic.
                        <br />
                        Always Evolving.
                    </h2>

                    {/* Paragraph */}
                    <p className="mt-8 max-w-2xl text-[18px] leading-9 text-gray-sgs">
                        In March 2022, our firm which was formerly
                        known as GS&Co. Law Firm rebranded its
                        identity as Sitepu Gozali Sitorus Law Firm
                        or SGS Law Firm.
                    </p>

                    <p className="mt-8 max-w-2xl text-[18px] leading-9 text-gray-sgs">
                        Along with the rebranding of our name,
                        we introduced our new logo based on
                        symbols of law and justice, reflecting
                        professionalism, trust, and excellence.
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
                                        <p className="mt-2 max-w-[170px] text-[15px] leading-7 text-secondary-gray-sgs">
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
                        <img src="/team.jpg" alt="" className="w-full h-140 object-cover" />
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

            {/* Our Value */}
            <div className="mt-36 grid items-center gap-20 lg:grid-cols-[0.52fr_0.48fr]">
                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .3 }}
                    transition={{ duration: .8 }}
                >
                    <div className="overflow-hidden rounded-sm border-2 border-gold-sgs bg-white p-3">
                        <img src="/team-1.jpg" alt="" className="w-full h-140 object-cover" />
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
                        OUR VALUE
                    </span>

                    {/* TITLE */}
                    <h2 className="mt-4 max-w-2xl font-serif text-2xl font-semibold leading-[1] text-primary-sgs md:text-4xl lg:text-6xl">
                        Integrity in Law,
                        <br />
                        Excellence
                        in Results.
                    </h2>

                    {/* PARAGRAPH */}
                    <p className="mt-10 max-w-[620px] text-md leading-9 text-gray-sgs">
                        In order to implement professional integrity,
                        our lawyers provide legal services with honesty,
                        trustworthiness, respect, and ethical conduct in
                        every engagement. We honor every commitment and
                        remain accountable for every action we take.
                    </p>

                    <p className="mt-8 max-w-[620px] text-md leading-9 text-gray-sgs">
                        Client-oriented means that we strive to understand
                        every client's objectives and seek opportunities to
                        maximize the value of our services while safeguarding
                        confidentiality and protecting every business interest.
                    </p>

                    <p className="mt-8 max-w-[620px] text-md leading-9 text-gray-sgs">
                        Through intellectual rigor and meticulous attention
                        to detail, we transform information into practical
                        legal solutions that support sound decisions,
                        innovation, and sustainable growth.
                    </p>

                </motion.div>

            </div>
        </section>
    );
}