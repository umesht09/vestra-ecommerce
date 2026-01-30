import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive"; 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png"; 



const Container = styled.div`
  height: 80px;
  background-color: white;
  color: black;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  
  
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  max-width: 1400px; 
  margin: 0 auto; 

  ${mobile({ padding: "10px 5px" })} 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover { transform: scale(1.1); }
  
  ${mobile({ height: "30px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h1`
  font-weight: 800;
  font-size: 32px;
  cursor: pointer;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #222;
  font-family: 'Urbanist', sans-serif;
  
  background: -webkit-linear-gradient(#333, #555);
  -webkit-background-clip: text;
  
  transition: all 0.3s ease;

  &:hover {
    color: teal;
    letter-spacing: 6px;
  }


  ${tablet({ fontSize: "24px", letterSpacing: "3px" })}
  ${mobile({ fontSize: "18px", letterSpacing: "1px" })}
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    color: teal;
    transform: translateY(-2px);
  }

 
  ${mobile({ fontSize: "10px", marginLeft: "8px" })}
`;


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        {}
        <Left>
          <Link to="/">
            <LogoImage src={logoImg} alt="Logo" />
          </Link>
        </Left>

        {}
        <Center>
          <Link to="/" style={{textDecoration:"none"}}>
             <LogoText>VESTRA.</LogoText>
          </Link>
        </Center>

        {}
        <Right>
          <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>
            <MenuItem>Sign In</MenuItem>
          </Link>
          
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                {}
                <ShoppingCartOutlined color="action" style={{ fontSize: "24px" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;