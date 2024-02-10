import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardGroup,
} from "reactstrap";

const UserCard = ({results}) => {
  const [users, setUsers] = useState([]);

  const fetchApiData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      <Col lg="12" md="6" sm="12">
        <Row sm="1" md="2" lg="3">
          {results.map((user) => {
            return (
              <CardGroup key={user.id}className="pt-4">
                <Card key={user.id}>
                  <CardImg
                    alt="Card image cap"
                    src={user.image}
                    top
                    width="300px"
                    height="300px"
                    className="mt-3"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      <Link to={`/users/${user.id}`}  target="_blank">
                        {user.firstName} {user.lastName}
                      </Link>
                    </CardTitle>
                    <CardSubtitle className="mb-2" tag="h6">
                      {user.email}
                    </CardSubtitle>
                    <CardText>
                      <strong>Address:</strong> {user.address.address},{" "}
                      {user.address.city}
                      <br />
                      <strong>Company:</strong> {user.company.name}
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            );
          })}
        </Row>
      </Col>
    </>
  );
};

export default UserCard;

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "reactstrap";
// import "../../styles/SearchBar.css";

// const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");
//   const [allUsers, setAllUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setAllUsers(data.users);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const fetchDataApi = (value, sortBy) => {
//     const filteredUsers = allUsers.filter((user) => {
//       return (
//         value &&
//         user &&
//         ((user.firstName && user.firstName.toLowerCase().includes(value)) ||
//           (user.lastName && user.lastName.toLowerCase().includes(value)))
//       );
//     });

//     const sortedUsers = filteredUsers.sort((a, b) => {
//       if (sortBy === "name") {
//         return a.firstName.localeCompare(b.firstName);
//       } else if (sortBy === "email") {
//         return a.email.localeCompare(b.email);
//       } else if (sortBy === "company") {
//         return a.company.name.localeCompare(b.company.name);
//       }
//     });

//     setResults(sortedUsers);
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     if (value.trim() === "") {
//       setResults(allUsers); // Reset results to show all users when input is empty
//     } else {
//       fetchDataApi(value, "name"); // Default sort by name
//     }
//   };

//   const handleSortChange = (e) => {
//     const sortBy = e.target.value;
//     fetchDataApi(input, sortBy);
//   };

//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="9" md="6" sm="12">
//             <div className="search-bar">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={input}
//                 onChange={(e) => handleChange(e.target.value)}
//               />
//               <span>
//                 <i className="ri-search-line"></i>
//               </span>
//             </div>
//           </Col>
//           <Col lg="3" md="6" sm="12">
//             <div className="sort-widget">
//               <select onChange={handleSortChange}>
//                 <option value="name">Sort By Name</option>
//                 <option value="email">Sort By Email</option>
//                 <option value="company">Sort By Company Name</option>
//               </select>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default SearchBar;
