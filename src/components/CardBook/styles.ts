import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;

  .card {
    text-align: left;
    border: none;
    background: #ffffff;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    width: 17rem;
    height: 10rem;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    align-items: center;
    .card-image {
      height: 90%;
      filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
    }
    .card-content {
      padding-left: 0.5rem;
      width: 60%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .card-title {
        font-style: normal;
        font-weight: 500;
        font-size: 0.87rem;
        line-height: 1.25rem;
        color: var(--gray-500);
      }
      .card-author {
        font-style: normal;
        font-weight: 400;
        font-size: 0.87rem;
        line-height: 1.25rem;
        color: var(--pink-800);
        height: 3rem;
        white-space: wrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }
      .card-info {
        height: 50%;
        margin-top: auto;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 0.87rem;
          line-height: 1.25rem;
          color: var(--gray-300);
        }
      }
    }
  }
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0;
    .card {
      width: 15rem;
      margin: 0;
    }
  }
  @media (max-width: 425px) {
    .card {
      .card-content{
        .card-author {
          font-size: 0.2rem !important;
        }
      }
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    .card{
      width: 100%;
    }
    
  }
`;
