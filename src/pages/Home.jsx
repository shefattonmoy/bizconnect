import Helmet from "../components/Helmet/Helmet";
import UserDetails from "../pages/UserDetails";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return <Helmet title={'Home'}>
    <section className="users-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="users-section-title">Our Users</h2>
          </Col>
          <UserDetails></UserDetails>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home;