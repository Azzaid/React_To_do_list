/**
 * Created by Johanas on 26.01.2018.
 */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';


export default class TextInputDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            textInput:'New category aded',
        };
    }

    displayButton() {
        if (this.props.iconButton) {
            return(
                <IconButton
                    children = {<FontIcon className="material-icons">{this.props.buttonIcon}</FontIcon>}
                    onClick={this.handleOpen}
                />
            )
        } else {
            return(
                <RaisedButton
                    label={this.props.buttonLabel}
                    primary
                    onClick={this.handleOpen}
                />
            )
        }
    }


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        this.props.onSubmitFunction(this.state.textInput, this.props.targetArray, this.props.targetId);
        this.setState({open: false});
    };

    handleChange = (event) => {
        this.setState({
            textInput: event.target.value,
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <div>
                {this.displayButton()}

                <Dialog
                    title={this.props.dialogLable}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField
                        id="text-field-controlled"
                        textInput={this.state.textInput}
                        onChange={this.handleChange}
                    />
                </Dialog>
            </div>
        );
    }
}