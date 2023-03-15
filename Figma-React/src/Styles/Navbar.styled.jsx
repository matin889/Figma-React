import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: #f2f2f2;
  color: #035367;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
  padding: 1rem;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 1110px;
    height: 1px;
    left: 0;
    bottom: -10px;
    background: #e4e9f2;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 4.85rem;
  }
  .logo {
    width: 13.75rem;
    height: 2rem;
  }
  ul {
    display: flex;
    gap: 3.3rem;
    font-size: 2rem;
    list-style: none;
    padding: 1rem 0.5rem;
  }
  .cart {
    display: flex;
    align-items: center;
    gap: 4.618rem;
  }
  .basket {
    width: 2.2rem;
    height: 2rem;
  }
  .user {
    width: 5rem;
    height: 5rem;
  }
`;
