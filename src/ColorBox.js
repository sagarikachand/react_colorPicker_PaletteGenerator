import React, { Component } from 'react';
// import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import {withStyles} from '@material-ui/styles';
import styles from './styles/ColorBoxStyles'



class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
    }

    changeCopyState = () => {
        this.setState({
            copied: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    copied: false
                })
            }, 1500);
        })
    }
    render() {

        const { name, background, paletteId, id, showingFullPalette ,classes } = this.props
        const { copied } = this.state
        const isDarkColor = chroma(background).luminance() <= 0.08
        const isLightColor = chroma(background).luminance() >= 0.07
        return (

            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBox} style={{ background }}>
                    <div style={{ background }}
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>Copied!</h1>
                        <p  className={classes.copyText}>{background}</p>
                    </div>
                   
                        <div className={classes.boxContent}>
                            <span className={ classes.colorName}>{name} </span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                
                    {showingFullPalette &&
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>more</span>
                        </Link>
                    }

                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);