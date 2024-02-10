import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./UserCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  return (
    <Helmet title={"Home"}>
      <section className="users-section">
        <Container>
          <Row>
            <SearchBar setResults={setResults}></SearchBar>
            <Col lg="12" className="text-center">
              <h2 className="users-section-title">Our Users</h2>
            </Col>
            <UserCard results={results}></UserCard>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
