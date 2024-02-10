import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12" className="mb-4">
            <div>
              <div>
                <h4>BizConnect</h4>
              </div>
              <p className="mt-4 text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis, nobis.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12" className="mb-4">
            <div>
              <h4>Our Services</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Basic</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Intermediate</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Pro</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12" className="mb-4">
            <div className="quick-links">
              <h4 className="quick-links-title">Contact Us</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i className="ri-map-pin-line"></i></span>
                  <p className="text-black">Dhaka, Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i className="ri-phone-line"></i></span>
                  <p className="text-black">+880123456789</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i className="ri-mail-line"></i></span>
                  <p className="text-black">contact@bizconnect.bd</p> 
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="mt-4 text-center text-black">
              Copyright {year} Developed by BizConnect Inc. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;