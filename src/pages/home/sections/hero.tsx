import { useNavigate } from "@tanstack/react-router";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import { scrollToSectionIphone } from "@/helpers";
import { IconArrowRight, IconCalendar } from "@tabler/icons-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-xs uppercase tracking-widest">
          Scroll
        </span>

        <div className="h-10 w-6 rounded-full border border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="h-2 w-2 rounded-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
    const navigate = useNavigate()
    const { scrollY } = useScroll();
    const bgAnimationY = useTransform(scrollY, [0, 1000], [0, 250]);
    const contentAnimationY = useTransform(scrollY, [0, 1000], [0, -200]);
    const descriptionAnimationY = useTransform(scrollY, [0, 1000], [0, -120]);
    const actionButtonAnimationY = useTransform(scrollY, [0, 1000], [0, -80]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    const handleMenu = (section: string) => {
        if (location.pathname !== "/") {
            navigate({to: "/", search: { scroll: section }});
            return;
        }
        scrollToSectionIphone(section);
    };

    const indicatorOpacity = useTransform(
        scrollY,
        [0, 200],
        [1, 0]
    );
    
    return (
        <section className="relative overflow-hidden bg-sgs-main min-h-screen" id="home">
            <div className="hidden md:block">
                <motion.div style={{y: bgAnimationY}} className="absolute inset-0">
                    <img src={'/hero-image-sgs.png'} alt="hero" className="w-full h-full object-cover object-center"/>
                </motion.div>
                <motion.div style={{opacity}} className=" absolute inset-0 bg-gradient-to-r from-primary-sgs from-10% via-transparent via-30% to-transparent to-90%" />
            </div>

            <div className="block md:hidden">
                <motion.div style={{y: bgAnimationY}} className="absolute inset-0 bg-primary-sgs">
                    <img src={"/hero-image-mobile-sgs.png"} alt="hero" className="w-full object-cover object-center"/>
                </motion.div>
                <motion.div style={{opacity}} className=" absolute inset-0 bg-gradient-to-t from-primary-sgs from-10% via-primary-sgs via-25% to-transparent to-90%" />
            </div>

            <motion.div style={{y: contentAnimationY, opacity}} className="container-custom md:container relative z-20 mx-auto px-6">
                <div className="flex min-h-screen items-center pt-32 pb-12 md:pt-36 lg:pt-28">
                    <div className="">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-title text-gold-sgs font-extrabold leading-none tracking-[2px] md:tracking-[4px] text-sm md:text-2xl mb-10"
                        >
                            Legal Solutions. Trusted Partnership.
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-title text-white font-extrabold leading-none tracking-[4px] text-3xl lg:text-6xl max-w-4xl"
                        >
                            Providing Strategic
                            Legal Solutions,
                            Delivering <span className="text-gold-sgs">Real Results.</span>
                        </motion.h1>

                        <motion.p
                            style={{ y: descriptionAnimationY }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-white/90 mt-6 text-md leading-relaxed max-w-3xl font-title tracking-[3px]"
                        >
                            We are a full-service law firm committed to providing practical, innovative,
                            and effective legal solutions to individuals, businesses, and institutions.
                        </motion.p>

                        <motion.div
                            style={{ y: actionButtonAnimationY }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="grid md:flex md:flex-wrap gap-4 mt-8"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gold-sgs hover:bg-gold-sgs/90 text-black font-semibold px-7 py-3 rounded-md transition flex items-center justify-center tracking-[1px]"
                                onClick={() => handleMenu("program")}
                            >
                                Our Practice Areas <IconArrowRight className="ml-4"/>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary-sgs hover:bg-primary-sgs/90 text-white border-white border font-semibold px-7 py-3 rounded-md transition flex items-center justify-center tracking-[1px]"
                                onClick={() => handleMenu("transaction-flow")}
                            >
                                Book Consultation <IconCalendar className="ml-4"/>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.div style={{ y: bgAnimationY }} className="hidden md:absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <motion.div
                style={{ opacity: indicatorOpacity }}
                className="hidden md:block"
            >
                <ScrollIndicator />
            </motion.div>
        </section>
    );
}