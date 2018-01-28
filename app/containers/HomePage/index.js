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
import {List} from 'material-ui/List';

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
          categories: [{
          id: "IntoPreMortem",
          name: "Inside Pre Mortem",
          categories: [],
          tasks: [],
        }, {
          id: "IntoPreMortem2",
          name: "Inside Pre Mortem 2",
              categories: [],
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
            categories: [],
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
            categories: [],
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
              categories: [],
              tasks: [],
          }
      );
  }

  addCategory(newCategoryName, targetArray) {
      console.log(targetArray);
      targetArray.push(this.makeCategoryFromName(newCategoryName));
      this.setState(this.updatedState);
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
      this.updatedState = this.state;
    return (
      <div>
          <TextInputDialog buttonLabel="Add category" onSubmitFunction={this.addCategory} targetArray={this.updatedState.categories} dialogLable="Enter new name" />
          <List>
              {this.updatedState.categories.map((category) => {
                  return (<Category {...category} key={category.id} homeArray={this.updatedState.categories} addCategoryFunction={this.addCategory} />);})};
          </List>
      </div>
    );
  }
}
