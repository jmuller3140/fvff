import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

const Film = (props) => {
    const {name, picturePath, description, link}  = props;
    return(
            <ProjectContainer>
                <PictureContainer>
                    <Link to={link}>
                        <Image src={picturePath} height="250" width="250"/>
                    </Link>
                </PictureContainer>
                <Text>{name}</Text>
            </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    display:flex;
    align-items:flex-start;
    flex-direction: column;
    width:25%;
    margin-bottom: 3em;
`;

const PictureContainer = styled.div`
    width:250px;
    height:250px;
    color:black;
    opacity:1;
    position:relative;
    overflow:hidden;
    margin-bottom:1em;
    text-align:left;
`;

const Text = styled.div`
    color:black;
    font-size:20pt;
    font-family:Moon-Light;
    letter-spacing:.1em;
    text-align:center;
    width:100%;
`;
const Image = styled.img`
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &:hover{
        opacity:.4;
        filter:blur(2px);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;
export default Film
