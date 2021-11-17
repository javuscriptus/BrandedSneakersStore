function Card({img, name, price}) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={122} src={img} alt="" />
            <h5>{name}</h5>
            <div className="d-flex justify-between allign-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{Number(price).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })}</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/btn-plus.svg" alt="add to cart" />
                </button>
            </div>
        </div>
    )
}

export default Card;