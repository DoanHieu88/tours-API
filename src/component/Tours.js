import React from 'react'
import Tour from './Tour'

export default function Tours({tours, removeTour}) {
    return (
        <div>
             <section>
                <div className="title">
                    <h2>our tours</h2>
                    <div className="underline"></div>
                </div>
                <div>
                   {tours.map((tour)=>{
                      return  <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
                   })}
                </div>
            </section>
        </div>
    )
}
