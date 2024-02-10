import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./UserCard";

const Home = () => {
  return <Helmet title={'Home'}>
    <section className="users-section">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="users-section-title">Our Users</h2>
          </Col>
          <UserCard></UserCard>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home;