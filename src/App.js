import './App.css';
import Navbar from './components/navbar/Navbar';
import Page from './components/page/Page';
import { sliderData } from './components/sliderData';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(125.01);

  return (
    <div className="App">
      <Navbar price={price} setPrice={setPrice} value={value} setValue={setValue}/>
      <Page slides={sliderData} value={value} setValue={setValue} price={price} setPrice={setPrice}/>
    </div>
  );
}

export default App;
