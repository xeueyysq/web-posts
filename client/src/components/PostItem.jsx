import React from 'react'
import Moment from 'react-moment'

export const PostItem = ({ post }) => {
    return (
        <div className='flex flex-col basis-1/4 flex-grow'>
            <div className='flex justify-between items-center pt-2'>
                <div className='text-xs text-white opacity-50'>
                    {post.username}
                </div>
                <div className='text-xs text-white opacity-50'>
                    <Moment date={post.createdAt} format='D MMM YYYY' />
                </div>
            </div>
            <div className='text-white text-xl'>{post.title}</div>
            <p className='text-white opacity-60 text-xs pt-4 line-clamp-4'>
                {post.text}
            </p>
        </div>
    )
}
