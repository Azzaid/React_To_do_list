/**
 * Created by Johanas on 31.01.2018.
 */
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
    };

    createCategoryRouter() {
            let router = [];
            for (const taskCategory in this.props.taskList) {
                let workCategory = this.props.taskList[taskCategory];
                console.log("now we got some", workCategory);
                router.push(<Route path={'/'+taskCategory} component={
                    ()=>{
                        return(this.createTaskRouter(workCategory, taskCategory))
                    }
                } key={"route" + taskCategory} />);
            }
                if (router.length !== 0) {
                    return(router)
                } else {
                return(null)
                }
    }

    createTaskRouter(category, categoryName) {
        console.log("Routing tasks in ", category);
        return(
        <Switch>
            {category.map((task)=>{
                console.log("avaitFor", "/"+categoryName+"/"+task.id);
                return(
                    <Route
                        path={"/"+categoryName+"/"+task.id}
                        component={this.redactTask}
                    />
                )
            })}
            <Route component={()=>{return(
                this.createTasksList(category, categoryName)
            )}}/>
        </Switch>
        )
    }

    redactTask() {
        console.log("task is here!!");
        return(
          <div>
              <TextField
              <TextField
                  id="text-field-controlled"
                  textInput={this.state.textInput}
                  onChange={this.handleChange}
              />
              />
          </div>
        )
    }


    createTasksList(category, categoryName) {
        console.log
        return(
            <List style={{border: 'solid 3px white'}}>
            {category.map((task)=>{
                console.log("location is ", this.props.location);
                return(
                    <ListItem
                        primaryText={task.name}
                        key = {task.id}
                        onClick={()=>{
                            const pathToTask = "/"+categoryName+"/"+task.id;
                            if (this.props.location.pathname !== pathToTask) {
                            console.log("now were are here", this.props.location, this.props.match);
                            this.props.history.push(pathToTask);}}}
                    />
                )
            })}
            </List>
        )
    }


    render () {
        return(
            <div style={{gridArea: 'TaskList'}}>
                {this.createCategoryRouter()}
            </div>
            )
    }
}