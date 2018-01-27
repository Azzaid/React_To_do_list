/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import Task from 'containers/Task/index';
import {List, ListItem} from 'material-ui/List';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    };

    showSubCategories() {
        const subCategories = this.props.subCategories;
        if (subCategories.length !== 0) {
            return (
                <ListItem
                    primaryText={this.props.name}
                    initiallyOpen
                    nestedItems={subCategories.map((subCategory) => {
                    return (<Category {...subCategory} key={subCategory.id} />);})}/>

            );
        } else {
            return (
                <ListItem
                    primaryText={this.props.name}
                    initiallyOpen />)
        }
    }

    showTasks(tasks) {
        if (tasks.length !== 0) {
            return (
            <div style="padding-left: 10px">
                <ListItem {...this.createListProps} />
            </div>
            );
        }
    }

    render() {
        return (
                this.showSubCategories()
        )
    };
}