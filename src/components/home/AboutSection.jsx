import React from 'react'
import about from '../../assets/about.webp'
import { aboutData } from '../data';
import { awrapper } from '../data'

const AboutSection = () => {
  return (
    <>
      <section className=''>
        <div className="container">
          <div className='grid grid-cols-1 lg:grid-cols-2'>
          <img src={about} alt="" className='h-full w-full'/>
           <div className='px-6 mt-10'>
            <span className='text-teal-700 font-bold'>LEARN ANYTHING</span>
            <h1 className='text-4xl font-bold mb-4'>Benefits About Online Learning Expertise</h1>
            <div className='itemsContainer'>
               {aboutData?.map((item) => (
                  <div className='item group flex bg-white mb-4 rounded-sm py-4 px-6 hover:bg-teal-700 hover:text-white duration-300 hover:cursor-pointer' key={item.id}>
                    <img src={item.cover} alt="icon" className='w-20 mr-5' />
                    <div className='text'>
                       <h2 className='font-bold mb-2 text-lg'>{item.title}</h2>
                       <p className='text-gray-700 group-hover:text-white duration-300'>{item.desc}</p>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
        </div>    
      </section>
      <div className='min-h-[160px] bg-gradient-to-r from-teal-500 to-teal-900 text-white p-4 grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 lg:gap-x-1'>
        {awrapper?.map( (val) => (
          <div className='container flex' key={val.data}>
            <img src={val.cover} alt="" className='w-16 lg:w-20 mr-3 '/>
            <div className='txt'>
              <h3 className='font-bold text-3xl'>{val.data}</h3>
              <h4>{val.title}</h4>
            </div>
            
          </div>
        ))
        }
        </div>

    </>
  )
}

export default AboutSection
