import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/OrchidCard.css';

export default function OrchidCard({orchid, onDetail}){
    return(
      
        <Card style={{ width: '18rem' }}>
      <Card.Img loading="lazy" variant="top" src={orchid.image} className="orchid-card-img" />
      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>
          Origin: {orchid.origin}
          Corlor: {orchid.color}
        </Card.Text>
        <Button variant="primary" onClick={()=>onDetail(orchid)}>Detail</Button>
      </Card.Body>
    </Card>
        
    );
}