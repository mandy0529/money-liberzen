import React from 'react';
import {GiRolledCloth, GiClothespin} from 'react-icons/gi';
import {FaStore} from 'react-icons/fa';
import pattern from '../assets/pattern.jpeg';
import design from '../assets/work2.jpeg';
import store from '../assets/store.jpeg';
import {
  cloth1,
  cloth2,
  cloth3,
  cloth4,
  cloth5,
  cloth6,
  cloth7,
  cloth8,
} from '../assets';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'shop',
    url: '/shop',
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact',
  },
];
export const services = [
  {
    id: 1,
    icon: <GiRolledCloth />,
    title: 'Pattern',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    src: pattern,
  },
  {
    id: 2,
    icon: <GiClothespin />,
    title: 'Design',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    src: design,
  },
  {
    id: 3,
    icon: <FaStore />,
    title: 'Store',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    src: store,
  },
];
export const clothes = [
  {
    id: 'li_3308',
    title: 'cloth8',
    src: cloth8,
    year: 2001,
    number: 1,
    text: 'Founded company 2001 . 08',
  },
  {
    id: 'li_3307',
    title: 'cloth7',
    src: cloth7,
    year: 2015,
    number: 2,
    text: 'Liberzen 행사',
  },
  {
    id: 'li_3306',
    title: 'cloth6',
    src: cloth6,
    year: 2019,
    number: 3,
    text: 'Liberzen 행사',
  },
  {
    id: 'li_3305',
    title: 'cloth5',
    src: cloth5,
    year: 2021,
    number: 4,
    text: ' 현재 Liberzen ',
  },
];
