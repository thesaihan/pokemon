import classNames from "classnames";
import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import styles from "../styles/Footer.module.scss";

export const Footer: React.FC = () => {
  const { cartItems, openCart, setOpenCart } = useContext(DataContext);
  return (
    <footer
      className={classNames("d-flex justify-content-center pb-4 pb-lg-5 pt-4", styles.Footer)}
    >
      {openCart ? (
        <button className="btn btn-danger" onClick={() => setOpenCart(false)}>
          <i className="bi bi-x-lg"></i>
        </button>
      ) : (
        <button
          className="btn btn-primary position-relative"
          onClick={() => cartItems && cartItems.length > 0 && setOpenCart(true)}
          disabled={!cartItems || cartItems.length === 0}
        >
          <i className="bi bi-cart me-2"></i>View Cart
          {cartItems && cartItems.length > 0 && (
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
            </span>
          )}
        </button>
      )}
    </footer>
  );
};
