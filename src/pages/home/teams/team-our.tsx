import { motion } from "framer-motion";

import TeamHeader from "./team-header";
import TeamCard from "./team-card";
import { teamMembers } from "@/data/Team";

export default function OurTeam() {
    return (
        <section id="our-team" className="relative overflow-hidden bg-[#081119] py-28 lg:py-36">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C6A15B]/5 blur-[180px]" />
            </div>

            <div className="relative mx-auto container-custom lg:container px-6">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: .7 }}
                >
                    <TeamHeader />
                </motion.div>

                {/* GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: .2 }}
                    variants={{hidden: {}, show: { transition: { staggerChildren: .12 }}}}
                    className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={{hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 }}}
                            transition={{ duration: .55 }}
                        >
                            <TeamCard {...member} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}