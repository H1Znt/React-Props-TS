import { ListItem } from "../ListItem/ListItem";
import { IItem } from "../../models";

type listingProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any;
};

export const Listing = ({ items }: listingProps) => {
  return (
    <ul className="item-list">
      {items.map((item: IItem) => (
        <ListItem key={item.listing_id} item={item} />
      ))}
    </ul>
  );
};

export default Listing;
