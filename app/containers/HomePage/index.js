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
import {Route} from 'react-router-dom';
import TextInputDialog from 'containers/TextInputDialog/index';
import {List, ListItem} from 'material-ui/List';
import TaskList from 'containers/TaskList/index';

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
            tasks: {},
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
                tasks: {},
            }
        );
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

    addCategory(newCategoryName, targetArray) {
        const newCategory = this.makeCategoryFromName(newCategoryName);
        const newId = newCategory.id;
        targetArray.push(newCategory);
        this.updatedState.tasks[newId] = [];
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

    addTask(newTaskName, randomArray, parrentCategoryId) {
        this.updatedState.tasks[parrentCategoryId].push(this.makeTaskFromName(newTaskName));
        this.updateState();
    }

    markTaskAsDone

    moveItem

    editTask

    componentWillReceiveProps() {
        this.updateState();
    }

    render() {
        this.updatedState = this.state;
        return (
            <div style={{
                display: 'grid',
                gridTemplateAreas: '"Header Filter" "ProgressBar ProgressBar" "AddCategoryButton ." "CategoryThree TaskList"',
                gridTemplateColumns: 'auto auto',
                gridColumnGap: '5px',
                gridRowGap: '5px',
            }}>
                <div style={{gridArea: 'AddCategoryButton'}}>
                    <TextInputDialog buttonLabel="Add category" onSubmitFunction={this.addCategory}
                                     targetArray={this.updatedState.categories} dialogLable="Enter new name"/>
                </div>
                    <List style={{gridArea: 'CategoryThree', border: 'solid 3px white', borderRadius: '3px' }}>
                        {this.updatedState.categories.map((category) => {
                            return (
                                <Category {...category} key={category.id} homeArray={this.updatedState.categories}
                                          addCategoryFunction={this.addCategory}
                                          deleteItemFunction={this.deleteItem}
                                          editNameFunction={this.editName}
                                          addTaskFunction={this.addTask}
                                          history={this.props.history}
                                          location={this.props.location}
                                />);
                        })};
                    </List>
                <Route path="/:currentCategory" component={
                    () => {
                        return(
                            <TaskList
                                taskList={this.state.tasks}
                                history={this.props.history}
                                location={this.props.location}
                            />
                        );
                    }
                }
                />
            </div>
        );
    }
}
