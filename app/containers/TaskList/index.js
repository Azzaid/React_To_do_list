/**
 * Created by Johanas on 31.01.2018.
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
    };

    createCategoryRouter() {
            let router = [];
            for (const taskCategory in this.props.taskList) {
                router.push(<Route path={'/'+taskCategory} component={
                    ()=>{
                        return(this.createTasksList(taskCategory))
                    }
                } key={"route" + taskCategory} />);
            }
                if (router.length !== 0) {
                    return(router)
                } else {
                return(null)
                }
    }

    createTaskRouter(category) {
        return(
        <Switch>
            {this.props.taskList[category].map((task)=>{
                return(
                    <Route
                        path={"/"+task.id}
                        component={this.redactTask()}
                    />
                )
            })}
            <Route component={this.createTasksList}/>
        </Switch>
        )
    }

    redactTask() {
        return(
          <p>Task choosen</p>
        )
    }


    createTasksList(category) {
        return(
            <List style={{border: 'solid 3px white'}}>
            {this.props.taskList[category].map((task)=>{
                return(
                    <ListItem
                        primaryText={task.name}
                        onClick={()=>{
                            this.props.history.push(this.props.location + '/' + this.props.id);}}
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