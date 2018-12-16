import React, { Component } from "react";
import styled from "styled-components";

  const Background = '../../pics/a_little_wisdom.jpg';

const FilmContents = (props) => {
  const {title, description, video, type, length, year, country, directed, backgroundPath} = props;
  const Banner = styled.div`
    width:100%;
    height:500px;
    background-image: url(${backgroundPath});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;
    return (
        <ContentContainer>
            <ContentWrapper>
                <Banner>
                    <Title>{title}</Title>
                </Banner>
                <Content>
                    <VideoContainer>
                        <iframe src={video} width="960" height="540" frameBorder="0" allowFullScreen></iframe>
                    </VideoContainer>
                    <DetailContainer>
                        <Detail>{type}</Detail>
                        <Detail>Directed By: {directed}</Detail>
                        <Detail>Film Length: {length}</Detail>
                        <Detail>Created:  {year}</Detail>
                        <Detail>Country of Origin: {country}</Detail>
                    </DetailContainer>
                    <Header>Synopsis</Header>
                    <Description>
                       {description}
                    </Description>
                </Content>
            </ContentWrapper>
        </ContentContainer>
    );
}

export default FilmContents;

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
const Content = styled.div`
    width:960px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    color:black;
`;
const VideoContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:2em;
`;
const DetailContainer = styled.div`
    width:100%;
    display:flex;
    align-items: flex-start;
    flex-direction:column;
    margin-top:1em;
    font-family: Raleway-Regular;
    font-size:20pt;
`;
const Detail = styled.div`
    margin-bottom: .25em;
`;
const MoonFont = styled.div`
    font-family: Moon-Light;
`;
const Title = styled.div`
    position:absolute;
    top:0;
    left:0;
    margin-top: 3.5em;
    width: 100%;
    font-size:40pt;
    font-family: Raleway-Bold;
    text-align:center;
    padding-top:1em;
    padding-bottom:1em;
    color:silver;
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
