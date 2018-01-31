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
import { Switch, Route} from 'react-router-dom';
import TextInputDialog from 'containers/TextInputDialog/index';
import {List, ListItem} from 'material-ui/List';

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

    addTask(newTaskName, randomArray, parrentCategoryId) {
        this.updatedState.tasks[parrentCategoryId].push(this.makeTaskFromName(newTaskName));
        this.updateState();
    }

    markTaskAsDone

    moveItem

    editTask

    createTaskRouter() {
        let router = [];
        for (const taskCategory in this.updatedState.tasks) {
            let returnComponent = ()=>{
                const expectedList = this.showTaskList(this.updatedState.tasks[taskCategory]);
                return(
                    expectedList
                );
            };
            router.push(<Route path={'/'+taskCategory} component={returnComponent} key={"route" + taskCategory} />);
        }
        return(
            router
        )
    }

    showTaskList(category) {
        return(<List>
            {category.map((task)=>{return(<ListItem
                primaryText={task.name}
            />)})}
        </List>
            )};

    componentWillReceiveProps() {
        this.updateState();
    }

    render() {
        this.updatedState = this.state;
        return (
            <div>
                <TextInputDialog buttonLabel="Add category" onSubmitFunction={this.addCategory}
                                 targetArray={this.updatedState.categories} dialogLable="Enter new name"/>
                    <List style={{width:'500px', float:'left', border:'solid 3px white'}}>
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
                    <List style={{width:'500px', float:'left', border:'solid 3px white'}}>
                        {this.createTaskRouter()}
                    </List>
            </div>
        );
    }
}
