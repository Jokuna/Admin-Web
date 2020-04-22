import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux"
import Grey from "@material-ui/core/colors/grey";

const AdminAuth = () => {
    const classes = useStyles();
    const authState = useSelector(state => state.auth);
    console.log(authState);
    return (
        <div className={classes.root}>
            <div className={classes.rootField}>
                <Typography variant="body1" className={classes.title}>
                    Realtime Seat Reservation
                </Typography>
                <TextField
                    className={classes.textField}
                    id="email"
                    label="email"
                    type="email"
                    variant="outlined" />
                <TextField
                    className={classes.textField}
                    id="password"
                    label="password"
                    type="password"
                    variant="outlined" />
                <Typography varaint="body1" className={classes.typoHint}>
                    This page can be accessed only by admin.
                </Typography>
                <div className={classes.rootTextBtns}>
                    <Typography>
                        <Link href="#" className={classes.link} onClick={e => e.preventDefault}>
                            Forgot Password?
                        </Link>
                        <Link href="#" className={classes.link} onClick={e => e.preventDefault}>
                            Sign Up
                        </Link>
                    </Typography>
                </div>
                <Button className={classes.button}
                    fullWidth
                    variant="contained"
                    color="primary"
                    disableElevation >
                    Sign In
                </Button>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Grey['100'], 
    },
    textField: {
        width: 300,
        margin: `${theme.spacing(1) / 2}px 0px`
    },
    rootField: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2), 
        backgroundColor: 'white',
        border: `1.5px solid ${Grey['200']}`
    },
    button: {
        marginTop: theme.spacing(3),
        height: 50,
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 600,
        textAlign: 'center',
        margin: `${theme.spacing(5)}px 0px`
    },
    rootTextBtns: {
        display: 'flex',
        marginTop: theme.spacing(1),
        maringBottm: theme.spacing(2),
        justifyContent: 'flex-end'
    },
    link: {
        marginLeft: theme.spacing(3),
        fontSize: '0.9rem',
        color: 'grey',
        "&:hover":{
            color: theme.palette.primary.main
        }
    },
    typoHint: {
        fontSize: '0.9rem',
        color: 'grey'
    }
}));

export default AdminAuth;