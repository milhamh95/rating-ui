const Star = ({
    star,
    rating,
    hover,
    ratingClick,
    hoverEnter,
    hoverLeave,
    color
}) => {
    return (
        <span className="star" 
            onClick={() => ratingClick(star)}
            onMouseEnter={() => hoverEnter(star)}
            onMouseLeave={() => hoverLeave(0)}
            style={{
                color: star <= (hover || rating) ? color: '#ccc'
            }}
            >{'\u2605'}</span>
    )
}

export default Star;