import { ListItem } from "../ListItem/ListItem";
import { IItem } from "../../models";

type TListingProps = {
  items: IItem[]
}

export const Listing = ( {items} : TListingProps ) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <ListItem key={item.listing_id} item={item} />
      ))}
    </ul>
  );
};
