import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/UserForm.css";

const UserForm = ({ addUser }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        companyName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            city: "",
            companyName: "",
        });
    };

    return (
        <Container>
            <Row>
                <Col lg="12" md="6" sm="12">
                    <div>
                        <form onSubmit={handleSubmit} className="mt-4 user-form form-container">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                            />
                            <br />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                            />
                            <br />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <br />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                            />
                            <br />
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                            />
                            <br />
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Company Name"
                            />
                            <br />
                            <button type="submit">Add User</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default UserForm;
