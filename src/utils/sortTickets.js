import { CHEAP, FAST, OPTIMAL } from '../redax/sortReducer';

const sortTickets = (tickets, sort) => {
  const tempTickets = tickets;
  if (sort === CHEAP) {
    return tempTickets.sort((prev, next) => prev.price - next.price);
  }
  if (sort === FAST) {
    return tempTickets.sort(
      (prev, next) =>
        prev.segments[0].duration + prev.segments[1].duration - (next.segments[0].duration + next.segments[1].duration)
    );
  }
  if (sort === OPTIMAL) {
    return tempTickets.sort(
      (prev, next) =>
        prev.price * (prev.segments[0].duration + prev.segments[1].duration) -
        next.price * (next.segments[0].duration + next.segments[1].duration)
    );
  }
  return tempTickets;
};

export default sortTickets;
