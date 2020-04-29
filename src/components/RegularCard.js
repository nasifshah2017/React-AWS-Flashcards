import React, {Component} from 'react';


class RegularCard extends Component{
   constructor(){
       super();
       }

    render(){
        const question = this.props.questionData; // Imported from FlashCard.js
        return(
            <div>
                <div className="card-back">
                    <div>{question.service}</div>
                </div>
                <div className="card-front">
                    <div>{question.desc}</div>
                    <div>{question.cat}</div>
                </div>
            </div>
        )
    }
}

export default RegularCard;