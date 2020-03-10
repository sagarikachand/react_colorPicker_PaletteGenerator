import sizes from './sizes'
export default {
    "navbar": {
      "background": "white",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "flex-start",
      "height": "6vh"
    },
    "logo": {
      "marginRight": "15px",
      "fontSize": "22px",
      "padding": "0 13px",
      "backgroundColor": "#eceff1",
      "height": "100%",
      "fontFamily": "Roboto",
      "display": "flex",
      "alignItems": "center",
      "& a":{
        "textDecoration": "none",
        "color": "black"
      },
      [sizes.down("xs")]:{
        display:"none"
      }
    },
  
    "slider": {
      "width": "340px",
      "margin": "0 10px",
      "display": "inline-block",
      "& .rc-slider-track": {
        "backgroundColor": "transparent !important"
      },
      " & .rc-slider-rail": {
        "height": "8px !important"
      },
      "& .rc-slider-handle,& .rc-slider-handle:active,& .rc-slider-handle:focus,& .rc-slider-handle:hover":{
        "backgroundColor": "green !important",
        "outline": "none !important",
        "border": "2px solid green !important",
        "boxShadow": "none !important",
        "height": "13px !important",
        "width": "13px !important",
        "marginTop": "-3px !important"
      },
      [sizes.down("md")]:{
        width:"150px"
      }

    },
    "select": {
      "marginLeft": "auto",
      "marginRight": "20px"
    }
  }