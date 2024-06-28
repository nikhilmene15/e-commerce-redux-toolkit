import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector } from "react-redux";

function ProductList() {
  const gridView = useSelector((state) => state.product);
  // console.log(gridView);

  return <>{gridView.gridView ? <GridView /> : <ListView />}</>;
}

export default ProductList;
