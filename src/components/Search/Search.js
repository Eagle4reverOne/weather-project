import React, {useState} from 'react'

function Search({inputHandler}) {
    const [nameOfCity, setNameOfCity] = useState('')

    const submitted = e => {
        e.preventDefault()
        inputHandler(nameOfCity)
        setNameOfCity('')
    }


    return (
        <div className='ui segment'>
            <form className="ui form"  onSubmit={submitted}>
                <div className="field" style={{display:'flex'}}>
                    <input 
                        type="text"
                        placeholder='Search city'
                        value={nameOfCity}
                        onChange={e => setNameOfCity(e.target.value)}
                    />
                    <button className='ui button' type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search
