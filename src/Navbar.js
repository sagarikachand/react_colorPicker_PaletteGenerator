import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
// import './Navbar.css';
import Slider from 'rc-slider/lib/Slider';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link}  from 'react-router-dom'
import {withStyles} from '@material-ui/styles'
import styles from './styles/NavbarStyles'


  


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    onChangeLevel = (level) => {

        this.props.onChangeLevel(level)
    }

    onChangeColorFormat = (e) => {
        this.setState({
            open: true
        })
        this.props.onChangeColorFormat(e)
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const {level ,colorFormat ,classes} = this.props
        let open = this.state.open
        return (
            <header className={classes.navbar}>
                <div className={classes.logo}>
                    <Link to='/'>reactcolorpicker</Link>
                </div>
               {this.props.showingAllColors && 
                <div className="slider-conatiner">
                    <span>Level : {level}</span>
                    <div className={classes.slider}>

                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.onChangeLevel} />
                    </div>
                </div>
               }
                
                <div className={classes.select}>
                    <Select
                        onChange={this.onChangeColorFormat}
                        value={colorFormat}
                    >
                        <MenuItem value={'hex'}>Hex - #ffffff</MenuItem>
                        <MenuItem value={'rgb'}>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value={'rgba'}>RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>

                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Format changed.</span>}
                    action={[

                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            className="close"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />



            </header>
        );
    }
}

export default withStyles(styles)(Navbar);