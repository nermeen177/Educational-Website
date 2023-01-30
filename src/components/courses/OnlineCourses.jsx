import React from 'react'
import { online } from '../data'

const onlineCourses = () => {
  return (
    <>
    <section className="successful mb-24 mt-16">
      <div className="container">
        <h1 className='text-center font-bold text-3xl mb-10'>Brows Our Online Courses</h1>
        <div className='coursesContatiner grid lg:grid-cols-5  grid-cols-2 gap-3'>
            { online?.map( (item) => (
              <div className='card group p-4 text-center  rounded-md bg-white hover:bg-teal-700 hover:text-white hover:cursor-pointer duration-300' key={item.id} >
                  <div className='items-center pb-4 pt-2'>
                      <img src={item.cover} alt="" className="w-16 h-16 m-auto bg-teal-700 p-1 rounded-sm" />
                      <h2 className='font-bold m-4 text-lg'>{item.courseName}</h2>          
                      <span className='text-teal-700 bg-slate-100 py-1 px-5 rounded-md'>{item.course}</span>            
                  </div>
              </div>
            ))
            }

        </div>
      </div>
    </section>
  </>
  )
}

export default onlineCourses
