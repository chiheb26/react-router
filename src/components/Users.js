import React from 'react'
import {NavLink,Outlet,useSearchParams} from 'react-router-dom'
export const Users = () => {
    
    
    const  [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        <nav>
    <h2><NavLink to='1' >User 1</NavLink></h2>
    <h2><NavLink to='2' >User 2</NavLink></h2>
    <h2><NavLink to='3' >User 3</NavLink></h2>
    </nav>
    <Outlet />
    <div>
        <button onClick={()=>setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
    </div>
        {
            showActiveUsers?<h2>Showing active users</h2> : <h2>Showing all users</h2>
        }
    </div>
    )
}
