import ModalChildren from "@/components/modals/modal-children";
import { Button } from "@/components/ui/button";

import {
    IconBrandLinkedinFilled,
    IconMailFilled,
    IconPhoneFilled,
} from "@tabler/icons-react";

import {
    IconCalendarEvent,
    IconDownload,
} from "@tabler/icons-react";

interface Props {
    isOpen: boolean;
    onClose: () =>void;
    member: any;
}

export default function ModalTeamProfile({
    isOpen,
    onClose,
    member,
}: Readonly<Props>) {

    if (!member) return null;

    return (

        <ModalChildren
            isOpen={isOpen}
            onClose={onClose}
            noCloseBackground
            className="w-[65vw]! max-w-full h-[92vh] max-h-[92vh] p-0 bg-primary-sgs border border-gold-sgs z-999 rounded-xl"
        >

            <div className="grid lg:grid-cols-[420px_1fr] h-full">
                {/* ================= SIDEBAR ================= */}
                <aside className="bg-[#0C1620] border-r border-[#27333D]">
                    <img
                        src={member.imageDetail}
                        alt={member.name}
                        className="w-full h-45 lg:h-105 object-cover"
                    />    
                    
                    <InfoSection
                        title="Areas of experience"
                        subTitle={member.practiceAreasDesc}
                        items={member.practiceAreas}
                    />
                </aside>

                {/* ================= CONTENT ================= */}
                <section className="flex flex-col">
                    <div className="px-10 py-10">
                        <h2 className="font-serif text-5xl text-[#F5F2EA]">
                            {member.name}
                        </h2>
                        <p className="mt-3 text-xl text-[#C6A15B]">
                            {member.position}
                        </p>
                        <div className="mt-6 h-[2px] w-20 bg-[#C6A15B]" />
                        <p className="mt-8 leading-8 text-[#B8C1C8]">
                            {member.biography}
                        </p>
                    </div>

                    <div className="border-t border-[#26313C]" />

                    {/* GRID */}
                    <div className="grid lg:grid-cols-2 items-center">
                        <InfoSection
                            title="Education"
                            items={member.education}
                        />
                        
                    <div className="mx-auto">
                        <Button variant="default" className="rounded-lg bg-gold-sgs text-primary-sgs flex items-center justify-center gap-3 hover:bg-gold-light-sgs">
                            <IconCalendarEvent size={20}/>
                            Consultation
                        </Button>
                    </div>

                    </div>

                    <div className="border-t border-[#26313C]" />
                </section>
            </div>
        </ModalChildren>
    );
}

function ContactItem({
    icon,
    title,
    value,
    href,
}: any){
    return(
        <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B]">
                {icon}
            </div>
            <div>
                <p className="text-sm text-[#8D98A4]">
                    {title}
                </p>

                {href ? (
                    <a href={href} target="_blank" className="text-[#F5F2EA] hover:text-[#C6A15B]">
                        {value}
                    </a>
                ) : (
                    <p className="text-[#F5F2EA]">
                        {value}
                    </p>
                )}
            </div>
        </div>
    )
}

function InfoSection({
    title,
    subTitle,
    items=[],
}: any){
    return(
        <div className="p-8 border-r border-gold-sgs last:border-r-0">
            <h3 className="uppercase tracking-[.08em] text-[#C6A15B] font-semibold">
                {title}
            </h3>
            <p className="text-sm text-white">{subTitle}</p>
            <ul className="mt-6 space-y-4">
                {items.map((item:string)=>(
                    <li key={item} className="flex gap-3 text-[#D5DDE4] text-sm">
                        <span className="mt-[10px] h-2 w-2 rounded-full bg-[#C6A15B]" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}