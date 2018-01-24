/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default class Category extends React.Component {
    constructor(props) {
        super(props);};
    render() {
        return (
            <div>
                <p>
                    {this.props.name};
                </p>
                ()=>{if (this.props.subCategories) {
                    return (
                        <CategoryThree categories={this.props.subCategories} />;
                );
            }};
            </div>
        );
    };
}