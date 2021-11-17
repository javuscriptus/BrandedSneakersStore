import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const itemsArr = [{
  img: "img/sneakers/1.jpg",
  name: "Мужские Кроссовки Nike Blazer Mid Suede",
  price: 12999
}, {
  img: "img/sneakers/2.jpg",
  name: "Мужские Кроссовки Nike Air Max 270",
  price: 12999
}, {
  img: "img/sneakers/3.jpg",
  name: "Мужские Кроссовки Nike Blazer Mid Suede",
  price: 8499
}, {
  img: "img/sneakers/4.jpg",
  name: "Кроссовки Puma X Aka Boku Future Rider",
  price: 8999
}, {
  img: "img/sneakers/5.jpg",
  name: "Мужские Кроссовки Under Armour Curry 8",
  price: 15199
}]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header name="REACT SNEAKERS" description="Магазин лучших кроссовок" price="1205" />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {
            itemsArr.map(({ img, name, price }) => {
              return (
                <Card img={img} name={name} price={price} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
