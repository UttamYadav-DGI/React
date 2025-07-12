import {IMG_CDN} from "../utils/constant";
import { Link } from "react-router";


const RestaurantCard=(props)=>{
    const {resData}=props;
    console.log(props);
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime}=resData
    return (
        <div className="body">
        <img className="body-img" src={IMG_CDN+cloudinaryImageId} ></img>
             
            <div className="card-details">
            <h3>{name}</h3>
            <p>{cuisines.join(',')}</p>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
        </div>
       
    )
}
export default RestaurantCard;