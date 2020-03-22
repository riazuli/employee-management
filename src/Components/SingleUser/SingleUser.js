import React from 'react'; 
import { Col, Button } from 'reactstrap';
import { FaPlus } from 'react-icons/fa';
import './SingleUser.css';

const SingleUser = (props) => {
  const {img, name, email, phone, address, salary} = props.employee;
  return (
    <Col md={4}>
      <div className="single-user">
        <img src={img} className="avatar" alt="" />
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
        <p>Address: {address.street},{address.suite},{address.city}</p>
        <p>Salary: <b>${salary}</b></p>
        <Button onClick={() => props.paidClickHandler(props.employee)} className="primary-btn mt-auto"><FaPlus /> Pay Salary</Button>
      </div>
    </Col>
  );
};

export default SingleUser;