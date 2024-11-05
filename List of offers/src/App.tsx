import data from './data/etsy.json'
import { Listing }from './components/Listing/Listing';
import './App.css'
import { IItem } from './models';

function App() {

  const dataProps: IItem[] = data.map(({ url, MainImage, title, currency_code, price, quantity, listing_id, state }) => 
    ({
      url, 
      MainImage,
      title,
      currency_code,
      price,
      quantity,
      listing_id, 
      state
    }))

//   const dataProps: IItem[] = data.map(item => ({
//     url: item.url,
//     MainImage: {
//         url_570xN: item.MainImage.url_570xN,
//     },
//     title: item.title,
//     currency_code: item.currency_code,
//     price: item.price,
//     quantity: item.quantity,
//     listing_id: item.listing_id,
//     state: item.state,
// }))

//   const getItemData = (items: string) => {
//     const jsonObject: IItem[] = JSON.parse(items)
//     return jsonObject.map(item => ({
//         url: item.url,
//         MainImage: {
//             url_570xN: item.MainImage.url_570xN,
//         },
//         title: item.title,
//         currency_code: item.currency_code,
//         price: item.price,
//         quantity: item.quantity,
//         listing_id: item.listing_id,
//         state: item.state,
//     }));
// }

  return (
    <Listing items={dataProps}></Listing>
  )
}

export default App
