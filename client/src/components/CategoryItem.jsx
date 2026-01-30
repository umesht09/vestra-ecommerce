import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  
  &:hover img {
    transform: scale(1.1); 
  }
  
  &:hover div {
    background-color: rgba(0, 0, 0, 0.3); 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.1);
  transition: all 0.5s ease;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 25px; 
  font-size: 40px;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7); 
  text-align: center;
  letter-spacing: 2px;
`;


const Button = styled.button`
  padding: 15px 35px;
  font-size: 18px;
  background-color: transparent; 
  color: white; 
  border: 3px solid white; 
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.4s ease; 
  text-transform: uppercase;

  
  box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);

  
  &:hover {
    background-color: white;
    color: black; 
    border-color: white;
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0,0,0,0.4);
    text-shadow: none;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;