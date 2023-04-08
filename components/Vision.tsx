import type { NextPage } from "next";
import Image from "next/image";

const Vision: NextPage = () => {
    return (
        <>
        {/* who we are section */}
        <div className="py-10 px-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Image
                    src={"/vision.jpg"}
                    alt={"image"}
                    height={500}
                    width={500}
                    className="rounded-lg shadow-sm"
                />

                <div className="md:max-w-sm md:mt-12 order-last md:order-first">
                <h3 className="text-4xl text-gray-500 pb-6">Our Vision</h3>
                        <p className="text-gray-400 max-w-lg text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci iste fugit quasi vel qui, provident eius deleniti enim magni unde minima, eos repellat consectetur aperiam suscipit incidunt, culpa illo?</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Vision;