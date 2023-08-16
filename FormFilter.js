import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import data from "./data";

function FormFilter() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form>
        <InputGroup className="mt-3 mb-3">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
          />
        </InputGroup>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((hsd) => search.toLocaleLowerCase() === "" ? hsd : hsd.first_name.toLocaleLowerCase().includes(search))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default FormFilter;
