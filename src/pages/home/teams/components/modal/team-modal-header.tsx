import { motion } from "framer-motion";

interface Props {
    member: any;
}

export default function TeamModalHeader({
    member,
}: Readonly<Props>) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="px-12 pt-12"
        >

            <h2
                className="
                    font-serif
                    text-6xl
                    leading-none
                    text-[#F5F2EA]
                "
            >
                {member.name}
            </h2>

            <p
                className="
                    mt-4
                    text-[24px]
                    font-medium
                    text-[#C6A15B]
                "
            >
                {member.position}
            </p>

            <div
                className="
                    mt-6
                    h-[2px]
                    w-20
                    rounded-full
                    bg-[#C6A15B]
                "
            />

            <p
                className="
                    mt-8
                    max-w-[760px]
                    text-[18px]
                    leading-9
                    text-[#B8C1C8]
                "
            >
                {member.biography}
            </p>

            <div
                className="
                    mt-10
                    h-px
                    w-full
                    bg-[#2D3945]
                "
            />

        </motion.div>
    );
}