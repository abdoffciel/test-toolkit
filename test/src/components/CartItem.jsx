import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeItem } from '../features/cartSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from './Modal'; // Import the Modal component

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRemoveFromCart = () => {
    dispatch(removeItem(item));
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
        <button onClick={handleOpenModal}>View Details</button> {/* Button to open modal */}
      </div>
      <button className="cart-item-remove" onClick={handleRemoveFromCart}>
        <AiOutlineDelete /> Remove
      </button>

      {/* Modal for displaying product details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={item} />
    </div>
  );
};

export default CartItem;
