import {format} from 'date-fns';
import calcul from './calculator1.js';

const  dateString = format (new Date(2024,7,21),'MM/dd/yyyy');

console.log(dateString);    //월 인덱스는 0부터 시작
console.log(calcul.add(2,4));