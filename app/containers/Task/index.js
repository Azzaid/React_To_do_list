/**
 * Created by Johanas on 22.01.2018.
 */

import React from 'react';


export default class Task extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render(taskstate) {
        return (
            <div>
                <input type="checkbox"/>
                <p>{this.props.taskName}</p>
                <input type="button">
            </div>);
        );
    }
}