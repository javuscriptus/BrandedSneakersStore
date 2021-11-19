import { useState } from 'react';
import styles from "./Card.module.scss"

function Card({ img, title, price, onClickPlus }) {
    const [toCart, setToCart] = useState(false);
    const [toFavirite, setToFavirite] = useState(false);

    const addToCart = () => {
        setToCart(!toCart)
        onClickPlus({ img, title, price })
    }

    const addToFavorite = () => {
        setToFavirite(!toFavirite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={addToFavorite} src={toFavirite ? "./img/heart-liked.svg" : "./img/heart-unliked.svg"} alt="Unliked" />
            </div>
            <img width={133} height={122} src={img} alt="Sneaker" />
            <h5>{title}</h5>
            <div className="d-flex justify-between allign-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })}</b>
                </div>
                <img className={styles.plus} onClick={addToCart} src={toCart ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="add to cart" />
            </div>
        </div>
    )
}

export default Card;