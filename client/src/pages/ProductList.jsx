import styled, { keyframes } from "styled-components";
import Navbar from "../components/navbar"; 
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";



const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-out;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0px;
  background-color: #f5fbfd;
  margin-bottom: 30px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.03);
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: teal;
  text-transform: uppercase;
  letter-spacing: 5px;
  ${mobile({ fontSize: "30px" })}
`;

const ProductWrapper = styled.div`
  padding: 20px 40px;
  ${mobile({ padding: "10px" })}
`;



const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]; 
  
 
  const categoryTitles = {
    "jecket": "PREMIUM JECKETS",
    "winter": "WINTER WEAR",
    "jeans": "STYLISH JEANS",
    "shirt": "SHIRT STYLE",
    "lw": "TRENDING LOUNGEWEAR",
    "jk": "LIGHT JACKETS"
  };

  
  const displayTitle = categoryTitles[cat] || cat;

  const [filters] = useState({});
  const [sort] = useState("newest");

  return (
    <Container>
      <Navbar />
      
      {}
      <TitleContainer>
        <Title>{displayTitle}</Title>
      </TitleContainer>
      
      <ProductWrapper>
        <Products cat={cat} filters={filters} sort={sort} />
      </ProductWrapper>
      
      <Footer />
    </Container>
  );
};

export default ProductList;