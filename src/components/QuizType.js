import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //"FontAwesome" component imported 
import {faDumbbell, faFont, faFileAlt, faDice} from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons imported
import {library} from '@fortawesome/fontawesome-svg-core';  // FontAwesome Types imported

// Adding libraries in our project
library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);

function QuizType(props){
    return(
        <li className="col-sm-3 text-center">
            <div className="nav-card" onClick={()=>{props.userChoice(props.quizType)}}>
                <FontAwesomeIcon icon={props.icon} size="4x"/> {/*Imported from FontAwesome*/}
                <span>{props.quizType}</span>
            </div>
        </li>
    )
}

export default QuizType;

// Clicking the icon, the built-in onClick method will run
// Which will run the userChoice() function.
// The function will set cardStyle to the cardStyle chosen
// by the user