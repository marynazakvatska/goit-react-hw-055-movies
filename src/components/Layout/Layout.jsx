import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { List, ListElement } from "./Layout.styled";

export const Layout = () => {
    return (
       <div>
         <header>
        <div>
            <List>
                <ListElement>
<NavLink to="/">Home</NavLink>
                </ListElement>
                <ListElement>
<NavLink to="/movies">Movies</NavLink>
                </ListElement>
                </List>
                 </div>
            </header>
            
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet /> 
                    </Suspense>
            </main>
       </div>
    )
}

