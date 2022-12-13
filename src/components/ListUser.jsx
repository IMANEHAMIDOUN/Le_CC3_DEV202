import React from 'react'
import { useSelector } from 'react-redux';

export default function Listuser() {

  const Selectedposts = useSelector(state => state.posts.selectedposts);
  const listUser = useSelector(state => state.user.data).filter(item => item.user===Selectedposts);

  return (
    <div>

        <h1>Liste des users</h1>
        {listUser.length!==0 && 
            listUser.map(item => <h2>{item.name}</h2>)
        }
    </div>
  )
}