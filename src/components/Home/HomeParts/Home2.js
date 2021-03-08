import React from 'react'
import LineGraph from './LineGraph'

function Home2({information}) {
    return (
        <div>
            <h1
                style={{textAlign:'center',fontSize:'30px', padding: '10px', fontWeight: '100',color:'red'}}
            >Hourly forecast</h1>
            <LineGraph datas = {information.list}/>
        </div>
    )
}

export default Home2
