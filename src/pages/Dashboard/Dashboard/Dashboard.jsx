import React from 'react'
import profileIcon from '../../../../public/images/profile-add.svg'
import bankIcon from '../../../../public/images/bank.svg'
import teacherIcon from '../../../../public/images/teacher.svg'
function Dashboard() {
    return (
        <div className='px-20 w-full h-full text-[#4F4F4F] pt-12'>
            <h2 className='text-4xl'>Welcome to your dashboard, Udemy school</h2>
            <h3 className='text-2xl pl-20 mt-5'>Uyo/school/@teachable.com</h3>

            <div className='m-auto'>
                <div className='flex items-start gap-5 pl-20 mt-16 mb-7'>
                    <div className='bg-[#EFF3FA] p-1 rounded'><img src={profileIcon} alt="udevs icon " /></div>
                    <div>
                        <h4 className=' text-2xl'>Add other admins </h4>
                        <p className='text-sm max-w-[480px] mt-4'>Create rich course content and coaching products for your students.
                            When you give them a pricing plan, they’ll appear on your site!</p>
                    </div>
                </div>
                <div className='flex items-start gap-5 pl-20 my-7'>
                    <div className='bg-[#EFF3FA] p-1 rounded'><img src={bankIcon} alt="udevs icon " /></div>
                    <div>
                        <h4 className=' text-2xl'>Add classes  </h4>
                        <p className='text-sm max-w-[480px] mt-4'>Create rich course content and coaching products for your students.
                            When you give them a pricing plan, they’ll appear on your site!</p>
                    </div>
                </div>
                <div className='flex items-start gap-5 pl-20 my-7'>
                    <div className='bg-[#EFF3FA] p-1 rounded'><img src={teacherIcon} alt="udevs icon " /></div>
                    <div>
                        <h4 className=' text-2xl'>Add students </h4>
                        <p className='text-sm max-w-[480px] mt-4'>Create rich course content and coaching products for your students.
                            When you give them a pricing plan, they’ll appear on your site!</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Dashboard