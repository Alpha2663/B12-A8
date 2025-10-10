import React from 'react';

const States = () => {
    return (
        <div className=" items-center justify-between p-0.5 ">
        <section className=' border-2 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white pb-12 '>
                <h1 className='text-4xl font-bold text-center pt-12'>Trusted by Millions, Built for You</h1>
               <div className='flex justify-center items-center gap-9 pt-6'>
                 <div className='flex flex-col gap-4 p-2'>
                    <p className='text-sm text-white '>Total Downloads</p>
                    <h1 className='font-bold text-4xl text-white'>29.6M</h1>
                    <p className='text-sm text-white '>21% more than last month</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-white '>Total Reviews</p>
                    <h1 className='font-bold text-4xl text-white'>906K</h1>
                    <p className='text-sm text-white '>46% more than last month</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-white '>Active Apps</p>
                    <h1 className='font-bold text-4xl text-white'>132+</h1>
                    <p className='text-sm text-white '>31 more will Launch</p>
                </div>
               </div>
            </section>
            </div>
    );
};

export default States;