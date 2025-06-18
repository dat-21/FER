// File: components/FullValidationForm.js (Exercise 6)
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";

function FullValidationForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [touched, setTouched] = useState(false);

  const isNameValid = name.trim().length >= 3;
  const isGenderValid = gender !== "";
  const isCountryValid = country !== "";
  const isAgreeValid = agree;

  const isFormValid =
    isNameValid && isGenderValid && isCountryValid && isAgreeValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
  };

  return (
    <Card className="p-4 my-4 shadow-sm border rounded">
      <h4 className="mb-3">Exercise 6: Full Validation Form</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isValid={touched && isNameValid}
            isInvalid={touched && !isNameValid}
          />
          <Form.Control.Feedback type="invalid">
            Name must be at least 3 characters long.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <div>
            {["Male", "Female", "Other"].map((g) => (
              <Form.Check
                inline
                key={g}
                label={g}
                name="gender"
                type="radio"
                value={g}
                checked={gender === g}
                onChange={(e) => setGender(e.target.value)}
                isInvalid={touched && !isGenderValid}
              />
            ))}
          </div>
          {touched && !isGenderValid && (
            <Form.Text className="text-danger">
              Please select a gender.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            isValid={touched && isCountryValid}
            isInvalid={touched && !isCountryValid}
          >
            <option value="">Select Country</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please choose a country.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAgree">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            isInvalid={touched && !agree}
          />
          {touched && !agree && (
            <Form.Text className="text-danger">
              You must agree before submitting.
            </Form.Text>
          )}
        </Form.Group>

        <div className="form-submit-area">
          <Button variant="primary" type="submit" disabled={!isFormValid}>
            Submit
          </Button>
          {!isFormValid && touched && (
            <div className="form-error-message">
              Vui lòng hoàn tất đầy đủ thông tin trước khi gửi form.
            </div>
          )}
        </div>
      </Form>
    </Card>
  );
}

export default FullValidationForm;
