import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
    title?: string;
    paragraph?: string;
    author?: string;
    time?: string;
    imageUrl?: string;
    authorUrl?: string;
    linkTo?: string;
}

const BlogBox: NextPage<Props> = ({ title, paragraph, author, time, imageUrl, authorUrl, linkTo }: Props) => {
    const style = { backgroundImage: `url(${authorUrl})`};
    return(
        <>
        <Link href="/">
        <div className="bg-white rounded shadow-sm overflow-hidden border">
            <img src={imageUrl} alt="" className="w-full h-56 object-cover" />
            <div className="p-5">
                <h4 className="text-gray-600 text-xl">{title}</h4>
                <p className="text-gray-400 my-5">{paragraph}</p>
                <div className="h-10 w-10 rounded-full bg-cover float-left mr-2" style={style}></div>
                <div>
                    <p className="text-gray-500">{author}</p>
                    <small className="text-gray-400">{time}</small>
                </div>
            </div>
        </div>
        </Link>
        </>
    );
};

export default BlogBox;