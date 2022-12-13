import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailUser() {

  const Selecteduser = useSelector(state => state.user.Selecteduser);
  const user = useSelector(state => state.user.data).filter(item => item.name.common===Selecteduser);

  return (
    <div>
        {user.length!==0 && 
            <div>
                <img src={user[0].flags.png} alt="" />
                <h1>Population : {user[0].population}</h1>
            </div>
        }
    </div>
  )
}
