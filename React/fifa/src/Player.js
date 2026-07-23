import React from 'react';
import { Card } from 'react-bootstrap';

// Inline style object for the card
const cardStyle = {
  width: '18rem',
  margin: '1rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  cursor: 'pointer',
};

const Player = (props) => {
  // Destructure all attributes
  const { name, team, nationality, jerseyNumber, age, imageUrl } = props;

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey #:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props for fallback values
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/150?text=No+Image'
};

export default Player;