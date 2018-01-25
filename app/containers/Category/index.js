/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Link to={'/' + this.props.id}>
          {this.props.name};
        </Link>
        <div>
          {this.props.subCategories.map((category) => {
            return (
              <Category {...category} key={category.id}/>);
          })};
        </div>

      </div>
    );
  };
}