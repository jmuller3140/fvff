import React from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import Autosuggest from 'react-autosuggest';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class SearchBar extends React.Component{
    constructor(){
        super()
        this.state = {suggestions: [], value: ''}
    }
////////////////////////////////////////////////
////////// handler for Material UI suggestion///
////////////////////////////////////////////////
    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value),
        });
      };
////////////////////////////////////////////////
////////// handler for Material UI clear////////
////////////////////////////////////////////////
    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
  };
////////////////////////////////////////////////
/////// handler for Material UI input Value ////
////////////////////////////////////////////////
      handleChange = (event, { newValue }) => {
        this.setState({ value: newValue });
      };

////////////////////////////////////////////////
/////// adds material UI text field for input///
////////////////////////////////////////////////
      renderInputComponent = (inputProps) => {
        return (<InputComponent inputProps={inputProps} />
            );
    }
////////////////////////////////////////////////
/////// renders the suggestions ////////////////
////////////////////////////////////////////////
     renderSuggestion = suggestion => {
        return(
            <div>
                {suggestion.name}, {suggestion.country}
            </div>)
    };
////////////////////////////////////////////////
/////// creates the suggestion list ////////////
////////////////////////////////////////////////
    getSuggestions = value => {
        const inputValue = value.toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
        this.lastInputLength = inputLength;
        return inputLength === 0 ? [] : this.suggestionsList.filter(suggestion => {
            const nameCountry = suggestion.name + ", " +suggestion.country;
            const keep = count < 5 && nameCountry.toLowerCase().slice(0, inputLength) === inputValue;
            if(keep) {
                count += 1;
            }
            return keep;
        });
    }
////////////////////////////////////////////////
//returns the value when suggestion is clicked//
////////////////////////////////////////////////
    getSuggestionValue = (suggestion) => {
        this.cityId = suggestion.id;
      return suggestion.name + ', '+ suggestion.country;
    }
    render(){
        const { classes } = this.props;
        const inputProps = {
          classes,
          placeholder: 'Type a theme',
          value: this.state.value,
          onChange: this.handleChange
    };
        return(
            <SearchBarContainer>
                <SearchWrapper>
                    <Autosuggest
                            renderInputComponent={this.renderInputComponent}
                            suggestions={this.state.suggestions}
                            onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            inputProps={inputProps}
                            theme={{
                                container: classes.container,
                                suggestionsContainerOpen: classes.suggestionsContainerOpen,
                                suggestionsList: classes.suggestionsList,
                                suggestion: classes.suggestion,
                            }}    />
                    <Button variant="outlined" color="primary" onClick={this.getWeather} className={classes.button}>Submit</Button>
                </SearchWrapper>
            </SearchBarContainer>
        )
    }
}
////////////////////////////////////////////////
/////// custom input component to not lose ref//
////////////////////////////////////////////////
const InputComponent = (inputProps) => {
    return (<div><TextField fullWidth {...inputProps} /></div>);
}
////////////////////////////////////////////////
////////////// CSS for MaterialUI //////////////
////////////////////////////////////////////////
const styles = {
  container: {
    position: 'relative',
    color: 'black',
    width: '18em',
    marginBottom: '.5em',
    marginLeft: '0em'
  },
  containerMobile: {
    position: 'relative',
    color: 'black',
    width: '16em',
    marginBottom: '.5em',
    marginLeft: '2em'
  },

  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: '1em',
    left: 0,
    right: 0,
    textAlign: 'left'
  },
  suggestion: {
    display: 'block',
    color: 'black',
    fontFamily: 'Raleway-Regular',
    marginBottom: '.5em',
    textAlign: 'left'
  },
  suggestionsList: {
    marginTop: '-1em',
    padding: '.5em',
    color: 'black',
    fontFamily: 'Raleway-Regular',
    listStyleType: 'none',
    textAlign: 'left',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
  },
  button: {
    width: '18em',
    marginLeft: '1em'
  },
  buttonUnits :{
    width: '0',
    padding: '0',
    backgroundColor:"transparent",
    position: 'relative',
    margin: '-1em',
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "transparent"
    }
  },
  buttonCancel: {
    width: '1em',
  },
}

const SearchBarContainer = styled.div`
    margin-top:5em;
    display: flex;
    justify-content:center;
`;
const SearchWrapper = styled.div`
    flex-direction: column;
    align-items:center;
`;
export default withStyles(styles)(SearchBar)
