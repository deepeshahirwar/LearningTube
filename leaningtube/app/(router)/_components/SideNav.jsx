 "use client"
 import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import React from 'react'

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All courses',
            icon: BookOpen
        }
        ,
        {
            id: 2,
            name: 'Membership',
            icon: BadgeIcon
        },
        {
            id: 3,
            name: 'Be Instructor',
            icon: GraduationCap
        },



    ]
    return (
        <div className='
        p-5 bg-white shadow-sm border h-screen'>
            <div className='text-2xl font-bold'>
                MyLogo</div>  

           
       <hr className='mt-7'></hr>
            {/* menu list */} 
            <div className='mt-8'>
             {menu.map((item, index)=>(
               <div className=
               'group flex gap-3 mt-2 p-3 text-[20px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white  transition-all ease-in-out duration-200 ' >  

                <item.icon  className='group-hover:animate-bounce' />
                    <h2>{item.name}</h2>
              </div>
             ))} 
             </div>

        </div>
    )
}

export default SideNav