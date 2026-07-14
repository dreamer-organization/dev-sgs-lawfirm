import { motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
    icon: React.ElementType;
}

export default function ApproachStep({
    title,
    description,
    icon: Icon,
}: Props) {
    return (
        <motion.div
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: .25,
            }}
            className="flex flex-col items-center text-center"
        >
            <div
                className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#2A3944]
                "
            >
                <Icon
                    size={30}
                    className="text-[#C6A15B]"
                />
            </div>

            <h4
                className="
                mt-6
                font-serif
                text-2xl
                text-white
                "
            >
                {title}
            </h4>

            <p
                className="
                mt-3
                text-[15px]
                leading-7
                text-[#93A0AD]
                "
            >
                {description}
            </p>
        </motion.div>
    );
}