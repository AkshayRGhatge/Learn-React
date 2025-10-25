import { NavLink } from 'react-router-dom';

export default function Header(){

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                         <NavLink to="/about">
                             About
                        </NavLink> 
                    </li>
                     <li>
                          <NavLink to="/contact">
                             Contact
                        </NavLink> 
                    </li>
                     <li>
                          <NavLink to="/user">
                             User
                        </NavLink> 
                    </li>
                     <li>
                          <NavLink to="/github">
                             Github
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        </>
    )
}