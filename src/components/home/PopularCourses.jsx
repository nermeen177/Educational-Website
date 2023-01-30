import React from 'react'
import { coursesCard } from "../data"
import { FaStar } from "react-icons/fa";

const PopularCourses = () => {
  return (
    <>
      <section className="popular mb-20 mt-16">
        <div className="container">
          <h1 className='text-center font-bold text-3xl mb-10'>Explore our popular online courses</h1>
          <div className='coursesContatiner grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
              {coursesCard?.slice(0, 3).map( (item) => (
                <div className='card p-8 text-center bg-white rounded-sm' key={item.id}>

                  <div className='grid grid-cols-3 gap-1'>
                     <img src={item.cover} alt="cover" className='w-16 h-16 bg-teal-700 p-1 rounded-md' />
                     <div className='right col-span-2 text-left'>

                         <h2 className='font-bold text-xl mb-1'>{item.coursesName}</h2>
                         <div className='rate'>
                            <FaStar size={15} className="inline-block text-teal-700" />
                            <FaStar size={15} className="inline-block text-teal-700" />
                            <FaStar size={15} className="inline-block text-teal-700" />
                            <FaStar size={15} className="inline-block text-teal-700" />
                            <FaStar size={15} className="inline-block text-teal-700" />
                            <label className='text-sm text-teal-700'>(5.0)</label>
                         </div>
                         
                         <div className='details '>
                            {item.courTeacher.map(details => (
                               <div key={details.totalTime}>
                                  <div className='flex items-center'>
                                     <img src={details.dcover} alt="teacher" className='w-[50px] h-[50px] rounded-full mr-2 my-2' />
                                     <p className=' text-gray-700'>{details.name}</p>
                                  </div>
                                  <span className='text-teal-700'>{details.totalTime}</span>
                                </div>
                            ))}
                            
                    </div>

                     </div>
                     
                  </div>
               
                  <h3 className='text-teal-800 my-4 bg-slate-100 py-2 w-[90%] m-auto'>{item.priceAll} / {item.pricePer}</h3>
                  <button className='py-2 px-2 w-[90%] m-auto cursor-pointer border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded'>Enroll Now!</button>

                </div>
              ))
              }
          </div>
        </div>
      </section>
    </>
  )
}



export default PopularCourses