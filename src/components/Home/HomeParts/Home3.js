import React from 'react'
import style from './Home3.module.css'

function Home3({list}) {


    
    const temperatureRender= () => {
        return(
            <div className={style.lists}>
                {
                    list.map((info, index) => {
                        return(
                            <div key={index} className={style.list}>
                                <div className='bigger'>
                                    <h4>{info.dt_txt}</h4>
                                </div>
                                <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="icon"/>
                                <h5>{Math.floor(info.main.temp_min -273)} / {Math.floor(info.main.feels_like -273)}<sup>°</sup>C</h5>

                                <h6 className={style.wind}>{info.weather[0].description}</h6>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div>
            <h1 style={{textAlign:'center',fontSize:'30px', padding: '10px', fontWeight: '100', color:'red'}}>5-day forecast</h1>
            <div className='flex'>
                
                    {
                        list !== undefined && temperatureRender()
                    }   
                
            </div>
        </div>
    )
}

export default Home3
