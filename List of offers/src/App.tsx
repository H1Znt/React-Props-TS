import data from './data/etsy.json'
import { Listing }from './components/Listing/Listing';
import './App.css'

function App() {
  const dataProps = data
  return (
    <Listing items={dataProps}></Listing>
  )
}

export default App
