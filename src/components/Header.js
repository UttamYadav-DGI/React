import {LOGO_CDN} from "../utils/constant";
const Header=()=>{
    return (
        <>
        <div className="header">
            <img className="img" src={LOGO_CDN}></img>
            <ul>
                <li>Home</li>
                <li>offers</li>
                <li>menu</li>
                <li>about Us</li>
            </ul>
            </div>
    </> 
    )
}
export default Header;