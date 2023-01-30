import React from 'react'
import  './contactUs.css'

const ContactUs = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"

    function handleSubmit(e) {
      e.preventDefault();
      alert("Message sent successfully");
    }

  return (
    <>
      <section className='pt-16'>
        <div className="container ">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white'>
            <iframe src={map} allowFullScreen="" aria-hidden="false" tabIndex="0" title="map" className="border-none h-full w-full" />
            <div className='px-8 py-10'>
              <h1 className='text-3xl'>Contact Us</h1>
              <p className='text-gray-700'>We're open for any suggestion or just to have a chat</p>
              <div className='info grid grid-cols-3 gap-4 my-6'>
                <div className='col-span-3 lg:col-span-1'>
                  <h2 className='font-bold'>ADDRESS:</h2>
                  <p className='text-gray-700'>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                  <h2 className='font-bold'>EMAIL:</h2>
                  <p className='text-gray-700'>info@yoursite.com</p>
                </div>
                <div>
                  <h2 className='font-bold'>PHONE:</h2>
                  <p className='text-gray-700'>+ 1235 2355 98</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className='inputs grid grid-cols-2 gap-3'>
                  <input type="text"placeholder="Name" className="inpt mb-2"  required/>
                  <input type="email" placeholder="Email" className="inpt mb-2" required/>
                
                  <textarea cols='50' rows='7' placeholder="Create a message here..."  className='inpt col-span-2 resize-none' required/>
                </div>
                <button type="submit" className="btn mt-6 text-white py-2 px-10 cursor-pointer bg-gradient-to-r from-teal-600 to-teal-900 hover:border rounded-sm">
                  Send
                 </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
