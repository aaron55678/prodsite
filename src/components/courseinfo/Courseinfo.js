import React from 'react';
import './Courseinfo.css';
import Courselist from './Courselist'

const Courseinfo = (props) => {
    const dummyinfo = [
        {
            id: 'e1',
            name: 'Course A',
            town: 'who cares',
            telephone: '777'
        },
        {
            id: 'e2',
            name: 'Course B',
            town: 'who knows',
            telephone: '888'
        },
        {
            id: 'e3',
            name: 'Course C',
            town: 'who did it',
            telephone: '999'
        },

    ]

    return (
        <section>
          <Courselist course={dummyinfo} />
        </section>
      );
    };

export default Courseinfo;