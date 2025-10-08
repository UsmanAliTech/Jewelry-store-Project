import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import "./Home.css";

const collections = [
  { title: "The Lumina Ring Collection", image: "/public/premium_photo-1681276169450-4504a2442173 (1).avif", link: "/shop/rings" },
  { title: "Ethereal Necklaces", image: "/public/premium_photo-1681276170281-cf50a487a1b7.avif", link: "/shop/necklaces" },
  { title: "New Arrivals: The Zodiac", image: "/public/premium_photo-1681276170092-446cd1b5b32d.avif", link: "/shop/new" },
];

const AnimatedHero = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 1000 }
  });

  return (
    <div className="hero-banner d-flex align-items-center justify-content-center text-center text-white">
      <Container>
        <animated.h1 style={props}  className="display-1 fw-light font mb-4">
          Timeless Elegance. Modern Craft.
        </animated.h1>
        <animated.p style={props} className="font lead mb-5">
          Discover the Jewellux Signature Collection.
        </animated.p>
        <animated.div style={props}>
          <Button variant="outline-light" size="lg" className="font ">
            Explore Now
          </Button>
        </animated.div>
      </Container>
    </div>
  );
};

const CollectionCard = ({ title, image, link }) => {
  return (
    <Col md={4} className="mb-4 font">
      <Card className="collection-card border-0 rounded-0 shadow-sm overflow-hidden" onClick={() => window.location.href = link}>
        <div className="card-img-wrapper">
          <Card.Img variant="top" src={image} className="font card-img-zoom" alt={title} />
        </div>
        <Card.Body className="text-center p-4">
          <Card.Title className="h5 fw-normal">{title}</Card.Title>
          <Button variant="link" className="text-dark p-0 mt-2 shop-link font">Shop Collection →</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = () => {
  return (
    <div className='Home-container'>

      <AnimatedHero />

      <Container className="my-5 py-5">
        <h2 className="text-center mb-5 display-4 fw-light font">Featured Collections</h2>
        <Row>
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </Row>
      </Container>

      <div className="about-snippet-block py-5 ">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="/public/download123.png"
                alt="Jewelry Craftsmanship"
                className="img-fluid"
              />
            </Col>
            <Col md={6} className="p-5">
              <h3 className="display-4 fw-light mb-4 font">The Art of Fine Jewelry</h3>
              <p className="lead text-white font">
                At Jewellux, every piece is a testament to meticulous craftsmanship and timeless design. We source the finest materials and employ expert artisans to create jewelry that isn't just worn, but cherished for generations.
              </p>
              <Button variant="dark" className="ms-5 mt-4 rounded-0 about-cta-btn">
                Our Story
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default Home;