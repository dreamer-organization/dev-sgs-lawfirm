import { motion } from "framer-motion";

export default function TeamHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-20 max-w-4xl text-center"
        >
            {/* Label */}
            <div className="flex items-center justify-center gap-4">
                <span className="h-px w-14 bg-[#C6A15B]/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[4px] text-[#C6A15B]">
                    OUR TEAM
                </span>
                <span className="h-px w-14 bg-[#C6A15B]/40" />
            </div>

            {/* Title */}
            <h2 className="mt-6 font-serif text-[54px] font-semibold leading-none text-[#F6F1E9]">
                Experienced Lawyers.
                <br />
                Proven Results.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-[18px] leading-8 text-[#A2ADB7]">
                We team consists of experienced lawyers with diverse
                expertise and a strong track record of success.
            </p>
        </motion.div>
    );
}