import React from 'react';
import { FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';

// import Image_20190227_1846 from './../assets/images/IMG_0207.JPG';
// import Image_20190321_1904 from './../assets/images/IMG_0240.JPG';
import Image_20190411_195807 from './../assets/images/20190411_195807.jpg';


const data = [
  // 데이터
  {
    date: '2019-04-11',
    headline: '23차 모임 (정기 모임)',
    places: ['전원일기', '양지상회'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '갈때 택시비 6100원\n전원일기 133000원\n올때 택시비 7700원\n양지상회 20000원',
    image: Image_20190411_195807,
    icon: <FaRegCalendarCheck color="green" />,
  },
  {
    date: '2019-03-28',
    headline: '22차 모임',
    places: ['양지돼지집', '커피'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '108000원\n15500원',
    icon: <FaRegCalendarAlt />,
  },
];

export default data;
