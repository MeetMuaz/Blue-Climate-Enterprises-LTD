import type { NextPage } from "next";
import Link from 'next/link';

interface Props {
    header?: string;
    paragraph?: string;
    imageUrl?: string;
    linkTo: string;
    linkText?: string;
}

const Header: NextPage<Props> = ({ header, paragraph, imageUrl, linkTo, linkText }: Props) => {
  const style = { backgroundImage: `url(${imageUrl})`};

  return ( 
    <>
        {/* header section */}
        <div className="py-10 px-5 max-w-7xl mx-auto">
            <div className="h-96 px-5 rounded bg-cover bg-center bg-gray-100 py-auto flex items-center" style={style}>
                <div>
                    <h1 className="text-4xl text-white font-semibold py-6">{header}</h1>
                    <p className="text-white text-lg mb-8 md:max-w-md sm:max-w-sm">{paragraph}</p>
                    <Link href={linkTo} className="font-semibold bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded text-white shadow-sm">
                        {linkText}
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
};

export default Header;
