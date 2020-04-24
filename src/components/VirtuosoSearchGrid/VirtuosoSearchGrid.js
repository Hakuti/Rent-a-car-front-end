import React, { useState, useRef, useCallback, useEffect } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
// import { openWizardModal } from "./Redux/Actions/wizardModal";
import VirtuosoSearchRow from "../VirtuosoSearchVehicleList/VirtuosoSearchRow";
import { useWindowSize } from "../../Helpers/useWindowResize";

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const ItemWrapper = styled.div`
    flex: 1;
    text-align: center;
    font-size: 80%;
    padding: 2rem;
    box-shadow: 0 5px 6px -6px #777;
    background: white;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
`
  const ItemContainer = styled.div`
    // padding: 0.5rem;
    height: 300px;
    width: 25%;
    background: #f5f5f5;
    display: flex;
    flex: none;
    align-content: stretch;

    @media (max-width: 1024px) {
      width: 33%;

    }

    @media (max-width: 768px) {
      width: 50%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `;

export default function VirtuosoSearchVehicleGrid() {
  const filters = useSelector((state) => state.searchFilters.searchFilters);
  const searchTotal = useSelector((state) => state.searchTotal.searchTotal);
  const [total, setTotal] = useState(searchTotal);
  const items = useRef(["something", "ok"]);
  const virtuoso = useRef(null);
  const loading = useRef(false);
  const [initialLoad, setLoad] = useState(false);
  const [windowWidth, windowHeight] = useWindowSize();

  // const isFilterClicked = (false);
  // const searchTotal = useSelector(state => state.searchTotal.searchTotal);

  // the setTimeout below simulates a network request.
  // In the real world, you can fetch data from a service.
  // the setTotal call will trigger a refresh for the list,
  // so make sure you call it last
  
  const loadMore = useCallback(() => {
    // console.log("NO");
    if (loading.current) {
      return;
    }
    loading.current = true;

    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((res) => res.json())
      .then(({ message: newItems }) => {
        for (let item of newItems) {
          items.current = [...items.current, item];
        }
        loading.current = false;
        setTotal(items.current.length);
        setLoad(true);
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
    if(initialLoad == true){
      virtuoso.current.scrollToIndex({ index: 0 });
    }
    // if(searchTotal > 0){
    //   setTotal(0);
    // }
    console.log(total);
    if (loading.current == false) {
      items.current = [];
      // setTotal(0);
      console.log("Okay false");
    }
    loadMore();
  }, [filters]);
  return (
    <div>
      {initialLoad == true ?(
      <VirtuosoGrid
        ref={virtuoso}
        style={{ width: "100%", height: windowHeight }}
        overscan={200}
        totalCount={total}
        ItemContainer={ItemContainer}
        ListContainer={ListContainer}
        item={index => <ItemWrapper>Item {index}</ItemWrapper>}
        // item={(index) => <div>Hello {index}</div>}
        endReached={() => loadMore()}
        footer={() => {
          return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              Loading...
            </div>
          );
        }}
      />): (<div>Loading...</div>)}
    </div>
  );
}
