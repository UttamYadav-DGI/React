import { useState, useEffect } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resData, setResData] = useState([]); // Initial state with mockData
  const [DummyData, setDummyData] = useState([]); // Initial state with mockData

  const [searchText,setSearchText]=useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const djson = await data.json();
    console.log(djson);
    const restaurants = djson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(restaurants) 
    setResData(restaurants || []);
    setDummyData(restaurants)
  };

  //conditional rendering
  // if(resData.length===0){ // shimmer UI it's work on the the render and stop after re-render
  //       return(
  //         <>
  //         <Shimmer/>
  //         </>
  //       )
  //   }
      
//better approach is to show both shimmer and actual , so we use a ternary condional
  return resData.length===0 ? <Shimmer/> : (
    <> 
      <div className="Bodyy">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} 
            onChange={
              (e)=>{setSearchText(e.target.value);}
            }
            />
            <button
            onClick={()=>{
            const filterCards=  resData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log("dafilterCards,",filterCards)
          setDummyData(filterCards)  
          }}
            
            >Search</button>

          </div>
        </div>
        <div className="Bodyy">
          {DummyData.map((restaurantObj) => (
          <RestaurantCard
            key={restaurantObj.info.id}
            resData={restaurantObj.info}
          />
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Body;
