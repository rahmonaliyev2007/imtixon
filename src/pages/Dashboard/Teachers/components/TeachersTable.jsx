import React from 'react';
import { Table, Image } from 'antd';
import { useNavigate } from 'react-router-dom';

function TeachersTable({ posts }) {
  const navigate = useNavigate();

  const getValue = (text, tag) => {
    const match = text?.match(new RegExp(`<${tag}>\\s*(.*?)\\s*<\\/${tag}>`));
    return match ? match[1] : 'Topilmadi';
  };

  const dataSource = posts?.map((item, index) => {
    const { text } = item;

    return {
      key: index,
      id: item._id ,
      user: item.user,
      name: getValue(text, 'name'),
      email: getValue(text, 'email'),
      subject: getValue(text, 'subject'),
      classs: getValue(text, 'classs'),
      image: getValue(text, 'image'),
      gender: getValue(text, 'gender'),
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