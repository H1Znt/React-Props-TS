import data from './data/etsy.json'
import { Listing }from './components/Listing/Listing';
import './App.css'
import { IItem } from './models';

function App() {
  const dataProps: IItem[] = data
  return (
    <Listing items={dataProps}></Listing>
  )
}

export default App
