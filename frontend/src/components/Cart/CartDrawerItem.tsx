import { Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { IProduct } from "../../redux/api/products/types";
import { useAppDispatch } from "../../redux/store";
import { clearItemFromCart } from "../../redux/features/cartSlice";
import "./cart-drawer.styles.scss";
import addDecimal from "../../Helpers/addDecimal";

interface ICartDrawerItem {
  cartItem: IProduct;
}

const CartDrawerItem: FC<ICartDrawerItem> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const removeItemFromCart = (cartItem: IProduct) => {
    dispatch(clearItemFromCart(cartItem));
  };
  return (
    <Grid item container className="cart-drawer-bb" alignItems="center">
      <Grid item xs={4} sx={{ textAlign: "center" }}>
        <img
          src={`${import.meta.env.VITE_SERVER_ENDPOINT}/api/static/products/${
            cartItem.imageCover
          }`}
          alt={cartItem.name}
          style={{ objectFit: "contain", height: "4rem", width: "4rem" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6" sx={{ fontSize: "1.1rem" }} gutterBottom>
          {cartItem.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <strong style={{ display: "flex", alignItems: "center" }}>
            {cartItem.quantity} x ${addDecimal(cartItem.price)}
          </strong>
          <IconButton
            onClick={() => removeItemFromCart(cartItem)}
            sx={{ color: "#f70001", mr: 1 }}
          >
            <DeleteIcon />
          </IconButton>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartDrawerItem;
