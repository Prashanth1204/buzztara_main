import React from "react";
import Button from '@material-ui/core/Button';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import "./index.css";

export const Nav = styled.nav`
  background: white;
  height: 55px;
  display: flex;
  border-top : 1px solid black;
  border-bottom : 1px solid black;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

function Safe() {
  return (
    <>
    <Nav style={{boxShadow: '0 10px 10px -10px #000000'}}>
        <NavMenu>
        <NavLink to='/buzztara_main/safe' activeStyle style={{color:"#1F75FE"}}>
            MANAGE
          </NavLink>
          <NavLink to='/buzztara_main' style={{marginLeft:"370px"}}>
            Overview
          </NavLink>
          <NavLink to='/buzztara_main/safe' className="navbarundersafe" >
            Safe
          </NavLink>
          <NavLink to='/buzztara_main/glass' >
            Glass
          </NavLink>
          <NavLink to='/buzztara_main/sense' >
            Sense
          </NavLink>
          <NavLink to='/buzztara_main/users' >
            Users
          </NavLink>
          <h4 className="NT" style={{marginLeft:"280px"}}>NT</h4>
        </NavMenu>
      </Nav>
    <h2 style={{textAlign:"center"}}>
        Safe
    </h2><br></br>
    <p style={{textAlign:"center"}}>This is safe section</p>
    <div style={{textAlign:"center"}}>
    <Link to="/buzztara_main" style={{textDecoration:"none"}}><Button variant="contained" color="primary">Back to Home page</Button></Link>
    </div>
    </>
  );
}

export default Safe;
