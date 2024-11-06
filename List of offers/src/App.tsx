import data from './data/etsy.json'
import { Listing }from './components/Listing/Listing';
import { IItem } from './models';
import './App.css'

function App() {
  const validData: IItem[] = [];
  data.forEach((item) => {
    if (item.listing_id && item.url
      && item.MainImage && item.title && item.currency_code
      && item.price && item.quantity) {
      validData.push({
        listing_id: item.listing_id,
        url: item.url,
        MainImage: { url_570xN: item.MainImage.url_570xN },
        title: item.title,
        currency_code: item.currency_code,
        price: item.price,
        quantity: item.quantity
      });
    }
  }
  );

  return (
    <Listing items={validData}></Listing>
  )
}

export default App
