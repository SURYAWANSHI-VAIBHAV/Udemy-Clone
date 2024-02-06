import React from 'react'

function Choice() {
    return (
        <div className='w-full lg:px-20  py-2'>
            <div className='w-full h-full' >
                <h1 className='text-lg font-bold'>Top categories</h1>
                <ul className='flex lg:justify-between flex-wrap lg:gap-10 gap-6 py-4'>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img1.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Design</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img2.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Development</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img3.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Marketing</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img4.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>IT and Software</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img5.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Personal Development</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img6.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Business</p>
                    </li>
                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img7.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Photography</p>
                    </li>

                    <li className='lg:w-[300px] lg:h-[300px]'>
                        <img src="/Categorie Img/img8.jpg" className='w-full h-full' alt="" />
                        <p className='font-bold'>Music</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Choice
