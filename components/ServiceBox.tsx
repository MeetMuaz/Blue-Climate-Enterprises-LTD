import type { NextPage } from "next";
import Image from "next/image";

interface Props {
    header: string;
    paragraph: string;
}

const ServiceBox: NextPage<Props> = ({ header, paragraph }: Props) => {
    return(
        <>
        <div className="p-5 rounded-lg border border-solid shadow-sm">
            <h3 className="text-gray-500 text-2xl pb-4">{header}</h3>
            <p className="text-gray-400">{paragraph}</p>
        </div> 
        </>
    );
};

export default ServiceBox;