/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import Task from 'containers/Task/index';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {

        const ShowSubCategories = () => {
            if (this.props.subCategories.length !== 0) {
                return (
                    this.props.subCategories.map((category) => {
                        return (<Category {...category} key={category.id}/>);
                    })
                )
            }
        };

        const ShowTasks = () => {
            if (this.props.tasks.length !== 0) {
                return (
                    <div>
                        {this.props.tasks.map((task) => {
                        return (<Task {...task} key={task.id} />);
                    })}
                    </div>
                )
            }
        };

        return (
            <div>
                <div>
                    <Link to={'/' + this.props.id}>
                        {this.props.name};
                    </Link>
                    {ShowSubCategories(this.props.subCategories)}
                </div>
                <div>
                    <Route exact path={'/' + this.props.id} component={ShowTasks} />
                </div>
            </div>
        );
    };
}