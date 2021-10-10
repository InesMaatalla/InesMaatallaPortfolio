import { Link } from "gatsby"
import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#000000"
      : "linear-gradient(to bottom,  rgba(178,235,242, 0.85) 0%,rgba(178,235,242,0) 100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: relative;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(Link)`
  color: #212121;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    color:#1b9fa2;
    text-align:center;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 0.9;
    transition: all 0.2s ease;
    backdrop-filter: brightness(50%);
    background: black;
    z-index: 1;
    font-size: 1.5rem;  
  }
`
export const NavItem = styled.li`
  height: 80px;

  &:hover {
  border-bottom: 2px solid #1b9fa2;}

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border-bottom: 2px solid transparent;}
  }
`

export const NavLinks = styled(Link)`
  color: #212121;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #1b9fa2;
      transition: all 0.3s ease;
    }
  }
`