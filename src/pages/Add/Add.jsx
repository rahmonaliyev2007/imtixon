import React, { useState } from 'react'
import { Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Add() {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({ full_name: '', age: 0, gender: '', subject: '', class: '', email: "", about: '', image: '', });
  const [errors, setErrors] = useState({ full_name: false, email: false, gender: false, subject: false, class: false, age: false, });
  const setTeacherValue = (name, value) => { setTeacher({ ...teacher, [name]: value }); }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      full_name: teacher.full_name.trim() === '',
      email: teacher.email.trim() === '',
      gender: !teacher.gender,
      subject: !teacher.subject,
      class: !teacher.class,
      age: !teacher.age || teacher.age < 18,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).includes(true)) return;
    toast.success(`New teacher added successfully`);
    navigate('/teachers');
  }

  return (
    <div className='pr-20 pl-8 pt-2'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl text-[#4F4F4F]'>Add Teacher</h2>
        <button onClick={handleSubmit} className={`bg-[#509CDB] text-white hover:border-black hover:text-black hover:bg-black/10 py-2 px-5 border border-transparent rounded-lg font-medium transition-all duration-200`}>Save</button>
      </div>

      <form onSubmit={handleSubmit}>

        <div className='flex justify-between items-center gap-16 my-5'>
          <label className='w-[50%] relative mb-3'>
            <span className='mb-2 block'>Full Name</span>
            <Input type="text" className={`w-full h-10 ${errors.full_name ? 'border-red-500' : ''}`} name='full_name' onChange={(e) => setTeacherValue(e.target.name, e.target.value)} placeholder='full name' />
            <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.full_name ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}>Name is required</span>
          </label>

          <label className='w-[50%] relative mb-3'>
            <span className='mb-2 block'>Class</span>
            <Select status={errors.class && 'error'} placeholder='class' className={`w-full h-10 `} allowClear onChange={(value) => setTeacherValue('class', value)}
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
              ]} />
            <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.class ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}> Class is required </span>
          </label>
        </div>


        <div className='flex justify-between items-center gap-16 my-5'>
          <label className='w-[50%] relative mb-3'>
            <span className='my-2 block'>Email address</span>
            <Input type="email" className={`w-full h-10 ${errors.email ? 'border-red-500' : ''}`} name='email' onChange={(e) => setTeacherValue(e.target.name, e.target.value)} placeholder='email' />
            <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.email ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}> Email is required </span>
          </label>


          <label className='w-[50%] relative mb-3'>
            <span className='my-2 block'>Gender</span>
            <Select status={errors.gender && 'error'} className={`w-full h-10 ${errors.gender ? 'border-red-500' : ''}`} allowClear onChange={(value) => setTeacherValue('gender', value)} placeholder="gender"
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
              ]}
            />
            <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.gender ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}>Gender is required</span>
          </label>
        </div>
        
        <div className='flex justify-between items-center gap-16 my-5'>
          <label className='w-[50%] relative mb-3'>
            <span className='mb-2 block'>Subject</span>
            <Select status={errors.subject && 'error'} className={`w-full h-10  ${errors.subject ? 'border-red-500' : ''}`} allowClear onChange={(value) => setTeacherValue('subject', value)} placeholder="subject"
              options={[
                { value: 'math', label: 'Mathematics' },
                { value: 'Chemistry', label: 'Chemistry' },
                { value: 'information', label: 'Information' },
                { value: 'Physics', label: 'Physics' },
                { value: 'foreign language', label: 'Foreign Language' },
              ]}
            />
            <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.subject ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}>Subject is required</span>
          </label>


          <label className='w-[50%] relative mb-3'>
            <span className='mb-2 block'>Age</span>
            <InputNumber className={`w-full h-10 ${errors.age ? 'border-red-500' : ''}`} onChange={(value) => setTeacherValue('age', value)} min={0} max={100} placeholder='age' type='number' />
            <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.age ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}> Age is required and must be above 18 </span>
          </label>
        </div>



        <div className='flex justify-between items-start gap-16 my-5'>
          <label className='w-[50%]'>
            <span className='mb-2'>About</span>
            <TextArea rows={8} placeholder='about teacher' onChange={(e) => setTeacherValue('about', e.target.value)} />
          </label>


          <label className='w-[50%]'>
            <span className='mb-2'>Image Link</span>
            <Input type="text" className='w-full h-10' onChange={(e) => setTeacherValue('image', e.target.value)} placeholder='optional' />
          </label>
        </div>
      </form>
    </div>
  )
}

export default Add;