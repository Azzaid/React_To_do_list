/**
 * Created by Johanas on 31.01.2018.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import {ListItem} from 'material-ui/List';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    };

    createTasksRouter() {
        if (this.props.taskList.length !== 0) {
            let router = [];
            for (const taskCategory in this.props.taskList) {
                router.push(<Route path={'/'+taskCategory} component={this.createTasksList(taskCategory)} key={"route" + taskCategory} />);
            }
            return(
                router
            )
        } else {
            return (
                <ListItem
                    primaryText={'No tasks sheduled'}
                />
            )
        }
    }

    createTasksList(category) {
        return(
            this.props.taskList[category].map(()=>{
                return(
                    <ListItem
                        primaryText={task.name}
                    />
                )
            })
        )
    }


    render () {
        this.createTasksRouter();
    }
}