import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/cartRedux"; 

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  color: teal;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  max-width: 500px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(resetCart());
  }, [dispatch]);

  return (
    <Container>
      <Title>Payment Successful!</Title>
      <Desc>
       order successfully placed 
      
      </Desc>
      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
    </Container>
  );
};

export default Success;