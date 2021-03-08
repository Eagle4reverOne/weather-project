import React from 'react'
import { AreaChart } from 'react-chartkick'
import 'chart.js'

function LineGraph({datas}) {
    const keys = []
    const values = []

    const keyCreator = () => {
        for(let i = 0; i <datas.length; i++){
            keys.push(`${datas[i].dt_txt}`)
        }
        return keys
    }
    const valuCreator = () => {
        for(let i = 0; i <datas.length; i++){
            values.push(Math.floor(datas[i ].main.temp-273.15))
        }
        return values
    }
    
    const createData = ()  => {
        keyCreator()
        valuCreator()
        const object = Object.assign(...keys.map((key,index) => ({[key]:values[index]})))
        return (object)
    }
    
    const dateInformation = datas && createData()
    return (
        <div>
            <AreaChart
                xtitle="Days" ytitle="Temperature in C"
                data ={dateInformation}
                curve={false}
                legend={true}
                library={{backgroundColor: "#eee"}}
            />
        </div>
    )
}

export default LineGraph
