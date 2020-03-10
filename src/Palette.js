import React, { Component } from 'react';
import ColorBox from './ColorBox';
// import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles'
import styles from './styles/PaletteStyles'


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            colorFormat: 'hex'
        };
    }

    changeLevel = (level) => {
        console.log()
        this.setState({
            level
        })
    }

    changeColorFormat = (e) => {

        this.setState({
            colorFormat: e.target.value
        })
    }

    render() {
        const {classes}= this.props
        const { colors, paletteName, emoji ,id } = this.props.palette
        const { level, colorFormat } = this.state

        const colorBoxes = colors[level].map(c => {
            return <ColorBox
                key={c.name}
                background={c[colorFormat]}
                name={c.name}
                paletteId={id} 
                id={c.id}
                showingFullPalette={true} />
        })
        return (
            <div className={classes.Palette}>
                <Navbar level={level} onChangeLevel={this.changeLevel}
                    colorFormat={colorFormat} 
                    onChangeColorFormat={this.changeColorFormat}
                    showingAllColors={true} />
               
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
               <PaletteFooter emoji={emoji} paletteName={paletteName} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);