import { motion } from "framer-motion";

import TeamHeader from "./team-header";
import TeamCard from "./team-card";
import { homeTeamMembers } from "@/data/Team";
import { useState } from "react";
import ModalTeamProfile from "./components/modal/team-modal";

export default function OurTeam() {
    const containerVariants = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [modalAddFaqOpen, setModalAddFaqOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<any>(null);
    // const { data, isLoading } = useQuery({
    //     queryKey: ["team-detail", selectedId],
    //     queryFn: () => getTeamDetail(selectedId),
    //     enabled: !!selectedId,
    // });

    return (
        <>
            <section id="our-team" className="relative overflow-hidden bg-blue-sgs py-28 lg:py-36">
                {/* Background Glow */}

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-1/2 top-40 h-162.5 w-162.5 -translate-x-1/2 rounded-full bg-[#C6A15B]/5 blur-[180px]" />
                </div>

                <div className="relative mx-auto container-custom md:container px-6">
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
                        viewport={{ once: true, amount: .2 }}
                        variants={{ hidden: {}, show: { transition: { staggerChildren: .12 } } }}
                        className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
                    >
                        {homeTeamMembers.map((member) => (
                            <>
                                <motion.div
                                    key={member.id}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.15 }}
                                    variants={containerVariants}
                                >
                                    <TeamCard
                                        {...member}
                                        onClick={() => setSelectedMember(member)}
                                    />
                                </motion.div>
                            </>
                        ))}
                    </motion.div>
                </div>
            </section>
            <ModalTeamProfile
                isOpen={!!selectedMember}
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
            />
        </>
    );
}