import {useState,useEffect} from "react"
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    console.log("res",resInfo)
// const {resId} =useParams();
// console.log(resId);

// const [resMenu,setResMenu]=useState([]);
// useEffect(()=>{
//     FetchRestaurantMenu();
// },[])

//     const FetchRestaurantMenu=async()=>{
//         const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4743879&lng=77.50399039999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
    
//         const jsonData= await data.json();
//         console.log(jsonData);
//         const restaurantMenu=jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards|| [];
        
//         console.log(restaurantMenu);
//         setResMenu(restaurantMenu);

//         // setResMenu(restaurantMenu);
//         // setResMenu(jsonData);
//         // console.log("update data is",setResMenu)
//     }
    const status=useOnlineStatus();
    if(status===false) return <h2>May be you are offline!! please connect internet to start again""</h2>
  if (!resInfo) return <h1>Loading...</h1>;
    

     const restaurantMenu=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards|| [];
     console.log("resmenu",restaurantMenu)
    
    return(
        <div>
            {
            restaurantMenu.map((items,key)=>(
                    <ul key={items.card.info.id}>
                        <h1>{items.card.info.name}</h1>
                        <li>{items.card.info.name}</li>
                        <li>{items.card.info.description}</li>
                        <li></li>
                    </ul>
                ))}
        </div>
    )
}
export default RestaurantMenu;