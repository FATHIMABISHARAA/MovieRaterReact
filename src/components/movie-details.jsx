

import React, { useState, useEffect } from 'react';
import { FaRegStar,FaStar  } from "react-icons/fa";
export default function MovieDetails({movie}) {
   

    return (
        // <div>
        //     <h1>{movie && movie.title}</h1>
        //     <h1>{movie && movie.description}</h1>

        // </div>
        movie &&
            <div>
                <h1>{ movie.title}</h1>
                <p>{ movie.description}</p>
                <FaRegStar /><FaStar/>
            </div>
         
    );
}


