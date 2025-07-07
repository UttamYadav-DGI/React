import { useState,useEffect } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";



const Body = () => {
  const [resData, setResData] = useState(resObj); // resData is  state variable, setResData is  upadation  state after updation it's re-remder with virtual dom


   useEffect(()=>{fetchData();},[]);



    const fetchData=async ()=>{
        
            const data=await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const djson=await data.json();
            console.log(djson)
            // setResData(djson?.data?.cards);
            }

  return (
    <>
      <div className="filter-Btn">
        <button
          onClick={() => {
            const filterRating = resObj.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResData(filterRating);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="Bodyy">
        {/* ✅ Use filtered data here */}
        {resData.map((restaurantObj) => ( //resData is use instead of resObj because it's a after updation it's manipulate on UI
          <RestaurantCard
            key={restaurantObj.info.id}
            resData={restaurantObj.info}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
