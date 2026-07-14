import Footer from "@/components/footers/Footer";
import Navbar from "@/components/headers/navbar";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}