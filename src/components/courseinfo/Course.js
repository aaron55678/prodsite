import React from 'react';
import './Course.css';

const Course = (props) => {
    return (
        <li className='Course'>
          <h2>{props.name}</h2>
          <h3>{props.town}</h3>
          <p>{props.telephone}</p>
        </li>
      );
    };

export default Course;
            