import React,{useState} from 'react';

export default function Tour({tour,removeTour}) {
    const {id,name,price,info,image} = tour;
    const [readMore,setReadMore] = useState(false)
    
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
                </div>
                <p>{
                    readMore ? info : `${info.substring(0,200)}...` 
                }</p>
                <button onClick={()=>{
                    setReadMore(!readMore)
                }}>{readMore ? 'see less' : 'see more..'}</button>
                <button className="delete-btn" onClick={()=>{removeTour(id)}}>
                not interested
                </button>
            </footer>
        </article>
    )
}
