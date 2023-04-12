import type { NextPage } from "next";
import Image from "next/image";

interface Props {
    header: string;
    paragraph: string;
    color: string;
}

const ServiceBox: NextPage<Props> = ({ header, paragraph, color }: Props) => {
    return(
        <>
        <div className={`border border-solid shadow-sm font-sans py-8 px-4 ${color}`}>
            <h3 className="text-white font-semibold text-xl font-meduim mb-4">{header}</h3>
            <p className="text-gray-100">{paragraph}</p>
        </div> 
        </>
    );
};

export default ServiceBox;