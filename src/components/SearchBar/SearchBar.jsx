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
                setResults(data.users);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [setResults]);

    const sortUsers = (sortBy) => {
        const sortedUsers = [...allUsers].sort((a, b) => {
            if (sortBy === "name") {
                return a.firstName.localeCompare(b.firstName);
            } else if (sortBy === "email") {
                return a.email.localeCompare(b.email);
            } else if (sortBy === "company") {
                return a.company.name.localeCompare(b.company.name);
            }
        });
        setResults(sortedUsers);
    };

    const handleChange = (value) => {
        setInput(value);
        const filteredUsers = allUsers.filter((user) => {
            return (
                user.firstName.toLowerCase().includes(value.toLowerCase()) ||
                user.lastName.toLowerCase().includes(value.toLowerCase())
            );
        });
        setResults(filteredUsers);
    };

    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        sortUsers(sortBy);
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
                            <select onChange={handleSortChange}>
                                <option value="">Sort By</option>
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