import { TListItemProps } from "../../models";

export const ListItem = ({ item }: TListItemProps) => {
  const { url, MainImage, title, currency_code, price, quantity } = item;

  let priceTag;
  let colorClass;

  if (currency_code === "USD") {
    priceTag = `$${price}`;
  } else if (currency_code === "EUR") {
    priceTag = `€${price}`;
  } else {
    priceTag = `${price} ${currency_code}`;
  }

  if (quantity <= 10) {
    colorClass = "level-low";
  } else if (quantity <= 20) {
    colorClass = "level-medium";
  } else {
    colorClass = "level-high";
  }

  const shortTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{priceTag}</p>
        <p className={`item-quantity ${colorClass}`}>{quantity} left</p>
      </div>
    </div>
  );
};
