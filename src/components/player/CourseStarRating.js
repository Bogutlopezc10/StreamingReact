import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Player.css'

const CourseStarRating = ({ rating, userCourseId, onClickUpdateRating }) =>{
    const [ hover, setHover ] = useState(null);
    return (
        <div className="container-stars">
            {[...Array(5)].map((star,i) =>{
                const ratingValue = i + 1;
                return (
                    <label key={ratingValue} >
                        <input 
                            className="input-stars"
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => onClickUpdateRating(userCourseId,ratingValue)} 
                        />
                        <FaStar 
                            className="star" 
                            size={23}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    );
}

export default CourseStarRating;