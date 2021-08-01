import React from 'react';

function Card(props) {
    const { card, onCardClick } = props;

    function handleClick() {
        onCardClick(card);
        console.log(card);
    }

        return (
            <article className="photo">
                <div className="photo__image-container">
                    <button className="photo__trash" aria-label="Удалить" type="button"></button>
                    <img
                        className="photo__image photo__image_open"
                        src={card.link} alt={card.name}
                        onClick={handleClick} />
                </div>
                <h3
                    className="photo__title"
                    name="link">{card.name}</h3>
                <div className="photo__like-container">
                    <button className="photo__like" type="button" aria-label="Нравится"></button>
                    <p className="photo__like-counter">{card.likes.length}</p>
                </div>
            </article>
        )
}

export default Card