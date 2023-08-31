import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm({ handleChange, handleSubmit, formData }) {
    return (
        <div className="container">
            <h3 className="text-center">Login</h3>
            <div className="LoginForm">
                <Form onSubmit={handleSubmit} style={{width:"500px"}}>
                    <Form.Group controlId="email">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.email} type="text" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label><strong>Password</strong></Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="sign-in-button" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm;
