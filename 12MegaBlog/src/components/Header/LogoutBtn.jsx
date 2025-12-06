import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch();
    const sessionId = useSelector((state) => state.auth?.sessionId);

    const logoutHandler=()=>{
        authService.logout(sessionId).then(()=>{
            dispatch(logout());
        })
    }

    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler}>Logout</button>
    );
}

export default LogoutBtn;