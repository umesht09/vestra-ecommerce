import { SearchOutlined } from "@mui/icons-material"; 
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1;
  margin: 10px; 
  min-width: 280px; 
  max-width: 350px; 
  height: 380px; 
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px; 
  box-shadow: 0px 5px 15px rgba(0,0,0,0.05); 
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
  }
`;

const Circle = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #f5fbfd; 
  position: absolute;
  top: 40px; 
`;

const Image = styled.img`
  height: 60%; 
  z-index: 2;
  object-fit: contain; 
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1); 
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 15px; 
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const ProductDetails = styled.div`
  margin-top: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const Price = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: teal;
`;


const ContainerHover = styled(Container)`
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  return (
    <ContainerHover>
      <Circle />
      
      {}
      <Image src={item.img} />

      {}
      <Info>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
      </Info>

      {}
      <ProductDetails>
        <Title>{item.title}</Title>
        <Price>₹ {item.price}</Price>
      </ProductDetails>

    </ContainerHover>
  );
};

export default Product;