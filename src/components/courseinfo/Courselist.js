import React from 'react';
import './Courselist.css';
import Course from './Course';

const Courselist = (props) => {
    return (
      <ul className='Courselist'>
        {props.course.map((course) => (
          <Course
            key={course.id}
            name={course.name}
            town={course.town}
            telephone={course.telephone}
          />
        ))}
      </ul>
    );
  };
export default Courselist;
            