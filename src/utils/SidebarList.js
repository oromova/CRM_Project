import Analitika from "../assets/icons/sidebar/analitika.svg?react";
import Lidlar from "../assets/icons/sidebar/lidlar.svg?react";
import Talaba from '../assets/icons/sidebar/talaba.svg?react';
import Guruhlar from '../assets/icons/sidebar/guruhlar.svg?react';
import Kurslar from '../assets/icons/sidebar/kurslar.svg?react';
import Hr from '../assets/icons/sidebar/hr.svg?react';
import ArrowRight from '../assets/icons/sidebar/arrowRight.svg?react'


export const sidebarList = [
  {
    id: 1,
    name: "Analitika",
    icon: Analitika,
    arrow: ArrowRight,
    path: '/analytics'
  },
  {
    id: 2,
    name: "Lidlar",
    icon: Lidlar,
    arrow: ArrowRight,
    path: '/lidlar',
    child: [
      { id: 2-1, name: 'Barcha Lidlar', path: '/lidlar' },
      { id: 2-2, name: 'Birinchi dars', path: '/birinchidars' },
      { id: 2-3, name: 'Yangi Talabalar', path: '/yangitalabalar'},
    ]
  },
  {
    id: 3,
    name: "Talabalar",
    icon: Talaba,
    arrow: ArrowRight,
    path: '/talabalar',
    child: [
      { id: 3-1, name: 'Barcha Talabalar', path: '/barchatalabalar' },
      { id: 3-2, name: 'Active', path: '/active' },
      { id: 3-3, name: 'Arxiv', path: '/arxiv' },
    ]
  },
  {
    id: 4,
    name: "Guruhlar",
    icon: Guruhlar,
    arrow: ArrowRight,
    path: '/guruhlar',
    child: [
      { id: 4-1, name: 'Guruhlar', path: '/guruhlar' },
      { id: 4-2, name: 'Xonalar', path: '/xonalar' },
    ]
  },
  {
    id: 5,
    name: "Kurslar",
    icon: Kurslar,
    arrow: ArrowRight,
    path: '/kurslar',
    child: [
      { id: 5-1, name: 'Barcha kurslar', path: '/barchakurslar' },
      { id: 5-2, name: "Yo'nalishlar", path: "/yo'nalishlar" },
    ]
  },
  {
    id: 6,
    name: "HR",
    icon: Hr,
    arrow: ArrowRight,
    path: '/hr',
    child: [
      { id: 6-1, name: "Ro'llar", path: "/ro'llar" },
      { id: 6-2, name: 'Hodimlar', path: "/hodimlar" },
    ]
  },
];


export default sidebarList;
