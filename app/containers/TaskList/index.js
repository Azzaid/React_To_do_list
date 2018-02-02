/**
 * Created by Johanas on 31.01.2018.
 */
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import TaskModifyField from 'containers/TaskModifyField/index';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
    };

    createCategoryRouter() {
            let router = [];
            for (const categoryId in this.props.taskList) {
                let workArray = this.props.taskList[categoryId];
                console.log("now we got some", workArray);
                router.push(<Route path={'/'+categoryId} component={
                    ()=>{
                        return(this.createTaskRouter(workArray, categoryId))
                    }
                } key={"catRoute" + categoryId} />);
            }
                if (router.length !== 0) {
                    return(router)
                } else {
                return(null)
                }
    }

    createTaskRouter(category, categoryId) {
        return(
        <Switch>
            {category.map((task)=>{
                console.log("avaitFor", "/"+categoryId+"/"+task.id);
                return(
                    <Route
                        path={"/"+categoryId+"/"+task.id}
                        key={"taskRoute" + task.id}
                        component={()=>{
                            return(
                                <TaskModifyField
                                    homeArray={category}
                                    homeArrayId={categoryId}
                                    task={task}
                                    taskModifyFunction={this.props.taskModifyFunction}
                                    history={this.props.history}
                                />
                            )
                        }}
                    />
                )
            })}
            <Route component={()=>{return(
                this.createTasksList(category, categoryId)
            )}}/>
        </Switch>
        );
    }

    createTasksList(category, categoryName) {
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