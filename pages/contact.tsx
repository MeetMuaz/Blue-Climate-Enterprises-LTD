import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useForm, SubmitHandler } from "react-hook-form";
import emailJs from '@emailjs/browser';
import { useState } from 'react';


type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
  

const Contact: NextPage = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const [ issubmit , setIsSubmit ] = useState(false)
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
             emailJs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
              data, 
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            reset();
            setIsSubmit(true);

          } else {
            console.log("an error occured");
          }
    }
 
  return (
    <>
    <Navbar />
    {/* map and form section */}
        <div className="px-5 pt-10 pb-14 max-w-7xl mx-auto">
            <h3 className="text-3xl text-gray-500 font-semibold pb-6 max-w-lg">
                Love to hear from you, get in touch today👋
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="mb-4">
                            <label 
                                htmlFor="nameField" 
                                className="text-sm text-gray-600">
                                    Your name *
                            </label>
                            <input 
                                {...register("name", { required: true })}
                                name="name"
                                id="nameField" 
                                type="text" 
                                placeholder="angela yu" 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full"
                            />
                            {errors.name && (
                                <span className="text-red-500 block">
                                name field is required!
                                </span>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <label 
                                htmlFor="emailField" 
                                className="text-sm text-gray-600">
                                    Your email *
                            </label>
                            <input 
                                {...register("email", { required: true })}
                                name="email"
                                id="emailField"
                                type="email" 
                                placeholder="angela@gmail.com" 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full" 
                            />
                            {errors.email && (
                                <span className="text-red-500 block">
                                name field is required!
                                </span>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <label 
                                htmlFor="subjectField" 
                                className="text-sm text-gray-600">
                                    Your subject *
                            </label>
                            <input 
                                {...register("subject", { required: true })}
                                name="subject"
                                id="subjectField"
                                type="text" 
                                placeholder="I will love" 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full" 
                            />
                            {errors.subject && (
                                <span className="text-red-500 block">
                                name field is required!
                                </span>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <label 
                                htmlFor="messageField" 
                                className="mb-4 text-sm text-gray-600">
                                    Your message *
                            </label>
                            <textarea 
                                {...register("message", { required: true })}
                                id="messageField"
                                name="message"
                                cols={30}
                                rows={5} 
                                placeholder="Hi there..." 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full">
                            </textarea>
                            {errors.message && (
                                <span className="text-red-500 block">
                                name field is required!
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 focus:shadow-outline 
                                hover:cursor-pointer focus:outline-none text-white font-semibold py-2 px-4 rounded"
                                type="submit"
                             >
                                submit
                             </button>
                        </div>

                        {issubmit ? 
                        <div className="p-4 bg-blue-500 text-white rounded">
                            <h3 className="text-3xl font-semibold">
                            Message submitted! 👏
                            </h3>
                        </div> :
                        <></>
                        }
                    </form>
                </div>

                {/* map section */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.154669188886!2d3.349812114094018!3d6.502095725217347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1637a7e8eb%3A0xeff5a24227ce0974!2s21%20Oyekan%20St%2C%20Surulere%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680721769507!5m2!1sen!2sng" 
                    height="395"
                    width="100%"
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    <Footer />
    </>
  )
}

export default Contact

