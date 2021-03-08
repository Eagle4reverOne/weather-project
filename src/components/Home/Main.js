import React from 'react'
import Home1 from './HomeParts/Home1';
import Home2 from './HomeParts/Home2';
import Home3 from './HomeParts/Home3';

function Main({information}) {
    return (
        <div>
            <Home1 information = {information}/>
            <Home2 information = {information}/>
            <Home3 list = {information.list}/>
        </div>
    )
}

export default Main
