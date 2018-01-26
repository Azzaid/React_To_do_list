/**
 * Created by Johanas on 22.01.2018.
 */

import React from 'react';


export default class Task extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <input type="checkbox"/>
                <p>{this.props.name}</p>
                <input type="button" />
            </div>
        );
    }
}