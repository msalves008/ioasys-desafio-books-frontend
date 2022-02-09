import styled from "styled-components";
import bg from "../../assets/BackgroundImage2.png";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  .cards {
    width: 100vw;
    max-width: 1130px;
    height: 32rem;
 /*    width: 100%;
    height: 100%; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    
  }
`;
