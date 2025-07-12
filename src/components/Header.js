import { useState } from "react";
import {LOGO_CDN} from "../utils/constant";
import {Link} from "react-router";
import AboutClass from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
const Header=()=>{
    let btnname="login"
    const [loginbtn,setloginbtn]=useState("login");
    const status=useOnlineStatus();
    return (
        <>
        <div className="header">
            <img className="img" src={LOGO_CDN}></img>
            <ul>
                <li>
                    
                    onlineStatus:{status ? "✅":" 🔴"}
                </li>
                <li>
                    <Link to='/'>Home</Link>

                </li>
                <li> 
                    <Link to='/about'>about Us</Link>
                </li>
                <li> 
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li> 
                    <Link to='/Grocery'>Grocery</Link>
                </li>
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