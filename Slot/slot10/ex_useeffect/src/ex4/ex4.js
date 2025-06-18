// File: components/ValidatedInput.js (Exercise 4)
import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";

const validateInput = (value) => value.length >= 5;

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput);
    setErrorMessage(isValidInput ? "" : "Giá trị phải có ít nhất 5 ký tự!");
  }, [value]);

  return (
    <Card className="p-4 my-4 shadow-sm border rounded">
      <h4 className="mb-3">Exercise 4: Validated Input</h4>
      <Form>
        <Form.Group controlId="validatedInput">
          <Form.Label>Nhập một giá trị</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setTouched(true);
            }}
            isValid={touched && isValid}
            isInvalid={touched && !isValid}
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="form-submit-area">
          <Button variant="primary" type="submit" disabled={!isValid}>
            Gửi
          </Button>
          {!isValid && touched && (
            <div className="form-error-message">
              Vui lòng nhập giá trị hợp lệ trước khi gửi.
            </div>
          )}
        </div>
      </Form>
    </Card>
  );
}

export default ValidatedInput;
