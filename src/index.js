import moment from 'moment';
import styles from './application.css';
import constants from 'Components/constants'

let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);

console.log(constants.PI);

const waitingPeriod = 4000; // milliseconds

const title = document.getElementById('page-title');

setTimeout(() => {
  title.innerHTML = 'A Whole New Document'
}, waitingPeriod);
