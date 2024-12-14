import React from 'react'
import NavBarDMX from '../static/NavBarDMX'
import styled from 'styled-components'
const Home = () => {
  return (
    <Wrapper>
        <div>Home</div>
        <NavBar><NavBarDMX/></NavBar>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
    height: 100vh;
    border: 1px solid red;
    /* padding: 50px; */
`

const NavBar = styled.div`
    bottom: 0;
    position: sticky;
    border: 1px solid red;

    @media (min-width: 500px) {
        display: none;
        /* border: 1px solid red; */
    }
`