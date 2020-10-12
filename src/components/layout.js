import React from "react"
import { 
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    makeStyles
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { pink } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    aBar: {
        backgroundColor: pink[500],
    }
}))

const Layout = (props) => {
    const classes = useStyles()

    return (
        <>
            <AppBar className={`${classes.aBar}`} position="static" >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={`head-title ${classes.title}`}>
                        Cake Plaza
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                {props.children}
            </Container>
        </>
    )
}


export default Layout