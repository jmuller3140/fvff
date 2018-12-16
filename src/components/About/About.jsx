import React, { Component } from "react";
import styled from "styled-components";

const Background = 'https://placekitten.com/600/100';

class About extends Component {
  render() {
    return (
        <ContentContainer>
            <ContentWrapper>
                <Banner>
                    <Title>About Us</Title>
                </Banner>
                <Content>
                    <Header>Who are we?</Header>
                    <Description>
                        Finding Vince 400 is a competition and festival for people of all voices. It is inspired by the 400th Anniversary of the charism of St.
                        Vincent DePaul. Finding Vince 400 is part of the the Vincentian Family's Initiative to globalize charity.
                    </Description>
                    <Header>Mission</Header>
                    <Description>
                    Champion 21st century storytellers and challenge audiences with films that change our perspective on poverty in our communityies. We spark
                    our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity.
                    </Description>
                    <Header>The Team</Header>
                    <Description>
                    </Description>
                </Content>
            </ContentWrapper>
        </ContentContainer>
    );
  }
}

export default About;

const ContentContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    padding-bottom:2em;
    background-color: #FAFAFA;
`;
const ContentWrapper = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`;
const Banner = styled.div`
    margin-top:6em;
    width:100%;
    height:200px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;
const Content = styled.div`
    width:70%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    color:black;
`;
const Title = styled.div`
    position:absolute;
    top:0;
    left:0;
    margin-top: 3.5em;
    width: 100%;
    font-size:30pt;
    font-family: Raleway-Bold;
    text-align:center;
    padding-top:1em;
    padding-bottom:1em;
    color:black;
`;
const Header = styled.div`
    font-size:25pt;
    font-family: Raleway-Regular;
    margin-top:1em;
`;
const Description = styled.div`
    font-family Raleway-Regular;
    font-size:15pt;
    line-height: 1.5em;
    text-align:justify;
`;
