import styled from "styled-components";

export const DataHolderStyles = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  .company {
    width: 44.5rem;
    height: 1.6rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.612rem;
    color: #ff7e1b;
  }
  .title {
    width: 44.5rem;
    height: 9.68rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 4.4rem;
    font-weight: 700;
    line-height: 4.8rem;
    color: #1d2026;
  }
  .description {
    width: 44.5rem;
    height: 7.8rem;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: #69707d;
  }
`;
