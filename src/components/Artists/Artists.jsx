import React, { Component } from "react";
import styled from "styled-components";

const Background = 'http://placekitten.com/600/100';

class Artists extends Component {
  render() {
    return (
        <ContentContainer>
            <ContentWrapper>
                <Banner>
                    <Title>Artists</Title>
                </Banner>
                <Content>
                    <Header>Seeds of Hope Competition</Header>
                    <Description>
                        All those under the age of 18 are invited to create seeds of hope, we call upon you to utilize any creative expression (story, poen, image,
                        sculpture, music, etc.) that inspires direct service to the poor. Jury-selected artists will be invited to the festival and awarded a trip to
                        Castel Gondolfo, Italy, from Octover 18-21, 2018. <br />
                        Please upload a video, image or document that best showcases your artwork.<br />
                        Due by 8/31/18, submit through email at submit@fv400@org or at fv400.org
                    </Description>
                    <Header>Screenwriting Competition</Header>
                    <Description>
                    The mission of the Las Vegas Film festival is to promote the filmmakers and story tellers throughout the world.
                    </Description>
                    <Header>Feature or Short Competition</Header>
                    <Description>
                        You are invited to submit your feature film or short to Finding Vince 400. The jury will select films that inspire a direct service to the poor and change our perspecitive on poverty. These films will premiere at Castel Gondolfo, Italy from October 18-21, 2018. Jury selected artists will be invited and awawrded a trip to this event. Due by 8/31/18, submit at FV400.org
                    </Description>
                </Content>
            </ContentWrapper>
        </ContentContainer>
    );
  }
}

export default Artists;

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
`;
