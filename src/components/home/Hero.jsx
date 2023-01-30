import React from 'react';
import '../hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <section className="hero">   
       <div className='layer'>
       <div className='max-w-[90%] m-auto text-white py-[20%]'>                  
          <div>

              <div className="my-2">
                <h3 className='text-xl'>WELCOME TO ACADEMIA</h3>
                <h2 className="font-bold text-slate-200 text-3xl">Best Online Education Expertise</h2>
              </div>   

              <p className='text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>

             <div className='my-4'>
                <Link to="./AllCourses" className="btn mx-1 py-3 px-8 cursor-pointer bg-teal-700 hover:border hover:bg-transparent">
                  GET STARTED NOW
                </Link>
            </div>

          </div>
        </div>
        </div>
      </section>
  )
}

export default Hero
