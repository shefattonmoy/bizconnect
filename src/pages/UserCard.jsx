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

const UserCard = () => {
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
          {users.map((user) => {
            return (
              <CardGroup className="pt-4">
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
