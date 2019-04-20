import React from 'react';
import { FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';

// import Image_20190227_1846 from './../assets/images/IMG_0207.JPG';
// import Image_20190321_1904 from './../assets/images/IMG_0240.JPG';
import Image_20190411_195807 from './../assets/images/20190411_195807.jpg';


const data = [
  // 데이터
  {
    date: '2019-04-11',
    headline: '21차 모임 (정기 모임)',
    places: ['전원일기', '양지상회'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '갈때 택시비 6100원\n전원일기 133000원\n올때 택시비 7700원\n양지상회 20000원',
    image: Image_20190411_195807,
    icon: <FaRegCalendarCheck color="green" />,
  },
  {
    date: '2019-03-28',
    headline: '20차 모임',
    places: ['양지돼지집', '커피'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '108000원\n15500원',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-21',
    headline: '19차 모임',
    places: ['배꼽시계'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '88000원',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-15',
    headline: '18차 모임',
    places: ['정찬수', '?'],
    attendances: ['김정진', '김정현', '김찬수', '안진영', '정찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-13',
    headline: '17차 모임',
    places: ['친구네'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '116000원',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-03',
    headline: '16차 모임',
    places: ['불타는 강통'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '102000원',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-01',
    headline: '15차 모임',
    places: ['수누리'],
    attendances: ['김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-27',
    headline: '14차 모임',
    places: ['도깨비족발'],
    attendances: ['김정진', '김정현', '김찬수', '안진영', '정찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-20',
    headline: '13차 모임 (정기 모임)',
    places: ['솥뚜껑삼겹살'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '99000원',
    icon: <FaRegCalendarCheck color="green" />,
  },
  {
    date: '2019-02-15',
    headline: '12차 모임',
    places: ['수누리'],
    attendances: ['김정진', '김정현', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-13',
    headline: '11차 모임',
    places: ['친구네'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-08',
    headline: '10차 모임',
    places: ['배꼽시계'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-06',
    headline: '9차 모임',
    places: ['수누리'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-26',
    headline: '8차 모임',
    places: ['양지돼지집'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-25',
    headline: '7차 모임',
    places: ['족발!'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-18',
    headline: '6차 모임',
    places: ['친구네', '복끄미'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-14',
    headline: '5차 모임',
    places: ['양지돼지집'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-10',
    headline: '4차 모임',
    places: ['배꼽시계'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-08',
    headline: '3차 모임',
    places: ['복끄미'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-02',
    headline: '2차 모임',
    places: ['the맛쭈꾸미', '양지상회'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-12-24',
    headline: '1차 모임',
    places: ['배꼽시계', '양꼬치'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
];

export default data;
