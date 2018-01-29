/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Category from 'containers/Category/index';
import TextInputDialog from 'containers/TextInputDialog/index';
import {List} from 'material-ui/List';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function//
    constructor(props) {
        super(props);

        this.updateState = this.updateState.bind(this);

        this.addCategory = this.addCategory.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editName = this.editName.bind(this);

        this.state = {
            tasksTotal: 0,
            tasksSolved: 0,
            categories: [],
        };
    }

    updateState() {
        this.setState(this.updatedState);
    }

    makeCategoryFromName(newCategoryName) {
        return (
            {
                id: encodeURI(newCategoryName),
                name: newCategoryName,
                categories: [],
                tasks: [],
            }
        );
    }

    addCategory(newCategoryName, targetArray) {
        targetArray.push(this.makeCategoryFromName(newCategoryName));
        this.updateState();
    }

    deleteItem(itemToDeleteId, targetArray) {
        const place = targetArray.findIndex((element) => {
            return (itemToDeleteId == element.id)
        });
        targetArray.splice(place, 1);
        this.updateState();
    }

    editName(newName, targetArray, itemToEditId) {
        const place = targetArray.findIndex((element) => {
            return (itemToEditId == element.id)
        });
        targetArray[place].id = encodeURI(newName);
        targetArray[place].name = newName;
        this.updateState();
    }

    makeTaskFromName(newTaskName) {
        return (
            {
                id: encodeURI(newTaskName),
                name: newTaskName,
                isFinished: false,
                description: '',
            }
        );
    }

    addTask(newTaskName, targetArray) {
        targetArray.push(this.makeTaskFromName(newTaskName));
        this.updateState();
    }

    markTaskAsDone

    moveItem(targetArray, originArray, targetId) {
        const place = targetArray.findIndex((element) => {
            return (targetId == element.id)
        });
        originArray.push(targetArray[place]);
        targetArray.splice(place, 1);
        this.updateState();
    }

    editTask

    componentWillReceiveProps() {
        this.updateState();
    }

    render() {
        this.updatedState = this.state;
        return (
            <div>
                <TextInputDialog buttonLabel="Add category" onSubmitFunction={this.addCategory}
                                 targetArray={this.updatedState.categories} dialogLable="Enter new name"/>
                <List>
                    {this.updatedState.categories.map((category) => {
                        return (<Category {...category} key={category.id} homeArray={this.updatedState.categories}
                                          addCategoryFunction={this.addCategory}
                                          deleteItemFunction={this.deleteItem}
                                          editNameFunction={this.editName}
                                          addTaskFunction={this.addTask}/>);
                    })};
                </List>
            </div>
        );
    }
}
