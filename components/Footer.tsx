import type { NextPage } from "next";
import Link from 'next/link';

const Footer: NextPage = () => {
    return(
        <>
            <div className="mt-5 mb-5 px-5 max-w-7xl mx-auto">
                <Link
                    href="/"
                >
                    <img src="logo.svg" alt="" />
                </Link>
            </div>

            {/* navigation section */}
            <div className="pt-5 pb-5 px-5 max-w-7xl mx-auto">
                <div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">  
                        <div>
                        <p className="text-gray-600 mb-5 font-semibold">Blueclimate</p>
                            <p className="text-sm text-gray-500 pb-2 sm:pb-3 lg:pb-4">Specializes in Real Estate Managment,<br /> Agency and General Merchandise</p>
                        </div> 
                        
                        <div>
                            <p className="text-gray-500 mb-5 font-semibold">Company</p>
                            <div className="space-y-2 sm:space-y-3 lg:space-y-5">
                                <Link href={"/"} className="text-blue-500 block text-sm hover:underline">
                                    Home
                                </Link>
                                <Link href={"/about"} className="text-blue-500 block text-sm hover:underline">
                                    About
                                </Link>
                                <Link href={"/contact"} className="text-blue-500 block text-sm hover:underline">
                                    Contact
                                </Link>
                                <Link href={"/blog"} className="text-blue-500 block text-sm hover:underline">
                                    Blog
                                </Link>
                                <Link href={"/"} className="text-blue-500 block text-sm hover:underline">
                                    Careers
                                </Link>
                            </div>
                        </div> 

                        <div>
                            <p className="text-gray-500 mb-5 font-semibold">Visit Us</p>
                            <div className="space-y-2 sm:space-y-3 lg:space-y-5">
                                <Link href={"mailto:blueclimateenterprisesltd@gmail.com"} className="text-blue-500 block text-sm hover:underline">
                                    blueclimateenterprisesltd@gmail.com
                                </Link>
                                <div>
                                    <Link href={"tel:+2348028273621"} className="text-blue-500 block text-sm hover:underline">
                                        +234-802-827-3621
                                    </Link>
                                    <Link href={"tel:+2348106568186"} className="text-blue-500 block text-sm hover:underline">
                                        +234-810-656-8186
                                    </Link>
                                </div>
                                <Link href={"/contact"} className="text-blue-500 block text-sm hover:underline">
                                    21, Oyekan street, off Ogunlana Drive,<br /> Surulere, Lagos State, Nigeria
                                </Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <hr />
            {/* copywrite section */}
            <div className="py-10 px-5 max-w-7xl mx-auto">
                <p className="text-gray-500 text-sm">All right reserved &copy; Blueclimate 2023</p>
            </div>
        </>
    );
};

export default Footer;