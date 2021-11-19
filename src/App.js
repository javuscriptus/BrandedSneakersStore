import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";





function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])// возьмем предыдущие данные (конкретное состояние (prev))  и добавляем к нему добавленные товары
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    axios.get("https://61976e7aaf46280017e7e601.mockapi.io/items").then(({ data }) => {
      setItems(data);
    })
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}

      <Header name="Branded Sneakers Store" description="Магазин лучших брендовых кроссовок" price="1205" onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue("")} className="clear cu-p" src="./img/btn-remove.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="search" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items && items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(({ img, title, price }, index) => {
              return (
                <Card key={`${index}_${title}`} img={img} title={title} price={price} onClickPlus={(obj) => onAddToCart(obj)} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
