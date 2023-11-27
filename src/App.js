// src/App.js
import React from 'react';
import './App.css';

const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    image: 'https://i.ytimg.com/vi/lIM5YQyZ3pc/maxresdefault.jpg', 
    price: '$49.99',
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    image: 'https://i.ytimg.com/vi/FW-9PJahHZI/maxresdefault.jpg', 
    price: '$79.99',
  },
  {
    id: 3,
    title: 'Web Development Crash Course',
    image: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg', // Replace with your image URL
    price: '$99.99',
  },
];

function Course({ title, image, price }) {
  return (
    <div className="course">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Enroll</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
