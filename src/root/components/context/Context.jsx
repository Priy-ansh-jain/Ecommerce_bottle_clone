import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart).cart : [];
  });

  const [totalItems, setTotalItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart).totalItems : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cart, totalItems }));
  }, [cart, totalItems])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.image === product.image &&
          item.sellingPrice === product.sellingPrice
        // Add more conditions based on your actual item structure
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        const newItem = { ...product, quantity: 1 };
        setTotalItems((prevTotalItems) => prevTotalItems + 1); // Increment totalItems count
        return [...prevCart, newItem];
      }
    });
  };

  const deleteFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
    setTotalItems((prevTotalItems) => Math.max(0, prevTotalItems - 1)); // Decrement totalItems count
  };

  const increaseQuantity = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + 1,
      };
      return updatedCart;
    });
    setTotalItems((prevTotalItems) => prevTotalItems + 1);
  };

  const decreaseQuantity = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
      }
      return updatedCart;
    });
    setTotalItems((prevTotalItems) => Math.max(0, prevTotalItems - 1));
  };

  const clearCartData = () => {
    setCart([]);
    setTotalItems(0);
    localStorage.removeItem("cart");
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
