import React from "react";
import{userDispatch} from 'react-redux';

const user = (props) =>{
    const dispatch=userDispatch();
    return(
        <div key={props.user.id}>
            <img src={props.user.image} alt={props.user.firstName}/>
            <h1>{props.user.lastName} {props.user.firstName}</h1> 
            <button onClick={()=>dispatch()}>Detail of users</button> 
            <button onClick={()=>dispatch()}>Les listes de props</button> 
        </div>
    )
}
export default user;