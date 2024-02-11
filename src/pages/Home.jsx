import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./UserCard";
import SearchBar from "../components/SearchBar/SearchBar";
import UserForm from "../components/UserForm/UserForm";

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

  const addUser = (newUser) => {
    setResults((prevUsers) => [...prevUsers, newUser]);
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
            <Col lg="12" className="text-center mt-4">
              <h2 className="users-section-title">Add New User</h2>
              <UserForm addUser={addUser}></UserForm>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
