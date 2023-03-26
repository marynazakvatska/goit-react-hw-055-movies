import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
       <div>
         <header>
        <div>
            <ul>
                <li>
<NavLink to="/">Home</NavLink>
                </li>
                <li>
<NavLink to="/movies">Movies</NavLink>
                </li>
                </ul>
                 </div>
                </header>
            <main>
               <Outlet /> 
            </main>
       </div>
    )
}

