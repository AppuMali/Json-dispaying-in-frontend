import React from 'react'

const Movie = (props) => {
    console.log(props);
  return (
    <div className='mainParent'>
        <div className='heading'>SANDALWOOD MOVIES</div>
        <div className='parentBlock1'>
        <div className='mainBlock'>
            <img src={props.payload[0].Movie_photo} alt="" />
            <h1>{props.payload[0].Directed_by}</h1>
            <h2>{props.payload[0].Produced_by}</h2>
            <h2>{props.payload[0].Actor}</h2>
            <h2>{props.payload[0].Actress}</h2>
            <h2>{props.payload[0].Music_by}</h2>
            <h2>{props.payload[0].Release_date}</h2>
        </div>
        <div className='mainBlock'>
            <img src={props.payload[1].Movie_photo} alt="" />
            <h1>{props.payload[1].Directed_by}</h1>
            <h2>{props.payload[1].Produced_by}</h2>
            <h2>{props.payload[1].Actor}</h2>
            <h2>{props.payload[1].Actress}</h2>
            <h2>{props.payload[1].Music_by}</h2>
            <h2>{props.payload[1].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[2].Movie_photo} alt="" />
            <h1>{props.payload[2].Directed_by}</h1>
            <h2>{props.payload[2].Produced_by}</h2>
            <h2>{props.payload[2].Actor}</h2>
            <h2>{props.payload[2].Actress}</h2>
            <h2>{props.payload[2].Music_by}</h2>
            <h2>{props.payload[2].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[3].Movie_photo} alt="" />
            <h1>{props.payload[3].Directed_by}</h1>
            <h2>{props.payload[3].Produced_by}</h2>
            <h2>{props.payload[3].Actor}</h2>
            <h2>{props.payload[3].Actress}</h2>
            <h2>{props.payload[3].Music_by}</h2>
            <h2>{props.payload[3].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[4].Movie_photo} alt="" />
            <h1>{props.payload[4].Directed_by}</h1>
            <h2>{props.payload[4].Produced_by}</h2>
            <h2>{props.payload[4].Actor}</h2>
            <h2>{props.payload[4].Actress}</h2>
            <h2>{props.payload[4].Music_by}</h2>
            <h2>{props.payload[4].Release_date}</h2>
        </div>
    </div>   
    <div className='parentBlock2'><div className='mainBlock'>
    <img src={props.payload[5].Movie_photo} alt="" />
            <h1>{props.payload[5].Directed_by}</h1>
            <h2>{props.payload[5].Produced_by}</h2>
            <h2>{props.payload[5].Actor}</h2>
            <h2>{props.payload[5].Actress}</h2>
            <h2>{props.payload[5].Music_by}</h2>
            <h2>{props.payload[5].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[6].Movie_photo} alt="" />
            <h1>{props.payload[6].Directed_by}</h1>
            <h2>{props.payload[6].Produced_by}</h2>
            <h2>{props.payload[6].Actor}</h2>
            <h2>{props.payload[6].Actress}</h2>
            <h2>{props.payload[6].Music_by}</h2>
            <h2>{props.payload[6].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[7].Movie_photo} alt="" />
            <h1>{props.payload[7].Directed_by}</h1>
            <h2>{props.payload[7].Produced_by}</h2>
            <h2>{props.payload[7].Actor}</h2>
            <h2>{props.payload[7].Actress}</h2>
            <h2>{props.payload[7].Music_by}</h2>
            <h2>{props.payload[7].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[8].Movie_photo} alt="" />
            <h1>{props.payload[8].Directed_by}</h1>
            <h2>{props.payload[8].Produced_by}</h2>
            <h2>{props.payload[8].Actor}</h2>
            <h2>{props.payload[8].Actress}</h2>
            <h2>{props.payload[8].Music_by}</h2>
            <h2>{props.payload[8].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[9].Movie_photo} alt="" />
            <h1>{props.payload[9].Directed_by}</h1>
            <h2>{props.payload[9].Produced_by}</h2>
            <h2>{props.payload[9].Actor}</h2>
            <h2>{props.payload[9].Actress}</h2>
            <h2>{props.payload[9].Music_by}</h2>
            <h2>{props.payload[9].Release_date}</h2>
        </div>
    </div> 
        
    <div className='parentBlock3'>
    <div className='mainBlock'>
    <img src={props.payload[10].Movie_photo} alt="" />
            <h1>{props.payload[10].Directed_by}</h1>
            <h2>{props.payload[10].Produced_by}</h2>
            <h2>{props.payload[10].Actor}</h2>
            <h2>{props.payload[10].Actress}</h2>
            <h2>{props.payload[10].Music_by}</h2>
            <h2>{props.payload[10].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[11].Movie_photo} alt="" />
            <h1>{props.payload[11].Directed_by}</h1>
            <h2>{props.payload[11].Produced_by}</h2>
            <h2>{props.payload[11].Actor}</h2>
            <h2>{props.payload[11].Actress}</h2>
            <h2>{props.payload[11].Music_by}</h2>
            <h2>{props.payload[11].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[12].Movie_photo} alt="" />
            <h1>{props.payload[12].Directed_by}</h1>
            <h2>{props.payload[12].Produced_by}</h2>
            <h2>{props.payload[12].Actor}</h2>
            <h2>{props.payload[12].Actress}</h2>
            <h2>{props.payload[12].Music_by}</h2>
            <h2>{props.payload[12].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[13].Movie_photo} alt="" />
            <h1>{props.payload[13].Directed_by}</h1>
            <h2>{props.payload[13].Produced_by}</h2>
            <h2>{props.payload[13].Actor}</h2>
            <h2>{props.payload[13].Actress}</h2>
            <h2>{props.payload[13].Music_by}</h2>
            <h2>{props.payload[13].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[14].Movie_photo} alt="" />
            <h1>{props.payload[14].Directed_by}</h1>
            <h2>{props.payload[14].Produced_by}</h2>
            <h2>{props.payload[14].Actor}</h2>
            <h2>{props.payload[14].Actress}</h2>
            <h2>{props.payload[14].Music_by}</h2>
            <h2>{props.payload[14].Release_date}</h2>
        </div>    
    </div>    
    <div className='parentBlock4'>
    <div className='mainBlock'>
    <img src={props.payload[15].Movie_photo} alt="" />
            <h1>{props.payload[15].Directed_by}</h1>
            <h2>{props.payload[15].Produced_by}</h2>
            <h2>{props.payload[15].Actor}</h2>
            <h2>{props.payload[15].Actress}</h2>
            <h2>{props.payload[15].Music_by}</h2>
            <h2>{props.payload[15].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[16].Movie_photo} alt="" />
            <h1>{props.payload[16].Directed_by}</h1>
            <h2>{props.payload[16].Produced_by}</h2>
            <h2>{props.payload[16].Actor}</h2>
            <h2>{props.payload[16].Actress}</h2>
            <h2>{props.payload[16].Music_by}</h2>
            <h2>{props.payload[16].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[17].Movie_photo} alt="" />
            <h1>{props.payload[17].Directed_by}</h1>
            <h2>{props.payload[17].Produced_by}</h2>
            <h2>{props.payload[17].Actor}</h2>
            <h2>{props.payload[17].Actress}</h2>
            <h2>{props.payload[17].Music_by}</h2>
            <h2>{props.payload[17].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[18].Movie_photo} alt="" />
            <h1>{props.payload[18].Directed_by}</h1>
            <h2>{props.payload[18].Produced_by}</h2>
            <h2>{props.payload[18].Actor}</h2>
            <h2>{props.payload[18].Actress}</h2>
            <h2>{props.payload[18].Music_by}</h2>
            <h2>{props.payload[18].Release_date}</h2>
        </div>
        <div className='mainBlock'>
        <img src={props.payload[19].Movie_photo} alt="" />
            <h1>{props.payload[19].Directed_by}</h1>
            <h2>{props.payload[19].Produced_by}</h2>
            <h2>{props.payload[19].Actor}</h2>
            <h2>{props.payload[19].Actress}</h2>
            <h2>{props.payload[19].Music_by}</h2>
            <h2>{props.payload[19].Release_date}</h2>
        </div>
    </div>

</div>
  )
}

export default Movie