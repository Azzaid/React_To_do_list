/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Switch, Route, Redirect, Link} from 'react-router-dom';

import Task from 'containers/Task/index';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  };

  showSubCategories() {
    const { subCategories } = this.props;

    if (subCategories.length !== 0) {
      return (
        <ListItem
          primaryText={this.props.name}
          initiallyOpen
          nestedItems={subCategories.map((subCategory) => {
            return (<Category {...subCategory} key={subCategory.id}/>);
          })}
        />

      );
    } else {
      console.log('No subCategories!');
      return (
        <ListItem
          primaryText={this.props.name}
          initiallyOpen
        />)
    }
  }

  showTasks(tasks) {
    if (tasks.length !== 0) {
      return (
        <ListItem {...this.createListProps} />
      );
    }
  }

  render() {
    return (
      <div>
        { this.showSubCategories() }
      </div>
    );
  }
}
