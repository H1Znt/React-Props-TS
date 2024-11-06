import { ListItem } from "../ListItem/ListItem";
import { IItem } from "../../models";

export const Listing = ( {items} : {items: IItem[]}  ) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <ListItem key={item.listing_id} item={item} />
      ))}
    </ul>
  );
};
