import ItemList from "./ItemList";
import {useState} from "react"
const RestaurantCategories=({data})=>{

    const [showItem,setShowItem]=useState(false)
    const handleClick=()=>(
        setShowItem(!showItem)
    )
    return (
        <div className=" justify-items-center  ">
         {/* header */}
            <div className="w-6/12 bg-gray-100 my-3 p-3 rounded-xl">

                <div className="flex justify-between  cursor-pointer"
                    onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length}) </span>
                <span>▼</span>
                </div>
                
                {/* accordina data */}
            { showItem && <ItemList
            key={data?.categoryId}
            data={data?.itemCards}/>}

               
            </div>

        
        
         </div>
    )
}
export default RestaurantCategories;