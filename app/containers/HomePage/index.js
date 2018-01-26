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
import TextInputDialog from 'containers/TextInputDialog/index';
import {List, ListItem} from 'material-ui/List';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function//
  constructor(props) {
    super(props);

    this.addCategory = this.addCategory.bind(this);

    this.state = {
      tasksTotal: 3,
      tasksSolved: 1,
      categories: [{
        id: "preMortem",
        name: "Pre Mortem",
        subCategories: [{
          id: "IntoPreMortem",
          name: "Inside Pre Mortem",
          subCategories: [],
          tasks: [],
        }, {
          id: "IntoPreMortem2",
          name: "Inside Pre Mortem 2",
          subCategories: [],
          tasks: []
        }],
        tasks: [{
          id: "to_born",
          name: "To born",
          isFinished: true,
          description: "first you must born to die"
        }, {
          id: "to_live",
            name:"To live",
          isFinished: false,
          description: "then you must live to die"
        }
        ]
      },
        {
          id: "Mortem",
          name: "Mortem",
          subCategories: [],
          tasks: [{
            id: "to_born",
            name: "To born",
            isFinished: true,
            description: "first you must born to die"
          }, {
            id: "to_Live",
            isFinished: false,
            description: "then you must live to die"
          }
          ]
        },
        {
          id: "postMortem",
          name: "Post Mortem",
          subCategories: [],
          tasks: [{
            id: "to_born",
            name: "To born",
            isFinished: true,
            description: "first you must born to die"
          },
            {
              id: "to_Live",
              isFinished: false,
              description: "then you must live to die"
            }
          ]
        }
      ]
    };
  }

  makeCategoryFromName(newCategoryName) {
      return(
          {
              id: encodeURI(newCategoryName),
              name: newCategoryName,
              subCategories: [],
              tasks: [],
          }
      );
  }

  addCategory(newCategoryName) {
      this.updatedState = this.state;
      this.updatedState.categories.push(this.makeCategoryFromName(newCategoryName));
      this.setState(this.updatedState);
      console.log(this.state);
  }

  deleteCategory

  editCategory

  addTask() {
}

  deleteTask

  markTaskAsDone

  moveTask

  editTask

  render() {
    return (
      <div>
        <h1>
          This is homepage
        </h1>
          <TextInputDialog buttonLabel="Add category" onSubmitFunction={this.addCategory} dialogLable="Enter new name" />
          <List>
              {this.state.categories.map((category) => {
                  return (<Category {...category} key={category.id} />);})};
          </List>
      </div>
    );
  }
}
