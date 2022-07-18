import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import './StarRating.css';

// ESTRELLAS DE VALORACION.

const StarRating = ({setRating, rat}) => {
    
    const [hover, setHover] = useState(null);

    return (
        <div className='divRating'>
            <div className='ratingTitle'><p>Rating:</p></div>
            <div className="starsVal">
            {
                [...Array(5)].map((s, i) => {
                    const ratingValue = i + 1;
                    const onClickRat = () => {
                        if(ratingValue !== rat) {
                            setRating(ratingValue)
                        } else {
                            setRating(null)
                        }
                    }
                    return (
                        <label key={i}>
                            <input 
                                type="button" 
                                name="rating" 
                                value={ratingValue}
                                onClick={onClickRat} 
                            />
                            <FaRegStar 
                                size={20} 
                                color={ratingValue <= (hover || rat) ? "#ffc107" : "e4e5e9"} 
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })
            }
            </div>
        </div>
    );
}

export default StarRating;