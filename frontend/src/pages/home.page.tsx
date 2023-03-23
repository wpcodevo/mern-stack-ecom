import { FC } from "react";
import { Container, Grid } from "@mui/material";
import { useGetProductsQuery } from "../redux/api/products/productsApi";
import ProductItem from "../components/ProductItem/ProductItem";
import ProductItemSkeleton from "../components/ProductItem/ProductItemSkeleton";
import Message from "../components/Message";

const HomePage: FC = () => {
  const { isLoading, isFetching, data: products } = useGetProductsQuery();

  return (
    <Container maxWidth="xl" sx={{ my: "2rem" }}>
      <Grid container spacing={4}>
        {isLoading || isFetching ? (
          Array.from(new Array(6).keys()).map((_, i) => (
            <ProductItemSkeleton key={i} />
          ))
        ) : products?.length === 0 ? (
          <Message type="info" sx={{ width: "80%" }} title="Info">
            No Products Found
          </Message>
        ) : (
          products?.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
