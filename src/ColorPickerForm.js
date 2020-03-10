import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import  styles from './styles/ColorPickerStyles'

class ColorPickerForm extends Component {
    
    state={
        currentColor: 'teal',
        newColorName:"",
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isNameUnique', (value) => {
          if (this.props.colors.some(c => c.name === value.toLowerCase())) {
            return false;
          }
          return true;
        });
    
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
          if (this.props.colors.some(c => c.color === this.state.currentColor)) {
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
    }

      updateCurrentColor = (newColor) => {
        this.setState({
          currentColor: newColor.hex
        })
      }

      handleSubmit= () =>{
        const newColorObj = {
            color:this.state.currentColor,
            name: this.state.newColorName
          }
          this.props.addNewColor(newColorObj)
          this.setState({newColorName :""})
      }

    render(){
        const {isPaletteFull , classes} = this.props
        const {currentColor  ,newColorName} =this.state
        return(
           <div>
                <ChromePicker color={currentColor} 
                              onChangeComplete={this.updateCurrentColor} 
                              className={classes.picker}/>
                <ValidatorForm
                  ref="form"
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}
                >
                  <TextValidator
                    label="Color name"
                    onChange={this.handleChange}
                    name="newColorName"
                    value={newColorName}
                    className={classes.colorNameInput}
                    validators={['required', 'isNameUnique', 'isColorUnique']}
                    errorMessages={['this field is required', 'Color name must be unique', 'Color already taken']}
                  />
                  <Button variant="contained"
                    type="submit"
                    className={classes.addColor}
                    style={{ 'background': isPaletteFull ? "grey" : currentColor }}
                    color="primary" 
                    disabled={isPaletteFull}
                  >
                    {isPaletteFull ? 'Palette Full' :'Add Color'}
              </Button>
                </ValidatorForm>
           </div>
        )
    }
}

export default withStyles(styles)( ColorPickerForm);