// Navbar.js

import React, { useState } from "react";
import styles from "./component1.module.css";
import Modal from "react-modal";

const Component1 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({
    heading: "",
    title: "",
    price: "",
    description: "",
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleAddProduct = () => {
    // Implement your logic to add the product
    // You can use the productDetails state to get the entered values
    console.log("Product Details:", productDetails);
    closeModal();
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>QShop</div>
        <div className={styles.buttons}>
          <button onClick={openModal}>Sort By Price</button>
          <button onClick={openModal}>Add Product</button>
        </div>
      </div>

      {/* Modal for adding a product */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Product Modal"
      >
        <h2>Add Product</h2>
        <div>
          <label>Heading:</label>
          <input
            type="text"
            name="heading"
            value={productDetails.heading}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={productDetails.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={productDetails.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productDetails.description}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </>
  );
};

export default Component1;
