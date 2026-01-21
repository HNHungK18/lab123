import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/OrchidModal.css';

export default function OrchidModal({ show, onClose, orchid }) {

  if (!orchid) return null;

  return (
    <div
      className="modal-show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={onclose}>
        <Modal.Header>
          <Modal.Title>{orchid.id} {orchid.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
          src={orchid.image}
          alt={orchid.name}
          className="orchid-modal-img"
        />
        <p>Rating: {renderStars(orchid.rating)} ({orchid.rating})</p>
        <p>Origin: {orchid.origin}</p>
        <p>Color: {orchid.color} </p>
        <p>Special: {''} {orchid.isSpecial ? 'Yes':'No'} </p>
        <p>Category: {orchid.category} </p>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} color="#ffc107" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" color="#ffc107" />);
  }

  while (stars.length < 5) {
    stars.push(
      <FaRegStar
        key={`empty-${stars.length}`}
        color="#e4e5e9"
      />
    );
  }

  return stars;
}