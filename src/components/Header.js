import { useState } from "react";
import {LOGO_CDN} from "../utils/constant";
const Header=()=>{
    let btnname="login"
    const [loginbtn,setloginbtn]=useState("login");
    
    return (
        <>
        <div className="header">
            <img className="img" src={LOGO_CDN}></img>
            <ul>
                <li>Home</li>
                <li>offers</li>
                <li>menu</li>
                <li>about Us</li>
                <button
                        onClick={
                            ()=>{
                                if(loginbtn=="login")
                                setloginbtn("logout")
                                else setloginbtn("login")
                            }
                        }
                >{loginbtn}</button>
            </ul>
            </div>
    </> 
    )
}
export default Header;