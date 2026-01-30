import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import logoImg from "../assets/logo.png"; 
import { Link } from "react-router-dom";
import { mobile } from "../responsive"; 

const Container = styled.div`
  display: flex;
  background-color: #fcf5f5; 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  /* Text logo style */
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
  display: flex; 
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VESTRA.</Logo>
        <Desc>
          VESTRA brings you the finest collection of premium fashion. 
          Quality, Style, and Comfort - all in one place.
          Redefining your wardrobe since 2026.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
        {}
          <Link to="/" style={{textDecoration:"none", color:"inherit", width: "50%"}}>
            <ListItem>Home</ListItem>
          </Link>

          {}
          <Link to="/cart" style={{textDecoration:"none", color:"inherit", width: "50%"}}>
            <ListItem>Cart</ListItem>
          </Link>
          <ListItem>Jeckets</ListItem>
          <ListItem>Shirts</ListItem>
          <ListItem>Launge Wear</ListItem>
          <ListItem>Premium</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 303 - Hill Station
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 6378808097
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> vestra@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;