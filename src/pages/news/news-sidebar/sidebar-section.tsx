interface Props {
    title: string;
    children: React.ReactNode;
}

export default function SidebarSection({
    title,
    children,
}: Props) {
    return (
        <div className="mb-12">
            <h3 className="mb-7 font-serif text-[28px] text-[#F5F2EA]">
                {title}
            </h3>

            {children}
        </div>
    );
}