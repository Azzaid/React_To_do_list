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
        this.editTask = this.editTask.bind(this);
        this.moveTask = this.moveTask.bind(this);
        this.markCategoryAsDone = this.markCategoryAsDone.bind(this);
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

    markCategoryAsDone(categoryId, targetArray) {
        const place = targetArray.findIndex((element) => {
            return (itemToDeleteId == element.id)
        });
        if (targetArray[place].isFinished) {
            targetArray[place].isFinished = false;
        } else {
            targetArray[place].isFinished = true;
        }
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

    moveTask(oldArrayId, targetArrayId, taskId) {
      const place = this.updatedState.tasks[oldArrayId].findIndex((element) => {
        return (taskId == element.id);
      });
      const taskToMove = this.updatedState.tasks[oldArrayId][place];
      this.updatedState.tasks[targetArrayId].push(taskToMove);
      this.updatedState.tasks[oldArrayId].splice(place, 1);
    }

    editTask(newName, newDescription, targetArray, itemToEditId) {
        const place = targetArray.findIndex((element) => {
            return (itemToEditId == element.id)
        });
      console.log("now update", targetArray[place], "with name", newName);
        targetArray[place].id = encodeURI(newName);
        targetArray[place].name = newName;
        targetArray[place].description = newDescription;
      console.log("and got", targetArray[place]);
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
                                <Category {...category}
                                          key={category.id}
                                          homeArray={this.updatedState.categories}
                                          addCategoryFunction={this.addCategory}
                                          deleteItemFunction={this.deleteItem}
                                          editNameFunction={this.editName}
                                          addTaskFunction={this.addTask}
                                          moveTaskFunction={this.moveTask}
                                          markCategoryAsDoneFunction={this.markCategoryAsDone}
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
                                taskModifyFunction={this.editTask}
                            />
                        );
                    }
                }
                />
            </div>
        );
    }
}
