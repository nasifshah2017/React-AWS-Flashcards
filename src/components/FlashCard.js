import React, {Component} from 'react';
import RandomWeighted from './RandomWeighted';
import RegularCard from './RegularCard';
import MultiCard from './MultiCard';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //"FontAwesome" component imported 
import {faSpinner} from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons imported
import {library} from '@fortawesome/fontawesome-svg-core';  // FontAwesome Types imported

// Adding libraries in our project
library.add(faSpinner);

class FlashCard extends Component {
    constructor(){
        super();
        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`; // Server Endpoint
        this.state = {
            flipClass: "",
            questionData: "",
            
        }
    }

    // The function will run anytime the class "card mb-3"
    // is clicked on. The function flips the card back and forth.
    // It flips to whatever it is not. 
    // The newFlip variable is assigned to two different states 
    // of flipClass state variable, if it is assigned to empty
    // string, the card will be flipped to "flip", if it is assigned
    // to "flip", then the card will be flipped to empty string.   

    flip = (e)=>{
        let newFlip = this.state.flipClass === "" ? "flip" : "" 
        this.setState({
            flipClass: newFlip
        })
    }

    componentDidMount(){
       // this.newCard()
    }

    newCard = ()=>{
        let path;
        const cardStyle = this.props.cardStyle;
        if ((cardStyle === 'Random') || (cardStyle === 'Regular')){
            path = this.apiHostRoot+'/all' 
        } else if (cardStyle === 'Weighted'){
            path = this.apiHostRoot+'/weighted'
        } else {
            path = this.apiHostRoot+'/multi'
        }
        axios.get(path).then((response)=>{  // Making the API request
            this.setState({
                questionData: response.data,
            })
            this.props.nowReady();
        })
    }


    render(){

        if(!this.props.ready){
            this.newCard();
            return(
                <div className="spinner-wrapper">
                    <FontAwesomeIcon icon="spinner" size="6x" spin/>
                </div>
            )
        }

        const cardStyle = this.props.cardStyle;
        let card;
        if(cardStyle === 'Multi'){
            card = <MultiCard questionData={this.state.questionData}/>
        } else if(cardStyle === 'Regular'){
            card = <RegularCard questionData={this.state.questionData}/> 
        } else {
            card = <RandomWeighted questionData={this.state.questionData}/> 
        }

        return(
            <div>
                <div className="row align-items-center card-holder">
                    <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                        {card}
                    </div>
                </div>
                <button onClick={this.newCard} className="btn btn-primary btn-lg">Next Question!</button>
            </div>
        )
    }
}

export default FlashCard;