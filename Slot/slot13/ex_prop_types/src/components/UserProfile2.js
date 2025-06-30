import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

// UserProfile2 Component
const UserProfile2 = ({ name, age, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: name,
    age: age,
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form before submitting
  const validateForm = () => {
    const newErrors = {};
    const age = parseInt(formData.age, 10);
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.age) {
      newErrors.age = "Age cannot be empty!";
    } else if (isNaN(age)) {
      newErrors.age = "Age must be a valid number!";
    } else if (age < 18 || age > 100) {
      newErrors.age = "Age must be between 18 and 100!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>User Information</h3>
      <Form onSubmit={handleSubmit}>
        {/* Name field */}
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Age field */}
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

// PropTypes for UserProfile2
UserProfile2.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSubmit: PropTypes.func.isRequired, // onSubmit function to handle form submission
};

export default UserProfile2;
