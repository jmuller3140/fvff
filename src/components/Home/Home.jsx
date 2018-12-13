import React, { Component } from "react";
import styled from "styled-components";

import poverty from "../../pics/poverty.jpg";
import fv from "../../pics/fv-image.png";
import fv400 from "../../pics/fv400logo1.png";

const Background = 'http://placekitten.com/600/600';
//<img src={fv} alt="fv-image" height="400px" width="275px"/>
class Home extends Component {
  render() {
    return (
        <ContentContainer>
            <PanelOne>
                <LeftContent>
                    <Color/>
                    <Image>
                        <img src={fv400} alt="fv400"/>
                    </Image>
                    <Words>Finding Vince is a free film arts festival where anyone can attend. Come see a personal diverse program of international stories that will change your perspective on poverty.</Words>
                </LeftContent>
                <RightContent>
                </RightContent>
            </PanelOne>
            <PanelTwo>
                <SectionOne>
                    We want to champion 21st century storytellers and challenge audiences with films that change our perspective on poverty in our communityies. We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity.
                </SectionOne>
                <SectionTwo>
                    <div>
                        <iframe src="https://player.vimeo.com/video/283313298" width="716" height="402" allowFullScreen />
                    </div>
                    <Two>
                        <iframe src="https://player.vimeo.com/video/288107537" width="358" height="201" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/RxmNCEIbs-c" width="358" height="201" allowFullScreen />
                    </Two>
                </SectionTwo>
            </PanelTwo>
        </ContentContainer>
    );
  }
}

export default Home;

const ContentContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    background-color: white;
`;
const PanelOne = styled.div`
    position:relative;
    height:700px;
    width:100%;
    display:flex;
`;
const Color = styled.div`
    height:100%;
    width:1.5em;
    background-color:#FFFF33;
`;
const LeftContent = styled.div`
    display:flex;
    width:20%;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    font-family: Raleway-Regular;
    font-size:20pt;
    background-color:#696969;
    color:white;
`;
const Image = styled.div`
    margin-left:2em;
    margin-top:-2em;
`;
const Words = styled.div`
    position:absolute;
    left:6em;
    font-size:20pt;
    top:500px;
    background-color:#4d4d4d;
    padding:1em;
    width:45%;
`;
const RightContent=styled.div`
    width: 80%
    background-image: url(${poverty});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:fixed;
`;
const PanelTwo = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    position: relative;
    background-color: #FAFAFA;
    padding: 8em 0 8em; 0;
`;
const SectionOne = styled.div`
    width:60%
    font-family: raleway-regular;
    font-size:18pt;
    line-height:1.5em;
    color:#343434;
    margin-bottom:3em;
`;
const SectionTwo = styled.div`
    display:flex;
    justify-content:center;
`;
const Two = styled.div`
    display:flex;
    flex-direction:column;
`;
const ContentWrapper = styled.div`
    width: 70%;
    display:flex;
    justify-content:center;
    flex-direction:column;
`;
const Banner = styled.div`
    margin-top:10em;
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
    margin-top: 5em;
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
