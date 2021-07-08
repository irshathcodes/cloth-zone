import { MdDelete } from "react-icons/md";
import { useMyContextApi } from "../contextApi";
import notification from "../Notifications/notification";

const CartItems = ({ id, name, media, price, quantity, line_total }) => {
  const { handleUpdateCart, handleRemoveCart } = useMyContextApi();

  return (
    <>
      <div className="cartItems-container">
        <div className="cartImage-container item1">
          <img src={media.source} className="cartImage" alt={name} />
          <div className="item-name">{name}</div>
        </div>
        <p className="grid-item item2">{price.formatted_with_symbol}</p>
        <p className="grid-item item3">
          <button
            className="btn"
            onClick={() => {
              handleUpdateCart(id, quantity - 1);
              notification("warning", "You've Decreased Quantity", name);
            }}
          >
            -
          </button>
          {quantity}
          <button
            className="btn"
            onClick={() => {
              handleUpdateCart(id, quantity + 1);
              notification("success", "You've Increased Quantity", name);
            }}
          >
            +
          </button>
        </p>
        <p className="grid-item item4">{line_total.formatted_with_symbol}</p>
        <span className="delete-icon item5">
          <MdDelete
            onClick={() => {
              handleRemoveCart(id);
              notification("danger", "Removed from the cart", name);
            }}
          />
        </span>
      </div>
    </>
  );
};

export default CartItems;
