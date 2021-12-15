import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Api} from './config/Api';
import  Tours from './component/Tours'
import Loading from './component/Loading';
import './index.css'

export default function App() {
    const [tours, setTours] = useState([]);
    const [load , setLoad] =useState(false)
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
            setLoad(true)
        }catch(err){
            alert(err);;
            setLoad(false)
        }
    }

    if(load){
        return(
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
    }else{
        return(
            <main>
                <Loading/>
            </main>
        )
    }

    
}
