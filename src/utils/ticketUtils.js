import { addMinutes, format } from 'date-fns';

export const minutesToHours = (minutes) => {
  const hours = Math.trunc(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min}м`;
};

export const countStops = (stops) => {
  const len = stops.length;

  switch (len) {
    case 0:
      return 'Без пересадок';
    case 1:
      return '1 пересадка';
    case 2:
    case 3:
    case 4:
      return `${len} пересадки`;
    default:
      return `${len} пересадок`;
  }
};

export const formatStops = (stops) => (stops.length ? stops.join(', ') : '—');

export const formatDate = (date, duration) =>
  `${format(new Date(date), 'kk:mm')} - ${format(new Date(addMinutes(new Date(date), duration)), 'kk:mm')}`;

export const formatPrice = (price) => {
  if (price < 10000) {
    return `${price} Р`;
  }
  if (price < 100000) {
    return `${price.toString().slice(0, 2)} ${price.toString().slice(2)} P`;
  }
  return `${price.toString().slice(0, 3)} ${price.toString().slice(3)} P`;
};
