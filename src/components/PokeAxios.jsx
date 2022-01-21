import React, { useState } from 'react'
import axios from 'axios';

const PokeAxios = () => {
    //create state variable to store array of pocket monsters
    let [listOfPokes, setListOfPokes] = useState([])


    const getPoke = () => {
        console.log("succesfully clicked")
        //api end point
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                console.log("here are the pokemon", response.data.results);
                setListOfPokes(response.data.results)
                //until promise is fufilled, this will print
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Hello from Axios component</h2>
            <button className="btn btn-warning" onClick={getPoke}>Sit ubo, sit!</button>
            {/* {JSON.stringify(listOfPokes)} */}
            <table>
                <thead>
                    <tr>
                        <th>Name: </th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPokes.map((pokeObj, i) => {
                        return (
                    <tr key = {i}>
                        <td>{pokeObj.name} </td>
                    </tr>
                        )
                    })}



                </tbody>
            </table>
        </div>
    )
}

export default PokeAxios
