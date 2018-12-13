import React, { Component } from "react";
import styled from 'styled-components';

const Background = 'http://placekitten.com/600/100';
import Film from '../Film/Film';
import * as pics from "../../pics";
import config from '../../../data/SiteConfig'

export default class Selection extends Component {
    constructor(){
        super();
        this.state = {featureSection: "", shortSection: ""};
    }
    componentDidMount(){
            let featureArray = {film :
                [{name: "A Little Wisdom", picturePath: pics.wisdom, key:0, link: "/a-little-wisdom"},
                {name: "Lovers of the Night", picturePath: pics.lovers, key:1, link: "/lovers-of-the-night"},
                {name: "Red de Libertad", picturePath: pics.redLibertad, key:2, link: "/red-de-libertad"},
                {name: "Voices Beyond the Wall", picturePath: pics.voicesBeyond, key:3, link: "/voices-beyond-the-wall"},
                ]};
            let shortArray = {film :
                [{name: "Aazar", picturePath: pics.aazar, key:0, link: "/aazar"},
                {name: "Ainhoa", picturePath: pics.ainhoa, key:1, link: "/ainhoa"},
                {name: "Bao Bei", picturePath: pics.baobei, key:2, link: "/bao-bei"},
                {name: "Crisis", picturePath: pics.crisis, key:3, link: "/crisis"},
                {name: "Criteria", picturePath: pics.criteria, key:4, link: "/criteria"},
                {name: "Cuerdas", picturePath: pics.cuerdas, key:5, link: "/cuerdas"},
                {name: "Death of a Father", picturePath: pics.death, key:6, link: "/death-of-a-father"},
                {name: "Fatima", picturePath: pics.fatima, key:7, link: "/fatima"},
                {name: "Forgotten Huts", picturePath: pics.forgotten, key:8, link: "/forgotten-huts"},
                {name: "Goodbye", picturePath: pics.goodbye, key:9, link: "/goodbye"},
                {name: "Il Signor Acciaio", picturePath: pics.signore, key:10, link: "/il-signor-acciaio"},
                {name: "In the Way Home", picturePath: pics.home, key:11, link: "/in-the-way-home"},
                {name: "In Three Years", picturePath: pics.threeYears, key:12, link: "/in-three-years"},
                {name: "Jesus the Gift of a Life", picturePath: pics.jesus, key:13, link: "/jesus-the-gift-of-a-life"},
                {name: "La Leccion", picturePath: pics.leccion, key:14, link: "/la-leccion"},
                {name: "La Thrive", picturePath: pics.laThrive, key:15, link: "/la-thrive"},
                {name: "Ladies of Charity", picturePath: pics.ladies, key:16, link: "/ladies-of-charity"},
                {name: "Mare Nostrum", picturePath: pics.nostrum, key:17, link: "/mare-nostrum"},
                {name: "Murga", picturePath: pics.murga, key:18, link: "/murga"},
                {name: "My Father the Fish", picturePath: pics.fish, key:19, link: "/my-father-the-fish"},
                {name: "Nobody Dies Here", picturePath: pics.nobodyDies, key:20, link: "/nobody-dies-here"},
                {name: "Sacrilege", picturePath: pics.sacrilege, key:21, link: "/sacrilege"},
                {name: "Sons of", picturePath: pics.son, key:22, link: "/sons-of"},
                {name: "Third Kind", picturePath: pics.thirdKind, key:23, link: "/third-kind"},
                {name: "The Bird Painter", picturePath: pics.birdPainter, key:24, link: "/the-bird-painter"},
                {name: "The Prodigal", picturePath: pics.prodigal, key:25, link: "/the-prodigal"},
                {name: "They Wont Let a Dream", picturePath: pics.dream, key:26, link: "/they-wont-let-a-dream"},
                {name: "This is not a PSA", picturePath: pics.psa, key:27, link: "/this-is-not-a-psa"},
                {name: "Westside", picturePath: pics.westside, key:28, link: "/westside"},


                ]};
            let featureSection = featureArray.film.map((post) => {
                    let props = {name: post.name, picturePath: post.picturePath, key: post.key, link: post.link};
                    return (<Film {...props} />)
                });
            let shortSection = shortArray.film.map((post) => {
                    let props = {name: post.name, picturePath: post.picturePath, key: post.key, link: post.link};
                    return (<Film {...props} />)
                });
            this.setState({featureSection: featureSection});
            this.setState({shortSection: shortSection});
    }
    render() {
        return (
            <ContentContainer>
                <ContentWrapper>
                    <Banner>
                        <Title>Selection</Title>
                    </Banner>
                    <Content>
                        <Header>Features</Header>
                            <FilmSection>
                                {this.state.featureSection}
                            </FilmSection>
                        <Header>Shorts</Header>
                            <FilmSection>
                                {this.state.shortSection}
                            </FilmSection>
                        </Content>
                    </ContentWrapper>
            </ContentContainer>
    );
  }
}

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
    justify-content:start-flex;
    color:black;
`;
const FilmSection = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    flex-wrap:wrap;
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
    font-size:40pt;
    font-family: Moon-Light;
    margin-top:1em;
`;
const Description = styled.div`
    font-family Raleway-Regular;
    font-size:15pt;
    line-height: 1.5em;
`;
