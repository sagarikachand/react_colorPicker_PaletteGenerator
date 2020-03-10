import React, { Component } from 'react';
import PaletteFormNav from './PaletteFormNav';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ColorPickerForm from './ColorPickerForm'
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';
import styles from './styles/NewPaletteFormStyles'


class NewPalletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: 'teal',
      colors: this.props.palettes[0].colors,
      newColorName: "",
      newPaletteName: ""

    };
  }



  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  // updateCurrentColor = (newColor) => {
  //   this.setState({
  //     currentColor: newColor.hex
  //   })
  // }

  addNewColor = (newColor) => {

    this.setState({ colors: [...this.state.colors, newColor] })
  }

  handleChange = (event) => {
    const newName = event.target.value;
    this.setState({
      [event.target.name]: newName
    });
    console.log(this.state)
  }

  savePalette = ({newPaletteName,emoji}) => {

    const newPalette = {
      paletteName: newPaletteName,
      emoji,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    }
    this.props.savePalette(newPalette)
    this.props.history.push("/")
  }

  removeColor = (name) => {
    this.setState({
      colors: this.state.colors.filter(c => c.name !== name)
    })
  }

  clearPalette = () => {
    this.setState({ colors: [] })
  }

  getRandomColor = () => {
    let allColors = (this.props.palettes.map(p => p.colors)).flat();

    const rand = Math.floor(Math.random() * allColors.length)
    const randomColor = allColors[rand]
    this.setState({ colors: [...this.state.colors, randomColor] })

  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav open={open}
          palettes={palettes}
          handleSubmit={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen} />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />
          <div className={classes.container}>
            <Typography variant="h4">Design your palette</Typography>
            <div className={classes.buttons}>
              <Button variant="contained" onClick={this.clearPalette} color="secondary" className={classes.button}>
                Clear Platette
          </Button>
              <Button variant="contained" onClick={this.getRandomColor} color="primary" className={classes.button} disabled={isPaletteFull}>
                Random Color
          </Button>
            </div>

            <ColorPickerForm isPaletteFull={isPaletteFull} 
              addNewColor={this.addNewColor} colors={colors} />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd} />


        </main>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(NewPalletteForm);

