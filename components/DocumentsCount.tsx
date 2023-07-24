import { Category, Post } from '@/typings'
import Image from 'next/image';
//import { urlForImage } from '../lib/image';
import {urlForImage} from '@/lib/urlFor';
import arrowRight from '../public/arrowRight.svg'
import ClientPostRoute from './clientPostRoute';
//import category from '@/schemas/category';

type docType = {
  post: Post[];
}
const DocumentsCount = ({post}: docType) => {
  //console.log(post)
  return (
    <div>
      <hr className="mb-10 border-[#f7ab0a]" />

      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 pb-24 gap-y-16'>
        {/**POSTS*/}
        {post.map(post => (        
      // eslint-disable-next-line react/jsx-key
      <ClientPostRoute route={`/post/${post.slug?.current}`} key={post._id}>
          <div className='group cursor-pointer flex flex-col'>
            <div className='relative w-full h-80  drop-shadow-xl group-hover:scale-100 transition-transform duration-200 ease-out'>
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={`${post.author?.name}`}
                fill
                className='object.cover object-left lg:object-center'
              />

              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black p-5 flex justify-between backdrop-blur-lg rounded drop-shadow-lg text-white'>
                <div>
                  <p className='font-bold'>{post.title}</p>

                  <p>
                    {new Date(post._createdAt).toLocaleDateString
                      ('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year:'numeric',
                      })}
                  </p>
                </div>
 
                <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                  {post.categories?.map((category: Category) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='bg-[#F7Ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                      <p>{category?.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex-1 flex flex-col mt-5'>
              <p className='underline text-lg font-bold'>{post.title}</p>
              {/**FIX ME: description not showing */}
              <p className='text-gray-500 line-clamp-2'>{post.body[0].children[0].text}</p>
            </div>

            <h4 className='mt-4 font-bold flex items-center group-hover:underline flex-row'>
              Read post
              <Image 
                src={arrowRight} 
                alt=''
                className='ml-2 w-4'
              />
            </h4>
          </div>
        </ClientPostRoute>
        ))}
      </div>
    </div>
  )
}

export default DocumentsCount;