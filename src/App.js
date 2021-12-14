import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Api} from './config/Api';
import  Tours from './component/Tours'
import './index.css'

export default function App() {
    const [tours, setTours] = useState([]);
    const removeTour = (id) =>{
       const newTours =  tours.filter((tour)=> tour.id !== id);
        setTours(newTours)
    }

    useEffect(() => {
      takeData()
    },[]);

    const takeData = async ()=>{
        try{
            const tours = await axios.get(Api)
            setTours(tours.data)
        }catch(err){
            alert(err)
        }
    }


    return (
        <>
            {(tours.length > 0) ? ( 
                <main>
                     <Tours tours={tours}  removeTour={removeTour}/>
                </main>
            ) : (
                <main>
                    <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={takeData}>
                        refresh
                    </button>
                    </div>
                 </main>
            )}
        </>
       
    )
  
    
}
