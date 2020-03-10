import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles'


class PaletteFormNav extends Component {
 
  state={
    formShowing: false
  }

  showForm =() =>{
    this.setState({formShowing: true})
  }

  hideForm =() =>{
    this.setState({formShowing: false})
  }

  render() {
    const { classes, open } = this.props
    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]:open,
              })}
              // If there are multiple classes to be added based on certain conditions
              //Then above syntax works well
              // className={classNames(classes.menuButton, open && classes.hide)}
            >
             <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
                        </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
         

            
            <Link to="/" className={classes.link}><Button variant="contained" color="secondary" className={classes.button}>
              Go Back</Button></Link>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.showForm}>
                    Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing &&
          <PaletteMetaForm  palettes={this.props.palettes} 
          handleSubmit={this.props.handleSubmit}
          hideForm={this.hideForm}/>
         }
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
