import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1130px;
  height: 32rem;
  .cards {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    
  }
`;
