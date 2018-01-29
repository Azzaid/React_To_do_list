/**
 * Created by Johanas on 24.01.2018.
 */
import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import TextInputDialog from 'containers/TextInputDialog/index';
import ConfirmationDialog from 'containers/ConfirmationDialog/index';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    };

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
                onClick={()=>{return(
                    <Redirect to={"/" + this.props.id}/>
                )}}
                nestedListStyle={{marginLeft: '40px'}}
                nestedItems={[
                    <div>
                        <TextInputDialog
                            buttonLabel="Add category" onSubmitFunction={this.props.addCategoryFunction}
                            targetArray={this.props.categories} dialogLable="Enter new name"
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
                        {this.showSubCategories()}
                    </div>
                ]
                }
            />
        )
    };
}