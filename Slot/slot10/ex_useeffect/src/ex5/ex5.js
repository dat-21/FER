// File: components/LoginForm.js (Exercise 5)
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../App.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) => password.length >= 8;

  const isFormValid = isValidEmail(email) && isValidPassword(password);

  return (
    <Card className="p-4 my-4 shadow-sm border rounded">
      <h4 className="mb-3">Exercise 5: Login Form</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            isValid={emailTouched && isValidEmail(email)}
            isInvalid={emailTouched && !isValidEmail(email)}
          />
          <Form.Control.Feedback type="invalid">
            Email không hợp lệ. Vui lòng nhập lại!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            isValid={passwordTouched && isValidPassword(password)}
            isInvalid={passwordTouched && !isValidPassword(password)}
          />
          <Form.Control.Feedback type="invalid">
            Mật khẩu phải có ít nhất 8 ký tự!
          </Form.Control.Feedback>
        </Form.Group>

        <div className="form-submit-area">
          <Button variant="primary" type="submit" disabled={!isFormValid}>
            Submit
          </Button>
          {(!isValidEmail(email) || !isValidPassword(password)) &&
            (emailTouched || passwordTouched) && (
              <div className="form-error-message">
                Vui lòng điền đầy đủ và hợp lệ tất cả thông tin trước khi gửi.
              </div>
            )}
        </div>
      </Form>
    </Card>
  );
}

export default LoginForm;
