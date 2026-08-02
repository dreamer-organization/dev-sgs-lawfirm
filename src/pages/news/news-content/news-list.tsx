import { useNavigate } from "@tanstack/react-router";
import { newsData } from "@/data/News";
import NewsCard from "./news-card";
import NewsPagination from "./news-pagination";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form"
import InputText from "@/components/input/input-text";
import { Search } from "lucide-react";
import InputSelect from "@/components/input/input-select";

export default function NewsList() {
    const navigate = useNavigate()
    const form = useForm({})

    const [page, setPage] = useState(1);

    return (
        <div>

            {/* Heading */}
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="
                font-serif
                text-4xl
                text-[#F5F2EA]
                ">
                    Latest News & Articles
                </h2>

                <div className="w-full lg:w-75">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(() => {})} className="flex gap-4">
                            <InputText
                                control={form.control}
                                name="search"
                                qa="input-search"
                                placeholder="Search news..."
                                className="rounded-md border-gold-sgs text-gold-sgs"
                                startAdorn={<Search className="w-5 h-5 text-gold-sgs" />}
                            />
                            
                            {/* <InputSelect
                                control={form.control}
                                name="periode"
                                qa="input-select-periode"
                                listData={["Newest", "Oldest"]}
                                placeholder=""
                                renderLabel={(item: any) => item}
                                isReset={false}
                            /> */}
                        </form>
                    </Form>
                </div>

            </div>

            {/* GRID */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {newsData.map((article: any) => (
                    <div
                        onClick={() => navigate({to: `/news/${article.slug}`, params: { slug: article.slug }})}
                        className="cursor-pointer"
                    >
                        <NewsCard
                            key={article.id}
                            {...article}
                        />
                    </div>
                ))}
            </div>

            <NewsPagination
                currentPage={page}
                totalPages={10}
                onPageChange={setPage}
            />

        </div>
    );
}