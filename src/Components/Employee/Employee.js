import React, { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import './Employee.css';
import fakeData from '../../fakeData';
import SingleUser from '../SingleUser/SingleUser';
import Cart from '../Cart/Cart';

const Employee = (props) => {

  const usersData = fakeData;

  const [employees] = useState(usersData);
  const [cart, setCart] = useState([]);

  const paidClickHandler = (user) =>{
    const newCart = [...cart, user];
    setCart(newCart);
    console.log(cart);
  }

  return (
    <div className="employee-area">
      <Container>
        <Row>
          <Col md={9}>
            <Row>
              {
                employees.map(
                  employee =>
                  <SingleUser employee={employee} paidClickHandler={paidClickHandler}></SingleUser>
                )
              }
            </Row>
          </Col>
          <Col md={3}>
              <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Employee;