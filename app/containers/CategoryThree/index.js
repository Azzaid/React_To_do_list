/**
 * Created by Johanas on 22.01.2018.
 */


import React from 'react';
import Category from 'containers/Category/index';

export default class CategoryThree extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        {
          this.props.categories.map((category) => {
            return (<Category {...category} />);
          })
        }
      </div>

    );
  };
}