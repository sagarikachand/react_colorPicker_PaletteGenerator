import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'


class PaletteMetaForm extends Component {

    constructor() {
        super();
        this.state = {
            stage: "form",
            newPaletteName: ""
        }
    }


    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            if (this.props.palettes.some(p => p.paletteName === this.state.newPaletteName)) {
                return false;
            }
            return true;
        });
    }

    handleChange = (event) => {
        const newName = event.target.value;
        this.setState({
            [event.target.name]: newName
        });
        console.log(this.state)
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    changeStage=() =>{
        this.setState({
            stage:"emoji"
        })
    }

    savePalette=(emoji)=>{
      this.props.handleSubmit({
        newPaletteName: this.state.newPaletteName,
        emoji:emoji.native
      })
    }

    render() {

        return (
            <div>
                <Dialog  open={this.state.stage==='emoji'}>
                    <Picker title="Pick a Palette Emoji" onSelect={this.savePalette} />
                </Dialog>
              
                <Dialog
                    open={this.state.stage==='form'}
                    onClose={this.props.hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palet Name</DialogTitle>
                    {/* <ValidatorForm onSubmit={() => this.props.handleSubmit(this.state.newPaletteName)}> */}
                    <ValidatorForm onSubmit={this.changeStage}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your Palette. Make sure its unique!
                </DialogContentText>
              

                            <TextValidator label="Color name"
                                onChange={this.handleChange}
                                name="newPaletteName"
                                value={this.state.newPaletteName}
                                fullWidth
                                margin="normal"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['this field is required', 'Palette name already taken']} />



                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.props.hideForm} color="primary">
                                Cancel
                     </Button>
                            <Button variant="contained" color="secondary" type="submit">
                                Save Platette
                   </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;