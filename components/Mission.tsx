import type { NextPage } from "next";
import Image from "next/image";

const Mission: NextPage = () => {
    return (
        <>
        {/* who we are section */}
        <div className="py-10 px-5 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <Image
                    src={"/mission.jpg"}
                    alt={"image"}
                    height={500}
                    width={500}
                    className="rounded-lg shadow-sm bg-gray-100"
                />

                <div className="md:max-w-sm md:mt-12">
                    <h3 className="text-gray-500 text-3xl font-semibold mb-6">Our Mission</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci iste fugit quasi vel qui, provident eius deleniti enim magni unde minima, eos repellat consectetur aperiam suscipit incidunt, culpa illo?</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Mission;