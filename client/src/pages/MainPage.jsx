import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'

export const MainPage = () => {
    const dispatch = useDispatch()
    const { posts, popularPosts } = useSelector((state) => state.post)

    console.log(popularPosts)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div className='max-w-[900px] mx-auto py-10'>
            <div className='flex justify-between gap-8'>
                <div className='flex flex-col gap-10 mx-auto basis-4/5'>
                    {posts?.map((post, idx) => (
                        <PostItem key={idx} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
