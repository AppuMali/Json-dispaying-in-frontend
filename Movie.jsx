import React from 'react'

const Movie = (props) => {
    console.log(props);
  return (
    <div className='parentBlock'>
        <div className='mainBlock'>
            <img src={props.payload[0].src="Movie_photo"} alt="" />
            <h2>{props.payload[0].Directed_by}</h2>
            <h2>{props.payload[0].Produced_by}</h2>
            <h2>{props.payload[0].Actor}</h2>
            <h2>{props.payload[0].Actress}</h2>
            <h2>{props.payload[0].Music_by}</h2>
            <h2>{props.payload[0].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[1].src="Movie_photo"} alt="" />
            <h2>{props.payload[1].Directed_by}</h2>
            <h2>{props.payload[1].Produced_by}</h2>
            <h2>{props.payload[1].Actor}</h2>
            <h2>{props.payload[1].Actress}</h2>
            <h2>{props.payload[1].Music_by}</h2>
            <h2>{props.payload[1].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[2].src="Movie_photo"} alt="" />
            <h2>{props.payload[2].Directed_by}</h2>
            <h2>{props.payload[2].Produced_by}</h2>
            <h2>{props.payload[2].Actor}</h2>
            <h2>{props.payload[2].Actress}</h2>
            <h2>{props.payload[2].Music_by}</h2>
            <h2>{props.payload[2].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[3].src="Movie_photo"} alt="" />
            <h2>{props.payload[3].Directed_by}</h2>
            <h2>{props.payload[3].Produced_by}</h2>
            <h2>{props.payload[3].Actor}</h2>
            <h2>{props.payload[3].Actress}</h2>
            <h2>{props.payload[3].Music_by}</h2>
            <h2>{props.payload[3].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[4].src="Movie_photo"} alt="" />
            <h2>{props.payload[4].Directed_by}</h2>
            <h2>{props.payload[4].Produced_by}</h2>
            <h2>{props.payload[4].Actor}</h2>
            <h2>{props.payload[4].Actress}</h2>
            <h2>{props.payload[4].Music_by}</h2>
            <h2>{props.payload[4].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[5].src="Movie_photo"} alt="" />
            <h2>{props.payload[5].Directed_by}</h2>
            <h2>{props.payload[5].Produced_by}</h2>
            <h2>{props.payload[5].Actor}</h2>
            <h2>{props.payload[5].Actress}</h2>
            <h2>{props.payload[5].Music_by}</h2>
            <h2>{props.payload[5].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[6].src="Movie_photo"} alt="" />
            <h2>{props.payload[6].Directed_by}</h2>
            <h2>{props.payload[6].Produced_by}</h2>
            <h2>{props.payload[6].Actor}</h2>
            <h2>{props.payload[6].Actress}</h2>
            <h2>{props.payload[6].Music_by}</h2>
            <h2>{props.payload[6].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[7].src="Movie_photo"} alt="" />
            <h2>{props.payload[7].Directed_by}</h2>
            <h2>{props.payload[7].Produced_by}</h2>
            <h2>{props.payload[7].Actor}</h2>
            <h2>{props.payload[7].Actress}</h2>
            <h2>{props.payload[7].Music_by}</h2>
            <h2>{props.payload[7].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[8].src="Movie_photo"} alt="" />
            <h2>{props.payload[8].Directed_by}</h2>
            <h2>{props.payload[8].Produced_by}</h2>
            <h2>{props.payload[8].Actor}</h2>
            <h2>{props.payload[8].Actress}</h2>
            <h2>{props.payload[8].Music_by}</h2>
            <h2>{props.payload[8].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[9].src="Movie_photo"} alt="" />
            <h2>{props.payload[9].Directed_by}</h2>
            <h2>{props.payload[9].Produced_by}</h2>
            <h2>{props.payload[9].Actor}</h2>
            <h2>{props.payload[9].Actress}</h2>
            <h2>{props.payload[9].Music_by}</h2>
            <h2>{props.payload[9].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[10].src="Movie_photo"} alt="" />
            <h2>{props.payload[10].Directed_by}</h2>
            <h2>{props.payload[10].Produced_by}</h2>
            <h2>{props.payload[10].Actor}</h2>
            <h2>{props.payload[10].Actress}</h2>
            <h2>{props.payload[10].Music_by}</h2>
            <h2>{props.payload[10].Release_date}</h2>
        </div>


    </div>
  )
}

export default Movie