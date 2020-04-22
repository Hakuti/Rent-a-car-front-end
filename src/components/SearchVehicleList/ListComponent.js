import React, { useEffect, useRef } from "react";
import { VariableSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { useWindowDimensions } from "../WindowDimensionsProvider";

import { useSelector, useDispatch } from "react-redux";

import RowComponent from "./RowComponent";
export const ListContext = React.createContext({});
const ListComponent = ({
  items,
  moreItemsLoading,
  loadMore,
  hasNextPage,
  heightOfBlock
}) => {
  const { height, width } = useWindowDimensions();
  const sizeMap = React.useRef({});

  const setSize = React.useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    console.log(sizeMap.current[0]);
    // console.log(sizeMap.current);
  }, []);
  const getSize = React.useCallback((index) => {
    console.log(index);
    console.log(sizeMap.current);
    console.log(sizeMap);
    console.log(sizeMap.current[0]);
    console.log(sizeMap.current[index]);
    return sizeMap.current[0] || 50
  }
    , []);
  // console.log(getSize)
  let aspectRatio = 950 / 1400;
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
  const Row = ({ index, style }) => {
    // console.log(style);
    // console.log(heightOfBlock);
    // console.log(style);
    // style.height = width/1.9
    // console.log(style);
    let objStyle = Object.assign({}, style);
    // objStyle.paddingBottom = "10px";
    // console.log(objStyle)
    // objStyle.height = width/1.3
    // objStyle.backgroundColor = "red"
    // console.log(objStyle)
    return (
      <RowComponent
        image={items[index]}
        num={index}
        style={objStyle}
        loading={index === items.length}
        heightOfBlock={heightOfBlock}
      />
    );
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <InfiniteLoader
      isItemLoaded={index => index < items.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <ListContext.Provider value={{setSize}}>
          <List
            height={height}
            width={"100%"}
            itemCount={itemCount}
            // itemSize={width/1.3}
            //This is the height of a row
            itemSize={getSize}
            // itemSize={heightOfBlock}
            className="list-container"
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {Row}
          </List>
        </ListContext.Provider>
      )}
    </InfiniteLoader>
  );
};

export default ListComponent;
