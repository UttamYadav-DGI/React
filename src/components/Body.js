import { useState, useEffect } from "react";
import resObj from "../utils/mockData";
import {RestaurantCard,Promotion} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useParams,Link } from "react-router";
import { Promotion } from "./RestaurantCard";


const Body = () => {
  const {resId}=useParams;
console.log(resId);
  const [resData, setResData] = useState([]); // Initial state with mockData
  const [DummyData, setDummyData] = useState([]); // Initial state with mockData

  const [searchText,setSearchText]=useState("");

  const RestaurantCardPromoted=Promotion(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const djson = await data.json();
    // console.log(djson);
    const restaurants = djson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log(restaurants) 
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
     <div className="flex items-center justify-center my-2">
            <input type="text" placeholder="Search here" className="w-200 py-3 bg-gray-200 border border-gray-200 px-5 rounded-l-lg hover:border-green-800" value={searchText} 
              onChange={
              (e)=>{setSearchText(e.target.value);}
                }
            />
            <button className="bg-amber-300 py-3 rounded-r-lg"
              onClick={()=>{
                const filterCards=  resData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
             setDummyData(filterCards)  
              }}
            >Search</button>
      </div>
         
        {/* </div> filter finish here */}

        <div className="mx-20 flex flex-wrap">
          {DummyData.map((restaurantObj) => (
            <Link 
            to={`/restaurantMenu/${restaurantObj.info.id}`}
            key={restaurantObj.info.id}
             >
            {restaurantObj.info.isOpen ? (<RestaurantCardPromoted resData={restaurantObj.info}/>):
          (<RestaurantCard
            resData={restaurantObj.info}
          />
          )}
          </Link>
          
          ))}
        </div>
        
</>
    
  );
};

export default Body;
