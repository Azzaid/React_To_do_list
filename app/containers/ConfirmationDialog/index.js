/**
 * Created by p.zamulko on 29.01.2018.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class TextInputDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        this.props.onSubmitFunction(this.props.targetId, this.props.targetArray);
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
                <RaisedButton label={this.props.buttonLabel} primary onClick={this.handleOpen} style={{dsplay : 'inline-block'}} />
                <Dialog
                    title={this.props.dialogLable}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                </Dialog>
            </div>
        );
    }
}