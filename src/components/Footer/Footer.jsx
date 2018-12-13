import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitterSquare, faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class Footer extends React.Component {
        constructor(props){
            super(props)
        }

        render(){
            const {classes} = this.props;
            return(
                <div>
                        <FooterContainer>
                            <Subscription>
                                <Text>Subscribe to our mailing list!</Text>
                                        <TextField  label="Email" className={classes.email} InputProps={{disableUnderline: true}} variant="filled"/>
                                    <Button varient="outlined" className={classes.button}>Submit</Button>
                            </Subscription>
                            <Icons>
                                <Icon href="https://www.facebook.com/jimmy.muller.7140" target="_blank"><FontAwesomeIcon icon={faFacebook}/></Icon>
                                <Icon href="https://twitter.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faTwitterSquare}/></Icon>
                                <Icon href="http://www.linkedin.com/in/james-muller3140" target="_blank"><FontAwesomeIcon icon={faVimeo}/></Icon>
                                <Icon href="https://github.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faYoutube}/></Icon>
                                <Icon href="https://github.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faInstagram}/></Icon>
                            </Icons>
                            <Copyright>
                                Made in 2018 <FontAwesomeIcon icon={faCopyright}/>
                            </Copyright>
                        </FooterContainer>
                </div>
            )
        }
}

////////////////////////////////////////////////////
//////////
////////////////////////////////////////////////////
const styles = {
    email: {
        width: '30em',
        marginBottom: '2em',
        backgroundColor: 'white',
        borderRadius: '3px',
        border: 0,
    },
    button: {
        color: 'grey',
        fontSize:'12pt',
        width: '3em',
        height: '3.5em',
        marginLeft: '3em',
        paddingLeft: '5em',
        paddingRight: '5em',
        background: 'white',
        border: '1px solid silver',
        borderRadius: '3px',
    },
    resize:{
        fontSize:15,
}
}
//////////////////////////////////////////////////////
//////////
//////////////////////////////////////////////////////

    const FooterContainer = styled.div`
        width:100%;
        padding-top:5em;
        padding-bottom:5em;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background-color:#29292A;
    `;
    const Text = styled.div`
        font-family: Raleway-Bold;
        font-size: 13pt;
        color:white;
        margin-bottom:.5em;
    `;
    const TextFieldContainer = styled.div`
        height: 3em;
        background-color: white;
        padding-top: 1em;
        border-radius: 3px;
    `;
    const Icons = styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
    `;
    const Icon = styled.a`
        color:grey;
        font-size:20pt;
        padding:1em;
        border-top:1px solid silver;

        &:hover{
            color: rgba(178, 25, 0, 1);
        }
    `;
    const Copyright = styled.div`
        color:grey;
        font-family:Moon-Light;
    `;
    const Subscription = styled.div`
        justify-content:center;
    `;
//
// ---------------------
//
    const FooterContainerMobile = styled.div`
        width:100%;
        padding-bottom:5em;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    `;
    const IconsMobile = styled.div`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
    `;
    const IconMobile = styled.a`
        color:grey;
        font-size:20pt;
        padding:1em;
        border-top:1px solid silver;

        &:hover{
            color:rgba(178, 25, 0, 1);
        }
    `;
    const CopyrightMobile = styled.div`
        color:grey;
        font-family:Moon-Light;
    `;
export default withStyles(styles)(Footer)
