import React, {useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";
import { useWindowDimensions } from "../WindowDimensionsProvider";

import { useSelector, useDispatch } from "react-redux";

import RowComponent from './RowComponent';
 
const ListComponent = ({ items, moreItemsLoading, loadMore, hasNextPage, heightOfBlock }) => {
  const { height, width } = useWindowDimensions();
  // useEffect(() => {
  //   console.log("Effect");
  // }, [width]);
  // const times = useSelector(state => state.searchTimes.searchTimes);
  // const filters = useSelector(state => state.searchFilters.searchFilters);
  // const location = useSelector(state => state.searchLocation.searchLocation);
  // const dates = useSelector(state => state.searchCalendar.searchCalendar);
  // useEffect((
  //   ) => {
  //     // loadMore
  //     // initialLoad()
  //   }, [times]);
  const Row = ({ index, style }) => 
  {
    // console.log(style);
    // console.log(heightOfBlock);
    // console.log(style);
    // style.height = width/1.9
    // console.log(style);
    let objStyle = Object.assign({}, style);
    // console.log(objStyle)
    objStyle.height = width/1.3
    // console.log(objStyle)
    return(
    <RowComponent image={items[index]} num={index} style={objStyle} loading={index === items.length} heightOfBlock={heightOfBlock} />
  )};
  
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <InfiniteLoader
      isItemLoaded={index => index < items.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={height}
          width={"100%"}
          itemCount={itemCount}
          itemSize={width/1.1}
          // itemSize={heightOfBlock}
          className="list-container"
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </FixedSizeList>
      )}
  </InfiniteLoader>
  )
};

export default ListComponent;