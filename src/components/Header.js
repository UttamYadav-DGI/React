import { useState } from "react";
import {LOGO_CDN} from "../utils/constant";
import {Link} from "react-router";
import AboutClass from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
const Header=()=>{
    const [loginbtn,setloginbtn]=useState("login");
    const status=useOnlineStatus();
    return (
        <>
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <img className="w-25 " src={LOGO_CDN}></img>
            <ul className="flex items-center px-3">
                <li>onlineStatus:{status ? "✅":" 🔴"}</li>
                
                <li className="px-4"> <Link to='/'>Home</Link></li>
                <li className="px-4"> <Link to='/about'>about Us</Link></li>
                <li className="px-4">  <Link to='/contact'>Contact Us</Link></li>
                <li className="px-4"><Link to='/Grocery'>Grocery</Link></li>
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