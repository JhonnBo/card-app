import React from "react";
import './Card.css';
export function CardFull(props) {
    const [cardData, setCardData] = React.useState(
        {
            cardHeader: props.header,
            cardPrice: props.price,
            cardDesc: props.desc
        });

    return (
        // <div>
        // <div>Card header: {cardData.cardHeader}</div>
        // <div>Card price: {cardData.cardPrice}</div>
        // <div>Card description: {cardData.cardDesc}</div>
        // </div>

        <div class="box">
            <h1>{cardData.cardHeader}</h1>
            <h2>{cardData.cardDesc}</h2>
            <p class="price">{cardData.cardPrice}$</p>

            <Description no = {props.no}/>

            {/* <p class="about">Антиопределитель</p>
            <p class="about">Конференц-связь</p>
            <p class="about">«Любимый» номер</p>
            <p class="about">Переадресация вызова</p> */}
            <a class="button" href="#">Подключиться</a>
        </div>
    )
}

function Item(props) {
    return (
        <li>
            {props.name} {props.isPacked ? '✔' : '❌'}
        </li>
    );
}
export function Description(props) {

    if (props.no === 1) {
        return(
        <ul>
            <Item isPacked={true} name = "Антиопределитель" />
            <Item isPacked={false} name="Конференц-связь" />
            <Item isPacked={false} name="«Любимый» номер" />
            <Item isPacked={false} name="Переадресация вызова" />

        </ul>)
    }
    else if (props.no === 2) {
        return(
            <ul>
                <Item isPacked={true} name = "Антиопределитель" />
                <Item isPacked={true} name="Конференц-связь" />
                <Item isPacked={false} name="«Любимый» номер" />
                <Item isPacked={false} name="Переадресация вызова" />
    
            </ul>)
    }
    else if (props.no === 3) {
        return(
            <ul>
                <Item isPacked={true} name = "Антиопределитель" />
                <Item isPacked={true} name="Конференц-связь" />
                <Item isPacked={true} name="«Любимый» номер" />
                <Item isPacked={true} name="Переадресация вызова" />
    
            </ul>)
    }
}