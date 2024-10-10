
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addItem } from '../features/cartSlice'; // Import your addItem action
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'; // Import icons


const ConfirmModal = ({ meal, quantity, onClose }) => {
  const dispatch = useDispatch(); // Initialize dispatch

  const handleConfirm = () => {
    // Dispatch the addItem action with meal and quantity
    dispatch(addItem({ ...meal, quantity }));
    onClose(); // Close the modal after adding to cart
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Confirm Add to Cart</h3>
        <p>Are you sure you want to add {quantity} x {meal.title} to your cart?</p>
        <div className="modal-buttons">
          <button className="modal-cancel-btn" onClick={onClose}>
            <AiOutlineClose /> Cancel
          </button>
          <button className="modal-confirm-btn" onClick={handleConfirm}>
            <AiOutlineCheck /> Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
