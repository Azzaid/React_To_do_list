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

  showSubCategories(subCategories) {
    if (subCategories.length !== 0) {
      return (
        subCategories.map((category) => {
          return (<Category {...category} key={category.id}/>);
        })
      );
    }
  }

  showTasks (tasks) {
    if (tasks.length !== 0) {
      return (
        <div>
          {tasks.map((task) => {
            return (<Task {...task} key={task.id} />);
          })}
        </div>
      );
    }
  }

    render() {
        return (
            <div>
                <div>
                    <Link to={'/' + this.props.id}>
                        {this.props.name};
                    </Link>
                    {this.showSubCategories(this.props.subCategories)}
                </div>
                <div>
                    <Route exact path={'/' + this.props.id} component={this.showTasks} />
                </div>
            </div>
        );
    };
}