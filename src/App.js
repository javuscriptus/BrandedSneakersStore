import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header name="REACT SNEAKERS" description="Магазин лучших кроссовок" price="1205"/>
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card img="img/sneakers/1.jpg" name="Мужские Кроссовки Nike Blazer Mid Suede" price="122999"/>
        </div>
      </div>
    </div>
  );
}

export default App;
