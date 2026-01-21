import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function OrchidCard({orchid}){
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={orchid.image} />
      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>
          <p>Origin: {orchid.origin}</p>
          <p>Corlor: {orchid.color}</p>
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
        
    );
}