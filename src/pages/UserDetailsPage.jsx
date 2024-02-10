import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        const userData = await res.json();
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <Col lg="12" md="6" sm="12">
      <Row sm="1" md="2" lg="3">
        <Card style={{ width: "30rem" }} className="mx-auto m-4">
          <img alt="User Avatar" src={user ? user.image : ""} />
          <CardBody>
            <CardTitle tag="h5">
              {user ? `${user.firstName} ${user.lastName}` : ""}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2">
              {user ? user.email : ""}
            </CardSubtitle>
            <CardText>
              <strong>Address:</strong>{" "}
              {user ? `${user.address.address}, ${user.address.city}` : ""}
            </CardText>
            <CardText>
              <strong>Company Name:</strong> {user ? user.company.name : ""}
            </CardText>
          </CardBody>
        </Card>
      </Row>
    </Col>
  );
};

export default UserDetailsPage;
