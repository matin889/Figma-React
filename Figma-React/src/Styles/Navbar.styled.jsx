import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: #d6e3e3;
  color: #035367;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
  padding: 1rem;
  .logo {
    width: 13.75rem;
    height: 2rem;
    cursor: pointer;
  }
  ul li {
    display: inline-block;
    font-size: 2rem;
    list-style: none;
    padding: 1rem 0.5rem;
  }
  .basket {
    width: 2.2rem;
    height: 2rem;
  }
  .user {
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
  }
`;
