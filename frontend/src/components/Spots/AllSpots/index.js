import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../../store/spots";
import { NavLink } from "react-router-dom";

const AllSpots = () => {
    const dispatch = useDispatch();

    const allSpots = useSelector(state => state.spots.allSpots)

    console.log("IN SPOTS COMPONENT", allSpots)
    
    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    const spotsList = allSpots.map(spot => (
      <NavLink to={`/spots/${spot.id}`}>{spot.address}</NavLink>
    ))

    return (
        <div className="allSpots">
            {spotsList}
        </div>
    )

}

export default AllSpots;
