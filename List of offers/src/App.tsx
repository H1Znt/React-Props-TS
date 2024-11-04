import data from './data/etsy.json'
import { Listing }from './components/Listing/Listing';
import './App.css'

function App() {
  const dataProps = JSON.parse(data.toString())
  return (
    <Listing items={dataProps}></Listing>
  )
}

export default App
