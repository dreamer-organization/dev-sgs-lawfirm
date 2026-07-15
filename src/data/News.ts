export interface NewsItem {
    id: number;
    image: string;
    date: string;
    category: string;
    title: string;
    description: string;
    slug: string;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        date: "12 May 2024",
        category: "INTELLECTUAL PROPERTY",
        title:
            "Trademark Registration: Benefits, Protection, and Legal Risks",
        description:
            "Understanding the crucial steps and benefits of registering your company's trademark in Indonesia to prevent future disputes.",
        slug: "/news/trademark-registration",
    },

    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
        date: "28 Apr 2024",
        category: "CORPORATE LAW",
        title:
            "New Regulations on Foreign Direct Investment in Tech Sector",
        description:
            "A comprehensive breakdown of the latest government policies affecting foreign investors looking to establish tech startups.",
        slug: "/news/foreign-investment",
    },

    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
        date: "15 Mar 2024",
        category: "LABOR LAW",
        title:
            "Navigating Employee Termination: A Guide for Employers",
        description:
            "Best practices and legal requirements for handling employee termination to minimize the risk of industrial relations disputes.",
        slug: "/news/employee-termination",
    },
];