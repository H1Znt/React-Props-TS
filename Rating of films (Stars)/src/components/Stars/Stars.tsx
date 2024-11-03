import { Star } from "../Star/Star";
import "./Stars.css";

type TStarCount = {
  count: number;
};
export const Stars = ({ count = 0 }: TStarCount) => {
  if (Number.isNaN(count)) return null;
  if (count < 1 || count > 5) return null;

  const starsListItems = [];

  for (let i = 1; i <= count; i += 1) {
    const id: number = i;
    starsListItems.push(
      <li key={id}>
        <Star />
      </li>
    );
  }

  return <ul className="card-body-stars">{[starsListItems]}</ul>;
};