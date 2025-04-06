import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Bell, BellRing, ChevronRight, CircleDollarSign, GraduationCap, Home, Menu, Settings, TextSelection, Users } from 'lucide-react'
import { Modal } from 'antd';
export default function Dashboard_Layout() {
  const location = useLocation();
  const navigate = useNavigate()
  const [isSideOpen, setIsSideOpen] = useState(true);

  const handleLogout = () => {
    Modal.confirm({
      title: "Are you sure you want to log out?",
      
      onOk() {
        localStorage.clear();
        window.location.href = "/";
      },
      onCancel() { },
    });
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    } 
  }, [])
  return (
    <div className='w-full h-screen bg-[#FFFFFF] flex justify-between items-start' >
      <div className={` transition-all duration-500 bg-[#152259] h-full relative rounded-r-lg ${isSideOpen ? 'w-[280px]' : 'w-[0px]'} `}>
        <button onClick={() => setIsSideOpen(!isSideOpen)} className={` duration-1000 font-semibold absolute ${isSideOpen ? "right-3 text-white top-5" : location.pathname === '/' ? "-right-10 top-10 " : "-right-14 text-black top-5"} z-50  hover:bg-white/20 p-1 transition-all rounded-full`}><Menu /></button>
        <div className='w-full border-b border-b-white/30 overflow-hidden'>
          <div className='w-full px-5 flex justify-center my-6'>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
              <img src={"https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="school logo" className='w-full h-full object-cover' />
            </div>
          </div>
          <h3 className='text-center w-[240px] text-white font-semibold mb-5 overflow-hidden'>Udemy Inter. school</h3>
        </div>
        <div>
          <ul className='mt-6 overflow-hidden'>
            <li className='w-[240px] py-1 px-6 '>
              <NavLink to="/" className={({ isActive }) => `flex items-center p-2 rounded text-base gap-3 text-white  transition-all ${isActive ? 'bg-[#509CDB] gap-4 hover:text-white' : 'hover:bg-[#509CDB]/50 hover:text-white/80'}`} >
                <Home size={16} /> Dashboard
              </NavLink>
            </li>
            <li className='w-[240px] py-1 px-6 '>
              <NavLink to="/teachers" className={({ isActive }) => `flex relative items-center p-2 rounded text-base gap-3 text-white transition-all ${location.pathname === '/add' && 'bg-[#509CDB] gap-4 hover:text-white'} ${isActive ? 'bg-[#509CDB] gap-4 hover:text-white' : 'hover:bg-[#509CDB]/50 hover:text-white/80'}`} >
                <Users size={16} /> Teachers <div className={`absolute top-1/2 -translate-y-3 transition-all duration-1000 ${location.pathname === '/add' ? 'opacity-100 right-2' : 'opacity-10 right-0'}`}><ChevronRight /></div>
              </NavLink>
            </li>
            <li className='w-[240px] py-1 px-6 '>
              <NavLink to="/students" className={({ isActive }) => `flex items-center p-2 rounded text-base gap-3 text-white transition-all ${isActive ? 'bg-[#509CDB] gap-4 hover:text-white' : 'hover:bg-[#509CDB]/50 hover:text-white/80'}`} >
                <GraduationCap size={16} />Students
              </NavLink>
            </li>
            <li className='w-[240px] py-1 px-6 '>
              <NavLink to="/billing" className={({ isActive }) => `flex items-center p-2 rounded text-base gap-3 text-white transition-all ${isActive ? 'bg-[#509CDB] gap-4 hover:text-white' : 'hover:bg-[#509CDB]/50 hover:text-white/80'}`} >
                <CircleDollarSign size={16} /> Billing
              </NavLink>
            </li>
            <li className='w-[240px] py-1 px-6 '>
              <NavLink to="/settings" className={({ isActive }) => `flex items-center p-2 rounded text-base gap-3 text-white transition-all ${isActive ? 'bg-[#509CDB] gap-4 hover:text-white' : 'hover:bg-[#509CDB]/50 hover:text-white/80'}`} >
                <Settings size={16} /> Settings and profile
              </NavLink>
            </li>
            <li className='w-[240px] py-1 px-6 '>
              <NavLink to="/exams" className={({ isActive }) => `flex items-center p-2 rounded text-base gap-3 text-white transition-all ${isActive ? 'bg-[#509CDB] gap-4 hover:text-white' : 'hover:bg-[#509CDB]/50 hover:text-white/80'}`} >
                <TextSelection size={16} /> Exams
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full bg-[#FFFFFF] h-full relative'>
        <nav className={`w-full px-20 absolute top-0 right-0 ${location.pathname === '/' ? "bg-[#FCFAFA] py-10" : "bg-[#FFFFFF] py-5"} transition-all duration-1000 flex justify-between items-center`}>
          <p className={`text-[#424242] transition-all duration-700 text-sm font-ligh leading-5 ${location.pathname === '/' ? 'opacity-100' : 'opacity-0'}`}><strong className='block text-base font-semibold'>Learn  how to launch faster</strong>
            watch our webinar for tips from our experts and get a limited time offer.</p>
          <div className='flex justify-end items-center gap-10'>
            <Bell />
            <button onClick={handleLogout} className={`${location.pathname === '/' ? "bg-[#509CDB] text-white hover:border-black hover:text-black hover:bg-black/10 py-2 px-5" : " text-black py-2 px-0 hover:text-[#509CDB] "}   border border-transparent  rounded-lg font-medium transition-all duration-700`}>Log Out</button>
          </div>
        </nav>
        <div className='h-screen w-full pt-20'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
