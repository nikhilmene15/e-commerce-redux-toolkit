import React, { useEffect } from "react";
import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../store/productSlice";
import useFetch from "../hook/useFetch";

const url = "https://api.pujakaitem.com/api/products";

const Products = () => {
  const { products, loading, error } = useFetch(url);

  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length > 0) {
      dispatch(setAllProducts(products));
      console.log(products);
    }
  }, [products]);

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
