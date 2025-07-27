import React, { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({
    heading = "Rate Your Experience",
    color = 'gold',
    feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']
}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const stars = Array.from({length: 5}, (_, i) => i + 1)

    const handleSubmit = () => {
        if (rating > 0) {
            setIsOpen(true);
        }
    }

    const onCloseModal = () => {
        setIsOpen(false);
        setRating(0);
        setHover(0);
    }

    return (
        <div className="rating-container">
            <h2>{heading}</h2>
            <div className="stars">
                {
                    stars.map((star) => {
                        return <Star 
                            key={star} 
                            star={star}
                            rating={rating}
                            hover={hover}
                            ratingClick={setRating}
                            hoverEnter={setHover}
                            hoverLeave={setHover}
                            color={color}
                            />
                    })
                }
            </div>

            {rating > 0 && <p className="feedback">{feedbackMessages[rating-1]}</p>}

            <Button
                onClick={handleSubmit}
                className='submit-btn'
                disabled={rating === 0}
            >Submit</Button>

            <Modal isOpen={isOpen} onClose={onCloseModal} rating={rating}/>
        </div>
    )
}

export default Rating;