import React from 'react'
import product from "../../public/images/image-product.png"
import vector from "../../public/images/vector.png"
import Image from "next/image";



const Hero = () => {
  return (
    <>
    <section className='py-[81px]'>
    <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 md:col-span-1">
            <h3 className=" font-light font-size font-roboto  mt-20">Collections</h3>
           <p className="paragraph font-normal lg:text-start font-roboto  sm:text-center mt-10">You can explore and shop many different collections from various brands here.</p>
            <button  className="font-roboto  mt-16 px-6 py-3 bg-black text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-fill mr-2" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                </svg>
                Shop Now
            </button>
        </div>
        <div className="col-span-1 md:col-span-1 relative mx-auto">
        <Image className='logo' src={product} alt="Logo" />
       

            
        </div>
    </div>
</div>
</section>
</>

  )
}

export default Hero
