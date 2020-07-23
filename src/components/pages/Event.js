import React  from "react";
import {hot} from 'react-hot-loader';
import BaseComponent from '../static/BaseComponent';
import FormSubmissionButton from '../static/FormSubmissionButton';
import { eventFormInfo, personFormArr } from '../../data/submission-schemas';
import { createFormComponent } from '../../helpers/methods';

class Event extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const submissionTypes = [
            {type: 'Event Info', data: personFormArr},
            {type: 'Address', data: eventFormInfo}
        ]

        const formComponent = submissionTypes
            .map(submissionType => {
                return (
                    <div>
                        <h2>{submissionType.type}</h2>
                        {createFormComponent(submissionType.data, this.handleChange, this.state)}
                    </div>
                )
            })

        return(
            <div className="Event">
                <h1>{this.props.title} Submission</h1>
                {formComponent}
                <FormSubmissionButton/>
            </div>
        );
    }
}

export default hot(module)(Event);
