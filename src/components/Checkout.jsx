import React from "react";
import { useState } from "react";
function Checkout() {
    const [itemData, setItemData] = useState([]); // store the all items data 
    const [quantity, setQuantity] = useState(1); // store quant of all 
    const [isToyData, setIsToyData] = useState(true); // to make switch of items
    // handle + / - button
    const increase = () => {
      setQuantity(quantity + 1);
    };
    const decrease = () => {
      if (quantity > 0) setQuantity(quantity - 1);
    };
    // additem in array 
    const addItem = () => {
      const toyData = { // toy object
        ItemName: "Toy",
        Price: 100,
      };
      const BookData = { // book object
        ItemName: "Book",
        Price: 200,
      };
      // item adda according to switch
      if (isToyData) {
        setItemData([...itemData, toyData]);
        setIsToyData(false);
      } else {
        setItemData([...itemData, BookData]);
        setIsToyData(true);
      }
    };
  return (
    <div>
      <h1>Item page</h1>
      <h2>
        Toy <button onClick={addItem}> ADD </button>
      </h2>
      <h2>
        Book <button onClick={addItem}> ADD </button>
      </h2>
      <h1>Your Cart</h1>
      <table>
        <tr>
          <th>item</th>
          <th>quantity</th>
          <th>Price</th>
        </tr>
        {itemData.map((item) => {
          return (
            <tr>
              <td>{item.ItemName}</td>
              <td>
                <button onClick={increase}> + </button>
                <span> {quantity} </span>
                <button onClick={decrease}> - </button>
              </td>
              <td>{quantity * item.Price}/-</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Checkout;
