import { NextPage } from "next";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Example icon import

interface Props {
  header: string;
  paragraph: string;
  color: string;
}

const ServiceBox: NextPage<Props> = ({ header, paragraph, color }: Props) => {
  return (
    <div className={`border border-solid shadow-sm font-sans py-8 px-6 rounded-lg ${color}`}>
      <div className="flex items-center mb-4">
        <FaCheckCircle className="text-white text-2xl mr-3" />
        <h3 className="text-white font-semibold text-xl">{header}</h3>
      </div>
      <p className="text-gray-100">{paragraph}</p>
    </div>
  );
};

export default ServiceBox;
