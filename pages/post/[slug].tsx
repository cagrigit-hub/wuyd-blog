
import PortableText from "react-portable-text";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity"
import {Post} from "../../typings"



interface Props {
    post: Post
}

export const getStaticPaths = async () => {
    const query = `

            *[_type=="post"]{
                slug {
                    current 
                },
            }
      `
      const posts = await sanityClient.fetch(query);

        const paths = posts.map((post: Post)=> ({
            params: {
                slug: post.slug.current,
            },
        }));

        return {
            paths,
            fallback: "blocking",
        }
}


export const getStaticProps = async ({ params } : any) => {
 
    const query = `*[_type=="post" && slug.current == $slug] {
        categories[0] -> {
        title,
      },
        _id,
        title,
        author -> {
        name,
        image,
      },
      description,
      mainImage,
      slug,
      _createdAt,
      body
      }`   

      const slug = params?.slug;
      
      const post = await sanityClient.fetch(query , {
        slug:  slug,
      });
  
      
      if (!post[0]) {
        return {
            notFound: true
        }
      }
      return {
        props: {
            post: post[0],   
        },
        revalidate: 60,
      }
} 




export default function PostPage({post} : Props) {
  
  
  return (

    <>

      <Header transparent={true} />

      <main className=" mx-auto">
        {post.mainImage ? (
          <img className="w-full object-cover h-80" src={urlFor(post.mainImage).url()} alt="post-image"/>
        ) : (
          <img className="w-full object-cover h-80" src={"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg"} />
        )}
        
          <div className="max-w-7xl mx-auto mt-12 mb-24 space-y-4 l  p-5 md:p-0">
            <p className="text-center text-5xl l  font-[600]">{post.title}</p>
            <p className="text-gray-500 text-center text-xl"> {post.description}</p>
            <div className="flex justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full" src={urlFor(post.author.image).url()} alt="author-image"/>
                <p className="text-gray-500 text-sm md:text-base lg:text-xl">{post.author.name}</p>
              </div>
              <div className="flex items-center">
                
                <p className="text-gray-500 text-sm md:text-base lg:text-xl">{post._createdAt}</p>
              </div>
          </div>

             {post.body && (
              
              <PortableText
              className="!mt-24"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"} 
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "38t8do14"} 
              content={post.body}/>
             )
            } 
            
          </div>
      </main>
    </>
  )
}