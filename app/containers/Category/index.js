/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import TextInputDialog from 'containers/TextInputDialog/index';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    };

    showSubCategories() {
        const subCategories = this.props.categories;
        if (subCategories.length !== 0) {
            return (
                <ListItem
                    primaryText={this.props.name}
                    initiallyOpen
                    nestedItems={subCategories.map((subCategory) => {
                        return (<Category {...subCategory} key={subCategory.id} homeArray={this.props.categories} addCategoryFunction={this.props.addCategoryFunction} />);})}
                    nestedListStyle={{marginLeft:'40px'}}>
                    <TextInputDialog
                        buttonLabel="Add category" onSubmitFunction={this.props.addCategoryFunction} targetArray={this.props.categories} dialogLable="Enter new name"
                    />
                </ListItem>

            );
        } else {
            return (
                <ListItem
                    primaryText={this.props.name}
                    initiallyOpen
                    onClick={}
                >
                    {<TextInputDialog
                        buttonLabel="Add category" onSubmitFunction={this.props.addCategoryFunction} targetArray={this.props.categories} dialogLable="Enter new name"
                    />}
                </ListItem>)
        }
    }

    showSampleList() {
        const tasks = this.props.tasks;
        console.log(tasks);
        if (tasks.length !== 0) {
            console.log("mounting");
            return (
                <List>
                    {tasks.map((task) => {
                    return(
                    <ListItem
                    primaryText={task.name}
                    />
                    )})
                }
                </List>
            )
        }

    }

    render() {
        return (
            <div>
                {this.showSubCategories()}
                <Route path={'/' + this.props.id} component={this.showSampleList}/>
        </div>

        )
    };
}