import React from 'react'
import { testimonal } from '../data'

const SuccessfulStudents = () => {
    return (
        <>
          <section className="successful mb-24 mt-16">
            <div className="container">
              <h1 className='text-center font-bold text-3xl mb-10'>Our Successful Students</h1>
              <div className='coursesContatiner grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                  {testimonal?.map( (item) => (
                    <div className='card group p-6 text-center bg-white rounded-sm hover:bg-teal-700 hover:text-white hover:cursor-pointer duration-500' key={item.id}>
                        <div className='flex items-center mb-4'>
                            <img src={item.cover} alt="" className="w-20 h-20 rounded-full mr-2 my-2" />
                            <div className='text-left'>
                              <h2 className='font-bold'>{item.name}</h2>
                              <span className='text-teal-700 group-hover:text-white duration-500'>{item.post}</span>
                            </div>                         
                        </div>
                        <p className='text-left'>{item.desc}</p>
                    </div>
                  ))
                  }

              </div>
            </div>
          </section>
        </>
      )
}

export default SuccessfulStudents