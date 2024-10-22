import React, { useState } from 'react'
import "./style/Todos.css"

const Todos = ({ todos }) => {
    const [completed, setCompleted] = useState(false)

    function handleClick(id){
        console.log(id)
        fetch(`http://localhost:3000/${id}`, {
            method : "patch",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({completed : "true"})
        })
    }

    return (
        <div className="todos">
            <div className="input-typeing">
                <h2>Todo Text</h2>
                <form action="http://localhost:3000/todos" method='post'>
                    <input type="text" placeholder='Enter Title' name='title'/>
                    <button>add todos</button>
                </form>
            </div>
            <div className="elems">
                {todos.map(elem => {
                    return <div key={elem._id} className="elem">
                        {elem.title}
                        <input onClick={()=>handleClick(elem._id)} type="checkbox"/>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Todos