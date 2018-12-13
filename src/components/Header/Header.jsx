import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const logo = 'https://placekitten.com/g/200/100';

class Header extends Component {
  render() {
    const { config } = this.props;

    return (
       <div>
            <HeaderContainer>
                <TitleContainer>
                    <Logo>
                        <img src={logo} alt="lvff logo"/>
                    </Logo>
                    <Titles>
                        <StyledLink to='/'>
                                <div>Finding Vince</div>
                                <div>Film Festival</div>
                                <div>October, 2020</div>
                        </StyledLink>
                    </Titles>
                </TitleContainer>
                <Navigation>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/artists'>Artists</StyledLink>
                    <StyledLink to='/selection'>Selection</StyledLink>
                    <StyledLink to='/about'>About</StyledLink>
                    <StyledLink to='/contact'>Contact</StyledLink>
                </Navigation>
            </HeaderContainer>
        </div>
    );
  }
}

export default Header;

/*************************************
************ HEADER STYLES ***********
**************************************/
const HeaderContainer = styled.div`
    width:100%;
    position: fixed;
    top:0;
    left:0;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    background-color: #29292A;
    z-index:100;
`;
//

const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;
const Logo = styled.div`
    padding-left:5em;
    width:20em;
    text-align:right;
`;

const Titles = styled.div`
        width:15em;
        font-size:20pt;
        font-family: Moon-Bold;
        color:rgba(51, 51, 51, 1);
        letter-spacing: .1em
        text-align:left;
     `;
const Navigation = styled.div`
    width:40%;
    padding-right:5%;
    display: inline-flex;
    justify-content: space-between;
    font-size:15pt;
    font-family: Raleway-Bold;
    color: rgba(51, 51, 51, 0);
    letter-spacing: .1em;
 `;

const StyledLink = styled(Link)`
        text-decoration: none;
        display:flex;
        font-family:Moon-Light;
        font-size:14pt;
        flex-direction:column;
        align-items:flex-start;
        color:silver;
        padding:.6em;
        &:hover{
            color:#FFFF33;
        }
 `;
