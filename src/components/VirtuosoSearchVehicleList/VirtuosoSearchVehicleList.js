import React, { useState, useRef, useCallback, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import { useSelector, useDispatch } from "react-redux";
// import { openWizardModal } from "./Redux/Actions/wizardModal";
import VirtuosoSearchRow from "./VirtuosoSearchRow";
export default function VirtuosoSearchVehicleList() {
  const filters = useSelector(state => state.searchFilters.searchFilters);
  const searchTotal = useSelector((state) => state.searchTotal.searchTotal);
  const [total, setTotal] = useState(searchTotal);
  const items = useRef([]);
  const virtuoso = useRef(null);
  const loading = useRef(false);
  // const isFilterClicked = (false);
  // const searchTotal = useSelector(state => state.searchTotal.searchTotal);

  // the setTimeout below simulates a network request.
  // In the real world, you can fetch data from a service.
  // the setTotal call will trigger a refresh for the list,
  // so make sure you call it last
  const loadMore = useCallback(() => {
    if (loading.current) {
      return;
    }
    loading.current = true;

    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((res) => res.json())
      .then(({ message: newItems }) => {
        for (let item of newItems) {
          items.current = [...items.current, item];
        }
        loading.current = false;
        setTotal(items.current.length);
        // setMoreItemsLoading(false);
        // setItems((allItems) => allItems.concat(newItems));
        console.log(items);
      });

    // setTimeout(() => {
    //   for (let index = total; index < total + total + 20; index++) {
    //     items.current = [...items.current, getUser(index)];
    //   }
    //   loading.current = false;
    //   setTotal(items.current.length);
    // }, 500);
  }, []);

  useEffect(() => {
    virtuoso.current.scrollToIndex({index: 0})
    if(loading.current == false){
      items.current = [];
      // setTotal(0);
      console.log("Okay false")
    }
    loadMore();
  }, [filters]);
  return (
    <div>
      <Virtuoso
        ref={virtuoso}
        style={{ width: "100%", height: "1000px" }}
        overscan={500}
        totalCount={total}
        item={(index) => <VirtuosoSearchRow index={index} item={items.current[index]}></VirtuosoSearchRow>}
        endReached={() => loadMore()}
        footer={() => {
          return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              Loading...
            </div>
          );
        }}
      />
    </div>
  );
}
