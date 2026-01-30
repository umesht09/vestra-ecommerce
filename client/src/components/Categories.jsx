import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile, tablet } from "../responsive"; 

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #fcf5f5; 
  
  
  max-width: 1400px;
  margin: 0 auto;

 
  ${tablet({ flexDirection: "column", padding: "10px" })}

 
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;