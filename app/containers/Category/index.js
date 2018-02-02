/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {ListItem} from 'material-ui/List';
import TextInputDialog from 'containers/TextInputDialog/index';
import ConfirmationDialog from 'containers/ConfirmationDialog/index';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';


export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          focused:false,
        }
    };
    componentWillReceiveProps(){
      if (this.props.location.pathname !== ('/'+this.props.id)) {
        this.setState({
          focused:true,
        })
      } else {
        this.setState({
          focused:false,
        })
      }
    }

    showSubCategories() {
        const subCategories = this.props.categories;
        if (subCategories.length !== 0) {
            return (
                subCategories.map((subCategory) => {
                    return (<Category {...subCategory} key={subCategory.id} homeArray={this.props.categories}
                                      addCategoryFunction={this.props.addCategoryFunction}
                                      deleteItemFunction={this.props.deleteItemFunction}
                                      addTaskFunction={this.props.addTaskFunction}
                                      editNameFunction={this.props.editNameFunction}
                                      moveTaskFunction={this.props.moveTaskFunction}
                                      markCategoryAsDoneFunction={this.props.markCategoryAsDoneFunction}
                                      history={this.props.history}
                                      location={this.props.location}
                    />);
                })
            );
        } else {
            return (null)
        }
    }

    render() {
        return (
            <ListItem
                primaryText={this.props.name}
                initiallyOpen
                onClick={()=>{if (this.props.location.pathname !== ('/'+this.props.id)) {
                    console.log("now were are here", this.props.location, this.props.match);
                    this.props.history.push('/'+this.props.id);}}}
                nestedListStyle={{marginLeft: '40px', display: 'inline-block'}}
                isKeyboardFocused={this.state.focused}
                leftIcon={<Checkbox
                    checked={this.props.isFinished}
                    onCheck={this.props.markCategoryAsDoneFunction}
                />}
                nestedItems={[
                    <div>
                    <Switch>
                        <Route path={'/:currentCategoryId/:currentTaskId'} component={
                            (props)=>{
                              return(
                                <RaisedButton
                                  label={"move task"}
                                  primary
                                  onClick={
                                    ()=> {
                                      this.props.moveTaskFunction(props.match.params.currentCategoryId, this.props.id, props.match.params.currentTaskId);
                                      this.props.history.push('/'+this.props.id+'/'+props.match.params.currentTaskId);
                                    }
                                  }
                                />
                              )
                            }
                        }/>
                        <Route component={()=>{return(
                        <div>
                            <TextInputDialog
                                buttonIcon={'home'}
                                buttonLabel="Add category"
                                onSubmitFunction={this.props.addCategoryFunction}
                                targetArray={this.props.categories}
                                dialogLable="Enter new name"
                            />
                            <ConfirmationDialog
                                buttonLabel="Delete category" onSubmitFunction={this.props.deleteItemFunction}
                                targetId = {this.props.id}
                                targetArray={this.props.homeArray} dialogLable={"Really delete? " + this.props.name}
                            />
                            <TextInputDialog
                                buttonLabel="Rename" onSubmitFunction={this.props.editNameFunction}
                                targetId = {this.props.id}
                                targetArray={this.props.homeArray} dialogLable="Enter new name"
                            />
                            <TextInputDialog
                                buttonLabel="Add task" onSubmitFunction={this.props.addTaskFunction}
                                targetId = {this.props.id}
                                targetArray={this.props.tasks}
                                dialogLable="Enter new name"
                            />
                        </div>
                        )}}/>
                    </Switch>
                    {this.showSubCategories()}
                    </div>
                    ]
                }
            />
        )
    };
}