import React, { useState } from 'react';

import './Employee.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { useEffect } from 'react';

const Employee = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setEmployees(data))
  }, []);

  return (
    <div className="employee-area">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              {
                console.log(employees)
              }
              {
                employees.map(
                  employee =>
                    <Col md={4}>
                      <div className="single-user">
                        <h4>{employee.name}</h4>
                        <p>{employee.email}</p>
                        <p>{employee.phone}</p>
                        <p>Address: {employee.address.street},{employee.address.suite},{employee.address.city}</p>
                        <Button className="primary-btn mt-auto">Add Friend</Button>
                      </div>
                    </Col>
                )
              }

            </Row>
          </Col>
          <Col md={4}>

          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Employee;