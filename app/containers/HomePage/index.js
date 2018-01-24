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


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function//
    constructor(props) {
      super(props);
      this.state = { tasksTotal: 3,
          tasksSolved: 1,
          categories: [ {id:"preMortem",
              name:"Pre Mortem",
                            subCategories: [],
                            tasks:[{id:"to_born",
                                    name:"To born",
                                    isFinished: true,
                                    description:"first you must born to die"},
                                    {id:"to_Live",
                                    isFinished: false,
                                    description:"then you must live to die"},]},
              {id:"Mortem",
                  name:"Mortem",
                  subCategories: [],
                  tasks:[{id:"to_born",
                      name:"To born",
                      isFinished: true,
                      description:"first you must born to die"},
                      {id:"to_Live",
                          isFinished: false,
                          description:"then you must live to die"},]},},
              {id:"postMortem",
                  name:"Post Mortem",
                  subCategories: [],
        tasks:[{id:"to_born",
            name:"To born",
            isFinished: true,
            description:"first you must born to die"},
            {id:"to_Live",
                isFinished: false,
                description:"then you must live to die"},]},]
      };
    }

  render() {
    return (
      <h1>
        This is homepage
      </h1>
    );
  }
}
