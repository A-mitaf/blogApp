import React from 'react'
import Banner from '../conponents/Banner'
import BlogPage from '../conponents/BlogPage'

const Home = () => {
    return (
        <div>
            <Banner/>

            <div className='max-w-7xl mx-auto'>
                <BlogPage/>
            </div>
        </div>
    )
}

export default Home