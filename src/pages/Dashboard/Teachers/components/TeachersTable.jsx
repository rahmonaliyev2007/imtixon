import React from 'react';
import { Table, Image } from 'antd';
import { useNavigate } from 'react-router-dom';

function TeachersTable({ posts }) {
  const navigate = useNavigate();

  const dataSource = posts?.map((item, index) => {
    return {
      key: index,
      id: item._id,
      user: item.user,
      name: item.title,
      email: item._id,     
      subject: item.category,
      classs: item.discount_price || '0',
      image: item.main_image, 
      gender: item.created_by, 
    };
  }) || [];

  const columns = [
    {
      title: 'Name',
      key: 'teacher',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image width={30} height={30} style={{ borderRadius: '50%', objectFit: 'cover' }} src={record.image !== 'Topilmadi' ? record.image : ''} alt="profile" fallback="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740"/>
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Class',
      dataIndex: 'classs',
      key: 'classs',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} pagination={false}
      onRow={(record) => ({
        onClick: () => {
          navigate(`/aboutTeacher/${record.id}`);
        },
        style: { cursor: 'pointer' },
      })}
    />
  );
}

export default TeachersTable;