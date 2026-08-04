import {
    IconCalendarEvent,
    IconDownload,
} from "@tabler/icons-react";

interface Props {
    member: any;
}

function Section({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div>

            <h3
                className="
                    text-[22px]
                    font-semibold
                    uppercase
                    tracking-[.08em]
                    text-[#C6A15B]
                "
            >
                {title}
            </h3>

            <ul className="mt-7 space-y-5">

                {items.map((item) => (

                    <li
                        key={item}
                        className="
                            flex
                            gap-3
                            text-[17px]
                            leading-8
                            text-[#D4DCE3]
                        "
                    >

                        <span
                            className="
                                mt-[12px]
                                h-[6px]
                                w-[6px]
                                rounded-full
                                bg-[#C6A15B]
                            "
                        />

                        <span>{item}</span>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default function TeamModalFooter({
    member,
}: Readonly<Props>) {

    return (

        <>
            {/* EXPERIENCE */}

            <div className="px-12 py-10">

                <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

                    <div className="border-r border-[#2D3945] pr-10">

                        <Section
                            title="Experience"
                            items={member.experience}
                        />

                    </div>

                    <div className="pl-4">

                        <Section
                            title="Languages"
                            items={member.languages}
                        />

                    </div>

                </div>

            </div>

            {/* FOOTER */}

            <div
                className="
                    border-t
                    border-[#2D3945]
                    bg-[#0C1620]
                    px-12
                    py-8
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-5

                        lg:flex-row
                        lg:justify-center
                    "
                >

                    {/* DOWNLOAD */}

                    <button
                        className="
                            group
                            flex
                            h-16
                            items-center
                            justify-center
                            gap-4

                            rounded-lg
                            border
                            border-[#C6A15B]

                            px-10

                            font-semibold
                            uppercase
                            tracking-[.08em]

                            text-[#C6A15B]

                            transition

                            hover:bg-[#C6A15B]
                            hover:text-[#081119]
                        "
                    >

                        <IconDownload size={22} />

                        DOWNLOAD PROFILE

                    </button>

                    {/* CONSULT */}

                    <button
                        className="
                            group
                            flex
                            h-16
                            items-center
                            justify-center
                            gap-4

                            rounded-lg

                            bg-[#C6A15B]

                            px-10

                            font-semibold
                            uppercase
                            tracking-[.08em]

                            text-[#081119]

                            transition

                            hover:scale-[1.02]
                            hover:bg-[#D5B26A]
                        "
                    >

                        <IconCalendarEvent size={22} />

                        SCHEDULE CONSULTATION

                    </button>

                </div>

            </div>

        </>

    );

}