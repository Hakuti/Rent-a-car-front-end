import React from "react";
import InfiniteLoader from "react-window-infinite-loader";
// import { useWindowDimensions } from "../../WindowDimensionsProvider";
import {useWindowSize} from "../../../Helpers/useWindowResize";
import { VariableSizeList as List } from "react-window";
import Row from "../Row/Row";

export const ListContext = React.createContext({});
export default function ListView({
  items,
  moreItemsLoading,
  loadMore,
  hasNextPage
}) {
//   const { height, width } = useWindowDimensions(); 
  const [width, height] = useWindowSize();
  const sizeMap = React.useRef({});
  const setSize = React.useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
  }, []);
  const getSize = React.useCallback(index => sizeMap.current[index] || 50, []);
  const itemCount = hasNextPage ? items.length + 1 : items.length;
  return (
    <ListContext.Provider value={{ setSize, width, height }}>
      {/* <InfiniteLoader
        isItemLoaded={index => index < items.length}
        itemCount={itemCount}
        loadMoreItems={loadMore}
      >
           {({ onItemsRendered, ref }) => ( */}
          <List
            height={height}
            itemCount={itemCount}
            itemSize={getSize}
            width="100%"
            // onItemsRendered={onItemsRendered}
            // ref={ref}
          >
              {({index, style}) => (
                  <div style={style}>
                      <Row index={index}></Row>
                  </div>
              )}
          </List>)
          {/* } */}
      {/* </InfiniteLoader> */}
    </ListContext.Provider>
  );
}
