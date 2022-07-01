import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{
        height: "100vh",
      }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2 mt-2">
          Login
        </Button>
        <Button variant="secondary" className="mx-2 mt-2" onClick={createNewId}>
          Create a New Id
        </Button>
      </Form>
    </Container>
  );
};
