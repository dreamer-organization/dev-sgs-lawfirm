interface Props {
    title: string;
    items: string[];
}

export default function FooterColumn({
    title,
    items,
}: Props) {
    return (
        <div>
            <h3 className="font-serif text-2xl text-white">
                {title}
            </h3>

            <ul className="mt-5 space-y-2">
                {items.map((item) => (
                    <li
                        key={item}
                        className="cursor-pointer text-sm text-[#7E8794] transition hover:text-gold-sgs">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}