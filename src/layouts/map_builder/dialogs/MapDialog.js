import React, { useState } from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MAP_DIALOGS } from "../util/const";

const MapDialog = ({ open, handleDialog }) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        height: '',
        width: ''
    })
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }
    return (
        <Dialog
            maxWidth="xs"
            fullWidth
            open={open}
            onClose={() => handleDialog({ type: MAP_DIALOGS.CLOSE_MAP })}
        >
            <DialogTitle>Create a new map</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter name and size of a new map.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name of a map"
                    value={values.name}
                    fullWidth
                    onChange={handleChange}
                />
                <div className={classes.sizeRoot}>
                    <TextField
                        margin="dense"
                        id="height"
                        label="Height"
                        type="number"
                        className={classes.sizeText}
                        style={{marginRight: 8}}
                        value={values.height}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="width"
                        label="Width"
                        type="number"
                        className={classes.sizeText}
                        style={{marginLeft: 8}}
                        value={values.width}
                        onChange={handleChange}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleDialog({ type: MAP_DIALOGS.CLOSE_MAP })}>
                    Cancel
                </Button>
                <Button color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const useStyles = makeStyles(theme => ({
    sizeRoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sizeText: {
        flex: 1,
    }
}))

export default MapDialog;