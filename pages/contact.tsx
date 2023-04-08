import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact: NextPage = () => {
  return (
    <>
    <Navbar />
    {/* map and form section */}
        <div className="pt-10 pb-14 max-w-7xl mx-auto">
            <h3 className="text-4xl text-gray-600 font-semibold pb-6 max-w-lg">
                Love to hear from you, get in touch 👋
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <form action="" method="post">
                        <div className="mb-4">
                            <label 
                                htmlFor="nameField" 
                                className="text-sm text-gray-600">
                                    Your name *
                            </label>
                            <input 
                                id="nameField" 
                                name="name"
                                type="text" 
                                placeholder="angela yu" 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full"
                            />
                            {/* <small className="text-red-500">name field required</small> */}
                        </div>
                        
                        <div className="mb-4">
                            <label 
                                htmlFor="emailField" 
                                className="text-sm text-gray-600">
                                    Your email *
                            </label>
                            <input 
                                id="emailField"
                                name="email"
                                type="text" 
                                placeholder="angela@gmail.com" 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full" 
                            />
                            {/* <small className="text-red-500">email field required</small> */}
                        </div>
                        
                        <div className="mb-4">
                            <label 
                                htmlFor="subjectField" 
                                className="text-sm text-gray-600">
                                    Your subject *
                            </label>
                            <input 
                                id="subjectField"
                                name="subject"
                                type="text" 
                                placeholder="I will love" 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full" 
                            />
                            {/* <small className="text-red-500">subject field required</small> */}
                        </div>
                        
                        <div className="mb-4">
                            <label 
                                htmlFor="messageField" 
                                className="mb-4 text-sm text-gray-600">
                                    Your message *
                            </label>
                            <textarea 
                                id="messageField"
                                name="message" 
                                cols={30}
                                rows={5} 
                                placeholder="Hi there..." 
                                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full">
                            </textarea>
                            {/* <small className="text-red-500">message field required</small> */}
                        </div>
                    </form>
                </div>

                {/* map section */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.154669188886!2d3.349812114094018!3d6.502095725217347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1637a7e8eb%3A0xeff5a24227ce0974!2s21%20Oyekan%20St%2C%20Surulere%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680721769507!5m2!1sen!2sng" 
                    width="600" 
                    height="450" 
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