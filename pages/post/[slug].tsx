import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { sanityClient, urlFor } from '../../sanity';
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Image from "next/image";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface Props {
    post: Post;
}

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    comment: string;
  }
  

function Slug({ post }: Props) {
  
    const [submitted, setSubmitted] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormInput>();
  
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(() => {
          console.log(data);
          setSubmitted(true);
        })
        .catch((err) => {
          console.log(err);
          setSubmitted(false);
        });
    };

  return (
    <>
    <Navbar />

        {/* blog header section */}
        <div className="max-w-7xl mx-auto">
            <div className="py-10 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Image 
                        alt="image"
                        src={urlFor(post.mainImage).url()!}
                        height={500}
                        width={500}
                        className="order-first md:order-last bg-cover h-80 w-full bg-gray-100 rounded"
                    />
                    <div className="order-last md:order-first md:max-w-sm md:mt-12">
                        <h3 className="text-4xl text-gray-500 font-semibold pb-6">{post.title}</h3>
                        
                        <div>
                            <div className="h-10 w-10 rounded-full bg-cover float-left mr-2" style={{backgroundImage: `url(${urlFor(post.author.image).url()!})`}} />
                            <p className="text-gray-400">{post.author.name}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* main blog section */}
            <div className="py-10 px-5">
                <PortableText 
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={post.body}
                serializers={{
                      h1: (props: any) => (
                        <h1 className="text-2xl text-gray-400 font-bold my-5" {...props} />
                      ),
                      h2: (props: any) => (
                        <h2 className="text-xl text-gray-400 font-bold my-5" {...props} />
                      ),
                      h3: (props: any) => (
                        <h3 className="text-lg text-gray-400 font-bold my-5" {...props} />
                      ),
                      normal: (props: any) => (
                        <p className="text-gray-400 my-5" {...props} />
                      ),
                      li: ({ children }: any) => (
                        <li className="text-gray-400 list-disc">{children}</li>
                      ),
                      link: ({ href, children }: any) => (
                        <a className="text-blue-500 hover:underline" href={href}>
                          {children}{" "}
                        </a>
                      ),
                }}
                />
            </div>
            
            {/* date section */}
            <div className="py-10 px-5">
                <small className="text-gray-400">
                Published at {new Date(post._createdAt).toLocaleString()}{" "}
                </small>
            </div>


            {/* comment section */}
            {submitted ? (
          <div className="flex flex-col p-10 my-10 bg-blue-500 text-white max-w-2xl mx-auto rounded">
            <h3 className="text-3xl font-bold">
              Thank you for submitting your comment
            </h3>
            <p className="mt-2">Once it has been approved, it will appear below! 👇</p>
          </div>
        ) : (
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
            >
            
            <h3 className="text-sm text-blue-500">Enjoyed this article?</h3>
            <h4 className="text-3xl text-gray-500 font-semibold">Leave a comment below! 👇</h4>
            <hr className="py-3 mt-2" />

            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label htmlFor="" className="block mb-5">
              <span className="text-gray-700">Name</span>
              <input
                {...register("name", { required: true })}
                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full"
                placeholder="Elon Musk"
                type="text"
              />
              {errors.name && (
                <span className="text-red-500 block">
                  name field is required!
                </span>
              )}
            </label>
            <label htmlFor="" className="block mb-5">
              <span className="text-gray-700">Email</span>
              <input
                {...register("email", { required: true })}
                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full"
                placeholder="example@gmail.com"
                type="email"
              />
              {errors.comment && (
                <span className="text-red-500 block">
                  comment field is required!
                </span>
              )}
            </label>
            <label htmlFor="" className="block mb-5">
              <span className="text-gray-700">Comment</span>
              <textarea
                {...register("comment", { required: true })}
                className="block border border-gray-400 py-1 px-2 outline-gray-500 rounded w-full"
                placeholder="I will like to..."
                rows={8}
              />
              {errors.email && (
                <span className="text-red-500 block">
                  email field is required!
                </span>
              )}
            </label>

            <input
              className="bg-blue-500 hover:bg-blue-600 focus:shadow-outline 
            hover:cursor-pointer focus:outline-none text-white font-semibold py-2 px-4 rounded"
              type="submit"
              name=""
              id=""
            />
            </form>)}

            {/* Comments */}

            <div className="flex flex-col py-10 px-5 max-w-2xl mx-auto space-y-2 rounded ">
            <h3 className="text-xl font-semibold text-gray-500">Comments </h3>
            <hr className="pb-2" />

            {post.comments.map((comment) => (
                <div key={comment._id}>
                <p className="text-gray-500">
                    <span className="text-gray-500">{comment.name}: </span>
                    {comment.comment}
                </p>
                </div>
            ))}
            </div>
            </div>
    <Footer />
    </>
  )
}

export default Slug;

export const getStaticPaths = async () => {
    const query = `*[_type == 'post'] {
                      _id,
                      slug {
                        current
                      }
                      }`;
  
    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: Post) => ({
      params: {
        slug: post.slug.current,
      },
    }));
  
    return { paths, fallback: "blocking" };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
      *[_type == "post" && slug.current == $slug][0] {
          _id,
          _createdAt,
          title,
          author -> {
              name,
              image
          },
          'comments': *[
              _type == "comment" &&
              post._ref == ^._id &&
              approved == true],
              description,
              mainImage,
              slug,
              body
      }
      `;
  
    const post = await sanityClient.fetch(query, {
      slug: params?.slug,
    });
  
    if (!post) {
      return { notFound: true };
    }
  
    return {
      props: {
        post,
      },
      revalidate: 60, // Update the old cache after 60 seconds
    };
  };

  
