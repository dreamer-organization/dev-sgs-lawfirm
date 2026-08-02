import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { IconChevronRight } from "@tabler/icons-react";
import NewsLayout from "../layouts/NewsLayout";
import NewsSidebar from "./news-sidebar/news-sidebar";
import NewsList from "./news-content/news-list";

// import NewsHero from "@/components/news/hero/NewsHero";

export default function NewsPage() {
    return (
        <MainLayout>
            {/* HERO SECTION */}
            <section className="relative h-155 overflow-hidden bg-[#081119]">
                {/* Background */}
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=80" className="absolute inset-0 h-full w-full object-cover object-center" />

                {/* HERO OVERLAY  */}
                <div>
                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-[#071018]/80" />
                    {/* left gradient */}
                    <div className="absolute inset-y-0 left-0 w-[60%] bg-linear-to-r from-[#081119] via-[#081119]/90 to-transparent" />
                    {/* bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#081119] to-transparent" />
                    {/* gold line */}
                    <div className="absolute bottom-0 left-0 h-px w-full bg-[#C6A15B]" />
                </div>

                {/* CONTENT HERO */}
                <div className="container-custom md:container relative z-10 mx-auto flex h-full items-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        className="max-w-160"
                    >
                        <p className="mb-5 font-semibold uppercase tracking-[4px] text-[#C6A15B]">
                            NEWS & INSIGHTS
                        </p>

                        <h1 className="font-serif text-[72px] leading-[1.05] text-white">
                            Legal Insights &
                            <span className="text-[#C6A15B]">
                                {" "}
                                News
                            </span>
                        </h1>

                        <p className="mt-8 max-w-130 text-[20px] leading-9 text-[#C7D0D8]">
                            Stay informed with the latest legal updates,
                            firm news, and valuable insights from our
                            legal experts.
                        </p>

                        <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
                            {[ "Home", "Insights & News" ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <span
                                        className={
                                            index === item.length - 1
                                                ? "text-[#C6A15B]"
                                                : ""
                                        }
                                    >
                                        {item}
                                    </span>

                                    {index !== item.length - 1 && (
                                        <IconChevronRight
                                            size={14}
                                            stroke={1.5}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <NewsLayout sidebar={<NewsSidebar />}>
                <NewsList />
            </NewsLayout>
        </MainLayout>
    );
}