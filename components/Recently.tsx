

import { useEffect, useState } from 'react';
import { sanityClient } from '../sanity';
import { Post, Posts } from '../typings'
import _ from "lodash";
import PostCard from './PostCard';




function Recently({ posts }: Posts) {
    const [tabIndex, setIndex] = useState(0);
    const [shownPosts, setShownPosts] = useState(posts);

    async function fetchCategory(category: number) {
        const query = `
        *[_type=="post" && categories[0]->title == "${_.kebabCase(categories[category])}"] | order(_createdAt desc) {
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
          _createdAt
          }`;
        const posts = await sanityClient.fetch(query);
        setShownPosts(posts);
        console.log(posts);

    }

    async function fetchAll() {


        const query = `
        *[_type=="post"] | order(_createdAt desc) {
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
          _createdAt
          }[0...6]`
        const posts = await sanityClient.fetch(query);
        setShownPosts(posts);
        console.log(posts);
        
    }


    const getMore = async () => {
        if(tabIndex === 0) {
            const query = `
            *[_type=="post"] | order(_createdAt desc) {
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
            _createdAt
            }[${shownPosts.length}...${shownPosts.length + 6}]`
            const posts = await sanityClient.fetch(query);
            setShownPosts([...shownPosts, ...posts]);
            console.log(posts);
        }
    else {
        const query = `
        *[_type=="post" && categories[0]->title == "${_.kebabCase(categories[tabIndex])}"] | order(_createdAt desc) {
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
          _createdAt
          }[${shownPosts.length}...${shownPosts.length + 6}]`
        const posts = await sanityClient.fetch(query);
        setShownPosts([...shownPosts, ...posts]);
        console.log(posts);
    }
}



    useEffect(() => {
        if (tabIndex !== 0) {
            fetchCategory(tabIndex);
        } else {
        
            fetchAll();
        }

    }, [tabIndex])
    const categories = ["All", "Daily Blog", "Technology", "Current Works","Internship Preps" ,"Finished Works", "Weekly Plans"];
    return (
        <div id='blogs' className='white max-w-7xl mx-auto  r pt-20 items-center  '>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h4 className='lg:hidden text-xl md:text-2xl '>Categories</h4>
                <select className='outline lg:hidden  text-center md:text-xl' onChange={(e) => {setIndex(parseInt(e.target.value))}}>
                    {categories.map((category, index) => {
                        return (
                            <option key={index} typeof="number" value={index} >{category}</option>
                        )
                    })}
                </select>
            </div>
            <div className='hidden lg:inline-flex md:px-16 md:pt-12  pb-4  md:space-x-12  '>
                {categories.map((category, index) => (
                    <div key={index} className={index === tabIndex ? "text-black cursor-pointer inline-block" : "text-gray-400 cursor-pointer inline-block"} onClick={() => { setIndex(index) }}>{category}</div>
                ))}
            </div>
            <hr className='hidden lg:block'/>
            {shownPosts.length !== 0 ? ( 
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-4 mt-10 lg:mt-36'>
                {shownPosts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </div>
            ) : (
                <div className='h-[500px] flex justify-center items-center text-center text-2xl  md:text-4xl lg:text-6xl' >
                    There is no post to see.. :(
                </div>
            )}
            <button onClick={getMore} className='w-[75%] ml-[12.5%] lg:ml-0 self-center lg:w-full border border-black py-5 mb-12 rounded hover:bg-black hover:text-white l text-base md:text-xl lg:text-3xl'>More</button>
        </div>

    )
}




export default Recently