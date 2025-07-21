import React from "react";

function Rating() {
    return (
        <div className="rating-container">
            <h2>Rate Your Experience</h2>
            <div className="stars">
                {
                    [1,2,3,4,5].map((star) => {
                        return <span key={star}>{"\u2606"}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Rating;