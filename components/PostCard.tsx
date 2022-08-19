import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../typings";

export default function PostCard({ post }: { post: Post }) {


    return (
        <Link href={`/post/${post.slug.current}`} >
            <div className='flex flex-col space-y-2 w-[75%] md:w-full mx-auto  rounded-lg mb-32 group cursor-pointer  border-2'>
                <div className='mb-2'>
                    {post.mainImage && (
                        <img className='group-hover:scale-105 transition-transform duration-200 ease-in-out h-80  w-full object-cover rounded-t-lg' src={urlFor(post.mainImage).url()} />
                    ) ||
                        (
                            <img className='group-hover:scale-105 transition-transform duration-200 ease-in-out w-full h-80 object-cover rounded-t-lg' src={"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg"} />
                        )}
                </div>
                <div className='text-xl items-center px-4 underline h-12 '>{post.title}</div>
                <div className='text-sm px-4 h-12'>{post.description}</div>
                <div className='px-4 pb-4 flex justify-between h-12 '>
                    <div>{post._createdAt.slice(0, 10)}</div>
                    <div>
                        {post.author.image && (
                            <img src={urlFor(post.author.image).url()} className='h-8 w-8 rounded-full' />
                        )}
                    </div>
                </div>
            </div>
        </Link>

    )

}