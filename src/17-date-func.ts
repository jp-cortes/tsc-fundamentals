import { subDays, format, formatDistance } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero
const rta = subDays(date, 300);//subtract 300 days
const str = format(rta, 'yyyy/MM/dd');

console.log(str);//1997/05/04


let daysAgo = formatDistance(subDays(new Date(), 13), new Date(), { addSuffix: true })

console.log(daysAgo);//13 days ago

