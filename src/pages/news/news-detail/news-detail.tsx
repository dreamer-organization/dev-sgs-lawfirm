import { newsData } from "@/data/News";
import NewsDetailHero from "./news-detail-hero";
import MainLayout from "@/pages/layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { getDetailNewsFn } from "@/api/api-news";
import NewsNotFound from "./components/news-not-found";
import NewsDetailSkeleton from "./components/news-detail-skleton";
import NewsContent from "./news-content";

import './styles.scss'
import 'ckeditor5/ckeditor5.css';
import NewsPrevNext from "./components/news-prevnext";

interface NewsDetailProps {
    slug: string;
}

export default function NewsDetailPage({
    slug
}: Readonly<NewsDetailProps>) {

    const {
        data: article,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["news-detail", slug],
        queryFn: () => getDetailNewsFn(slug),
        enabled: !!slug,
    });

    console.log(article);
    

    if (isLoading) {
        return <NewsDetailSkeleton />;
    }

    if (isError || !article) {
        return <NewsNotFound />;
    }

    return (
        <MainLayout>

            <NewsDetailHero
                article={article}
            />

            <NewsContent
                article={article}
            />

        </MainLayout>
    );
}