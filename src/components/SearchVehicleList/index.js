import React, { useState, useEffect } from "react";
import ListComponent from "./ListComponent";
import { useSelector, useDispatch } from "react-redux";
import { useWindowDimensions } from "../WindowDimensionsProvider";

const SearchVehicleList = () => {
  const [hasNextPage, setNextPage] = useState(true);
  const [moreItemsLoading, setMoreItemsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const times = useSelector(state => state.searchTimes);
  const [firstLoad, setLoad] = useState(true);
  const filters = useSelector(state => state.searchFilters.searchFilters);
  const { height, width } = useWindowDimensions();
  const heightRatio = width 

  // const location = useSelector(state => state.searchLocation.searchLocation);
  // const dates = useSelector(state => state.searchCalendar.searchCalendar);
  // const [time, setTime] = useState(times);
  // const [location, setLocation] = useState(locations);
  // const [date, setDate] = useState(dates);
  // const [filter, setFilter] = useState(filters);
  const loadMore = (...args) => {
    setMoreItemsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then(res => res.json())
      .then(({ message: newItems }) => {
        setMoreItemsLoading(false);
        setItems(allItems => allItems.concat(newItems));
        console.log(items);
      });
  };
  // const initialLoad = () => {
  //   setMoreItemsLoading(true);
  //   fetch("https://dog.ceo/api/breeds/image/random/10")
  //     .then(res => res.json())
  //     .then(({ message: newItems }) => {
  //       setMoreItemsLoading(false);
  //       setItems(allItems => {allItems = []; allItems.concat(newItems)});
  //       console.log(items);
  //     });
  // }

  useEffect(() => {
    console.log("Effect");
    // if(moreItemsLoading == false){
    //   console.log("Effect");
    // }
    // loadMore
    // initialLoad()
    if (moreItemsLoading == false) {
      setItems([]);
      console.log("In here");
      // setMoreItemsLoading(true);
      // setMoreItemsLoading(true);
      // fetch("https://dog.ceo/api/breeds/image/random/10")
      //   .then(res => res.json())
      //   .then(({ message: newItems }) => {
      //     setMoreItemsLoading(false);
      //     setItems(allItems => {allItems = []; allItems.concat(newItems)});
      //     console.log(items);
      //   });
    }
  }, [times, filters]);

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", width: width, flex: 1, background: "", height: "100%"}}>
        <ListComponent
          items={items}
          moreItemsLoading={moreItemsLoading}
          loadMore={loadMore}
          hasNextPage={hasNextPage}
          // heightOfBlock={(width/2)}
        />
      </div>
      {/* <div className="title">
        <h1>InfiniteLoader | react-window</h1>
      </div> */}
    </>
  );
};

export default SearchVehicleList;
