import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BlogBox from '../components/BlogBox';
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

const Blog:NextPage<Props> = ({ posts }) => {
  return (
    <>
    <Navbar />
    <Header
        header="Welcome To Our Blog!"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
        imageUrl="/travel.jpg"
        linkTo="/"
        linkText="Learn More Today"  
    />

    {/* blog section */}
    <div className="pt-10 pb-16 px-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post) => (
                  <BlogBox 
                  key={post._id}
                  title={post.title}
                  paragraph={post.description}
                  imageUrl={urlFor(post.mainImage).url()!}
                  author={post.author.name}
                  authorUrl={urlFor(post.author.image).url()!}
                  linkTo={`/post/${post.slug.current}`}
                />
                ))}
            </div>
          </div>

    <Footer />
    </>
  );
};

export default Blog;


export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {
    _id,
    title,
    author -> {
      name,
      image,
    },
      description,
      mainImage,
      slug
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    }
  }
}
