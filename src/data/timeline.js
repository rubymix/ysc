import React from 'react';
import { FaRegCalendarCheck, FaRegCalendarAlt } from 'react-icons/fa';

const data = [
  // placeholder
  {
    date: '2019-05-15',
    title: '26차 모임',
    places: ['갈매기'],
    attendances: ['김정진', '김찬수', '안진영', '원동우', '정은영', '정찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-05-01',
    title: '25차 모임',
    places: ['여주 프리미엄 아울렛'],
    attendances: ['김정진', '김정현', '김찬수', '안진영', '정찬수'],
    imagefile: 'JP410501_183951.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-04-26',
    title: '24차 모임',
    places: ['복끄미'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '64000원',
    imagefile: 'JP410426_185232.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-04-22',
    title: '23차 모임',
    places: ['양지일품양꼬치'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '126000원',
    imagefile: 'JP410422_191312.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-04-11',
    title: '22차 모임 (정기 모임)',
    places: ['전원일기', '양지상회'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '갈때 택시비 6100원\n전원일기 133000원\n올때 택시비 7700원\n양지상회 20000원',
    imagefile: 'JP410411_195807.jpg',
    icon: <FaRegCalendarCheck color="green" />,
  },
  {
    date: '2019-03-28',
    title: '21차 모임',
    places: ['양지돼지집', '커피'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '108000원\n15500원',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-21',
    title: '20차 모임',
    places: ['배꼽시계'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '88000원',
    imagefile: 'JP410321_190411.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-15',
    title: '19차 모임',
    places: ['정찬수', '?'],
    attendances: ['김정진', '김정현', '김찬수', '안진영', '정찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-13',
    title: '18차 모임',
    places: ['친구네', '회롱회롱'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '116000원',
    imagefile: 'JP410313_202224.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-03',
    title: '17차 모임',
    places: ['불타는 강통'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '102000원',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-03-01',
    title: '16차 모임',
    places: ['수누리'],
    attendances: ['김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-27',
    title: '15차 모임',
    places: ['도깨비족발'],
    attendances: ['김정진', '김정현', '김찬수', '안진영', '정찬수'],
    imagefile: 'JP410227_184609.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-20',
    title: '14차 모임 (정기 모임)',
    places: ['솥뚜껑삼겹살'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    description: '99000원',
    imagefile: 'JP410220_192606.jpg',
    icon: <FaRegCalendarCheck color="green" />,
  },
  {
    date: '2019-02-15',
    title: '13차 모임',
    places: ['수누리'],
    attendances: ['김정진', '김정현', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-13',
    title: '12차 모임',
    places: ['친구네'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-08',
    title: '11차 모임',
    places: ['배꼽시계'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-02-06',
    title: '10차 모임',
    places: ['수누리'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-28',
    title: '9차 모임',
    places: ['꼬꼬씨참숯불닭갈비'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    imagefile: 'JP410128_204215.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-26',
    title: '8차 모임',
    places: ['양지돼지집'],
    attendances: ['김정진', '김정현', '김찬수', '안진영'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-25',
    title: '7차 모임',
    places: ['육감만족'],
    attendances: ['김정진', '김정현', '김찬수'],
    imagefile: 'JP410125_183200.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-18',
    title: '6차 모임',
    places: ['친구네', '복끄미', 'JJ바'],
    attendances: ['김정진', '김정현', '김찬수'],
    imagefile: 'JP410118_183808.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-14',
    title: '5차 모임',
    places: ['양지돼지집'],
    attendances: ['김정진', '김정현', '김찬수'],
    imagefile: 'JP410114_190932.jpg',
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-10',
    title: '4차 모임',
    places: ['배꼽시계'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-08',
    title: '3차 모임',
    places: ['복끄미'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-01-02',
    title: '2차 모임',
    places: ['the맛쭈꾸미', '양지상회'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
  {
    date: '2019-12-24',
    title: '1차 모임',
    places: ['배꼽시계', '양지일품양꼬치'],
    attendances: ['김정진', '김정현', '김찬수'],
    icon: <FaRegCalendarAlt />,
  },
];

export default data;
