import React, { Component } from "react";
import styled from "styled-components";

const Background = 'https://placekitten.com/600/100';

class Contact extends Component {
  render() {
    return (
        <ContentContainer>
            <ContentWrapper>
                <Banner>
                    <Title>Contact</Title>
                </Banner>
                <Content>
                    <Header>Email</Header>
                    <Description>
                        Info@lvff.com
                    </Description>
                    <Header>Volunteer Opportunities</Header>
                    <Description>

                    </Description>
                    <Header>Sponsorship</Header>
                    <Description>

                    </Description>
                </Content>
            </ContentWrapper>
        </ContentContainer>
    );
  }
}

export default Contact;

const ContentContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    padding-bottom:2em;
    background-color:#FAFAFA;
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
    color:black;
`;
const Description = styled.div`
    font-family Raleway-Regular;
    font-size:15pt;
    line-height: 1.5em;
    color:black;
    text-align: justify;
`;
