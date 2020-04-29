import React, {Component} from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

class RandomWeighted extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }

    render(){

        const question = this.props.questionData;

        return(
            <div>
                <div className="card-back">
                    <div>{question.service}</div>
                    <div className="commonality">{question.common}</div>
                </div>
                <div className="card-front">
                    <div>{question.cat}</div> 
                </div>
            </div>
        )
    }
}

export default RandomWeighted;