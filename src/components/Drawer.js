function Drawer({ items = [], onClose }) {

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">
                    Корзина  <img onClick={onClose} className="cu-p" src="./img/btn-remove.svg" alt="Remove" />
                </h2>
                <div className="cardItems flex">
                    {items.map(({ img, title, price }) => {
                        return (
                            <div className="cartItem d-flex align-center mb-20">
                                <div style={{ backgroundImage: `url(${img})` }} className="cartItemImg"></div>
                                <div className="mr-20">
                                    <p className="mb-5">{title}</p>
                                    <b>{price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })}</b>
                                </div>
                                <img className="removeBtn" src="./img/btn-remove.svg" alt="Remove" />
                            </div>
                        )
                    })}
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="./img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;