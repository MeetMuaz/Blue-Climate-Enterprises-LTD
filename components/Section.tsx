import type { NextPage } from "next";
import Image from "next/image";

interface Props {
    title?: string;
    paragraph?: string;
    imageUrl: string;
}

const Section: NextPage<Props> = ({title, paragraph, imageUrl }) => {
    return (
        <>
        {/* Individual section */}
        <div className="mt-20 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <Image
                    src={imageUrl}
                    alt={"image"}
                    height={500}
                    width={500}
                    className="rounded-lg shadow-sm bg-gray-100"
                />

                <div className="md:max-w-sm md:mt-12 order-last md:order-first">
                        <h3 className="text-gray-500 text-3xl font-semibold mb-6">{title}</h3>
                        <p className="text-gray-400">{paragraph}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Section;
