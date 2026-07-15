import { motion } from "framer-motion";

import FooterColumn from "./footer-column";
import { officeData, practiceAreas, quickLinks, socials } from "@/data/Footers";

export default function Footer() {
    return (
        <footer className="bg-[#081119]">
            <div className="mx-auto container-custom md:container px-6 py-24">
                <div className="grid gap-20 lg:grid-cols-[1.5fr_1fr_1.3fr_1.2fr]">
                    <div>
                        <div className="flex items-center gap-4">
                            <img src="/navbar/logo-sgs.svg" alt="logo" className="w-15"/>
                            <div>
                                <h3 className="font-serif text-2xl text-white">
                                    SGS LAWFIRM
                                </h3>
                                <p className="mt-1 text-[8px] tracking-[4px] uppercase text-[#C8A04E]">
                                    Advocates & Legal Consultants
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 leading-6 text-[#7E8794] text-sm">
                            Legal solutions built on integrity, commitment,
                            and a passion for justice.
                        </p>

                        <div className="mt-8 flex gap-5">
                            {socials.map((Icon, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ y: -4, borderColor: "#C8A04E" }}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A3643] text-[#C8A04E]"
                                >
                                    <Icon size={20} />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <FooterColumn
                        title="Quick Links"
                        items={quickLinks}
                    />

                    <FooterColumn
                        title="Practice Areas"
                        items={practiceAreas}
                    />

                    <div>
                        <h3 className="font-serif text-xl text-white">
                            Office
                        </h3>
                        <div className="mt-5 space-y-8">
                            {officeData.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-4 items-center"
                                    >
                                        <Icon size={18} className="mt-1 text-[#C8A04E]" />

                                        <div>
                                            <div className="text-sm text-[#7E8794]">
                                                {item.title}
                                            </div>

                                            {item.subtitle && (
                                                <div className="text-sm text-[#7E8794]">
                                                    {item.subtitle}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#182430]">
                <div className="mx-auto max-w-[1280px] px-6 py-8 text-center text-[16px] text-[#66717D]">
                    © 2024 SGS Lawfirm. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}