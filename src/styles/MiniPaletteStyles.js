import { withTheme } from "@material-ui/styles";

export default {
    root: {
        background: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }

    },
    colors: {

        background: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        marginBottom: "-3.5px"
    },
    delete: {

    },
    deleteIcon: {
        color: "white",
        background: "#eb3d30",
        width: "20px",
        height: "20px",
        padding: "10px",
        position: "absolute",
        right: "0",
        top:"0",
        zIndex:10,
        opacity: 0,
        

    }
}