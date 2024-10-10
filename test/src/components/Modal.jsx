
const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} className="modal-image" />
        <p>{item.description}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

