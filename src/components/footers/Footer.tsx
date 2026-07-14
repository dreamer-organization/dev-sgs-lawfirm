import {
    IconBrandInstagram,
    IconBrandFacebook,
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="bg-primary-sgs text-white">
            <div className="container mx-auto px-6">
                <div className="py-16 grid gap-12 md:grid-cols-3">
                    <div>
                        <img src="/navbar/logo-sgs.svg" alt="logo" className="w-20"/>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">Explore</h4>
                        <ul className="mt-5 space-y-3 text-white/80">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">Find Us</h4>
                        <div className="flex gap-4 mt-5">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#F4BE3D] text-black flex items-center justify-center">
                                <IconBrandInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#F4BE3D] text-black flex items-center justify-center">
                                <IconBrandFacebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
                © 2026 Copyright
            </div>
        </footer>
    );
}