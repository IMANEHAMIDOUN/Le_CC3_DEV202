import React from "react";
import {Routes ,Route} from 'react-router-dom';
import Listuser from "./ListUser";
import DetailUser from "./DetailUser";
import Listposts from "./ListPosts";
export default function Acceuil(){
    return(
        <div>
            <div className="HEAD">Gestion des posts</div>
            <Routes>
                <Route exact path ="/" element={<Listuser/>}/>
                <Route exact path ="/" element={<DetailUser/>}/>
                <Route exact path ="/" element={<Listposts/>}/>
            </Routes>
        </div>
    )
}
