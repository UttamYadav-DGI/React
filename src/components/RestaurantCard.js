import { IMG_CDN } from "../utils/constant";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData;
  return (
    <div className="w-60 h-[400px] m-4 bg-gray-400 py-6 px-6 rounded-md hover:border border-gray-800">
      <img
        className="w-full h-auto items-center rounded-lg"
        src={IMG_CDN + cloudinaryImageId}
        alt={name}
      />
      <div className="items-center text-center">
        <h3 className="font-bold">{name}</h3>
        <p>{cuisines?.join(", ")}</p>
        <h4>Rating: {avgRating}</h4>
        <h4>Cost: {costForTwo}</h4>
        <h4>Delivery Time: {sla?.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

// HOC to promote RestaurantCard
export const Promotion = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-1 left-2 bg-yellow-300 text-sm px-2 rounded">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export { RestaurantCard };
