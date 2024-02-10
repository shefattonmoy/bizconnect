import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fetchDataApi = (value) => {
    const results = allUsers.filter((user) => {
      return (
        value &&
        user &&
        ((user.firstName && user.firstName.toLowerCase().includes(value)) ||
        (user.lastName && user.lastName.toLowerCase().includes(value)))
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
      setResults(allUsers); 
    } else {
      fetchDataApi(value);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="9" md="6" sm="12">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="sort-widget">
              <select>
                <option>Sort By</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="company">Company Name</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchBar;
