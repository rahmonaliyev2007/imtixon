import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GraduationCap, Mail, PhoneCall } from 'lucide-react';

const api = import.meta.env.VITE_API_DEVCONNECTOR;

const fetchFlower = async ({ queryKey }) => {
    const response = await axios(`${api}/api/flower/category/small-plants/${queryKey[1]}?access_token=64bebc1e2c6d3f056a8c85b7`);
    return response?.data;
};

function AboutTeacher() {
    const { id } = useParams();
    const { data, error, isLoading } = useQuery({
        queryKey: ['flower', id],
        queryFn: fetchFlower
    });
    return (
        <div className="bg-gray-100 min-h-[90vh] py-10">
            {isLoading && <p className="text-center text-xl text-gray-600">Loading...</p>}
            {error && <p className="text-center text-xl text-red-500">Error loading data</p>}
            {data && (
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center gap-16">
                        <div className="text-center">
                            <img src={data?.data?.main_image} alt="Teacher" className="w-64 h-64 rounded-full mx-auto mb-4" />
                            <h3 className="font-semibold text-xl text-gray-800">{data?.data?.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{data?.data?._id}@gmail.com</p>
                            <div className="flex justify-center gap-4">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-500">
                                    <GraduationCap size={30} />
                                </div>
                                <div className="bg-blue-100 p-2 rounded-full text-blue-500">
                                    <PhoneCall size={30} />
                                </div>
                                <div className="bg-blue-100 p-2 rounded-full text-blue-500">
                                    <Mail size={30} />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-800">About</h3>
                            <p className="text-gray-600 mb-6">{data?.data?.short_description}</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Subject</h4>
                                    <p className="text-gray-600">Teacher's Subject</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Class</h4>
                                    <p className="text-gray-600">Teacher's Class</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 mt-6">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Age</h4>
                                    <p className="text-gray-600">{data?.data?.discount_price || "0"}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Gender</h4>
                                    <p className="text-gray-600">O'simlik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutTeacher;