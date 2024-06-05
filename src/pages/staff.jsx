import React from 'react';
import Layout from '@theme/Layout';

const data = [
    {
        "exam": "Math Final",
        "subject": "Mathematics",
        "language": "English",
        "teacher": "John Doe",
        "gender": "Male",
        "qualifications": "M.Sc Mathematics",
        "teaching_experience": "10 years",
        "occupation": "High School Teacher",
        "photo_link": "https://example.com/photo.jpg",
    },
    {
        "exam": "Physics Exam",
        "subject": "Physics",
        "language": "English",
        "teacher": "Jane Smith",
        "gender": "Female",
        "qualifications": "Ph.D. in Physics",
        "teaching_experience": "8 years",
        "occupation": "College Professor",
        "photo_link": "https://example.com/photo2.jpg",
    }
];

const containerStyle = {
    padding: '20px',
    maxWidth: 'calc(90% - 10px)', // Adjusted width
    marginLeft: '5%', // Added margin to the left
    marginRight: '5%', // Added margin to the right
};

const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    width: '100%', // Adjusted width
};

const imgStyle = {
    borderRadius: '50%',
    width: '200px', // Increased size
    height: '200px', // Increased size
    objectFit: 'cover',
    marginRight: '20px',
};

const infoStyle = {
    textAlign: 'left',
};

export default function TeacherDetails() {
    return (
        <Layout title="Teacher Details">
            <div style={containerStyle}>
                <h1>Teacher Details</h1>
                {data.map((teacher, index) => (
                    <div key={index} style={{...cardStyle, textAlign: index === 0 ? 'left' : 'right'}}>
                        <img src={teacher.photo_link} alt="Teacher photo" style={imgStyle} />
                        <div style={infoStyle}>
                            <p><strong>Exam:</strong> {teacher.exam}</p>
                            <p><strong>Subject:</strong> {teacher.subject}</p>
                            <p><strong>Language:</strong> {teacher.language}</p>
                            <p><strong>Teacher:</strong> {teacher.teacher}</p>
                            <p><strong>Gender:</strong> {teacher.gender}</p>
                            <p><strong>Qualifications:</strong> {teacher.qualifications}</p>
                            <p><strong>Teaching Experience:</strong> {teacher.teaching_experience}</p>
                            <p><strong>Occupation:</strong> {teacher.occupation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
