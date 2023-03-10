import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la gema del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        descripcion: 'Recolectar la gema del alma',
        done: false,
    },
]



export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <div className="col-5">

                </div>
                
            </div> 

            
        </>
    ) 
}
