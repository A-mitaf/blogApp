import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaUser} from "react-icons/fa"
import { FaClock } from 'react-icons/fa6'

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      <div className='max-w-7xl mx-auto my-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt='' className='w-full mx-auto rounded' />
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>
            <div className='text-base text-gray-500'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, officiis ducimus, recusandae unde laudantium animi voluptatum aut non ullam accusantium voluptatibus libero optio porro et quibusdam harum labore totam possimus!</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur possimus quia, rem molestiae totam harum sit non fugiat porro hic perferendis, explicabo delectus, autem blanditiis nostrum est ipsum enim nesciunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus blanditiis maiores aliquam eaque autem, dolor eum reprehenderit ad neque non saepe sit! Ipsam et ex ad quidem consectetur officia.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, officiis ducimus, recusandae unde laudantium animi voluptatum aut non ullam accusantium voluptatibus libero optio porro et quibusdam harum labore totam possimus!</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur possimus quia, rem molestiae totam harum sit non fugiat porro hic perferendis, explicabo delectus, autem blanditiis nostrum est ipsum enim nesciunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus blanditiis maiores aliquam eaque autem, dolor eum reprehenderit ad neque non saepe sit! Ipsam et ex ad quidem consectetur officia.</p> <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, officiis ducimus, recusandae unde laudantium animi voluptatum aut non ullam accusantium voluptatibus libero optio porro et quibusdam harum labore totam possimus!</p><br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur possimus quia, rem molestiae totam harum sit non fugiat porro hic perferendis, explicabo delectus, autem blanditiis nostrum est ipsum enim nesciunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus blanditiis maiores aliquam eaque autem, dolor eum reprehenderit ad neque non saepe sit! Ipsam et ex ad quidem consectetur officia.</p> <br/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
