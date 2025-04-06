import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TeachersTable from './components/TeachersTable';

const api = import.meta.env.VITE_API_DEVCONNECTOR
const fetchPosts = async () => {
    const response = await axios.get(`${api}/api/posts`, { headers: { "X-Auth-Token": localStorage.getItem('token') } })
    return response?.data
}

function Teachers() {
    const navigate = useNavigate();
    const { data, error, isLoading } = useQuery(
        {
            queryKey: ['posts'],
            queryFn: fetchPosts,
        }
    );

    const userId = localStorage.getItem('userId');
    const posts = data?.filter((post) => post.user === userId);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {setSearchQuery(e.target.value);};
    const filteredPosts = posts?.filter((post) => {
        const name = post?.text?.match(/<name>\s*(.*?)\s*<\/name>/)?.[1]?.toLowerCase();
        const email = post?.text?.match(/<email>\s*(.*?)\s*<\/email>/)?.[1]?.toLowerCase();
        const query = searchQuery.toLowerCase();
        return (name && name.includes(query)) || (email && email.includes(query));
    });

    return (
        <div className='pr-20 pl-8 pt-2'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl text-[#4F4F4F]'>Teachers</h2>
                <button onClick={() => navigate('/add')} className={` bg-[#509CDB] text-white hover:border-black hover:text-black hover:bg-black/10 py-2 px-5  border border-transparent  rounded-lg font-medium transition-all duration-200`}>
                    Add Teacher
                </button>
            </div>
            <div className='w-full bg-[#E0E0E0]/60 mt-4 flex items-center gap-2 rounded px-4 mb-10'>
                <Search className='text-[#4F4F4F]' size={17} />
                <input  type="text"  className='w-full py-3 bg-transparent outline-none'  placeholder='Search for a teacher by name or email'  value={searchQuery} onChange={handleSearch} />
            </div>
            <TeachersTable posts={filteredPosts} />
        </div>
    )
}

export default Teachers;