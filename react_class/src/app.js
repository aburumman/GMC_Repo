import React, { Component } from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    // State with person object and shows boolean
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate full‑stack developer who loves building web apps.',
        imgSrc: 'https://via.placeholder.com/150?text=Profile',
        profession: 'Software Engineer'
      },
      shows: false,
      // Optional: we could store the time in state to update the UI
      mountedTime: Date.now(),
      elapsedSeconds: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.interval = null; // to store interval ID
  }

  // Lifecycle: component mounted
  componentDidMount() {
    // Record mount time
    this.setState({ mountedTime: Date.now() });
    // Update elapsed time every second
    this.interval = setInterval(() => {
      this.setState({
        elapsedSeconds: Math.floor((Date.now() - this.state.mountedTime) / 1000)
      });
    }, 1000);
  }

  // Lifecycle: component will unmount – clean up interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle shows state
  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, elapsedSeconds } = this.state;

    return (
      <Container className="mt-5 text-center">
        <h1>Profile Toggle with Timer</h1>

        {/* Display time since mount */}
        <p className="lead">Time since component mounted: {elapsedSeconds} seconds</p>

        {/* Toggle button */}
        <Button variant="primary" onClick={this.toggleShow} className="mb-4">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </Button>

        {/* Conditionally render profile when shows is true */}
        {shows && (
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="p-4 shadow">
                <Image
                  src={person.imgSrc}
                  roundedCircle
                  fluid
                  style={{ width: '150px', margin: '0 auto', display: 'block' }}
                />
                <Card.Body>
                  <Card.Title as="h2">{person.fullName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{person.profession}</Card.Subtitle>
                  <Card.Text>{person.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default App;