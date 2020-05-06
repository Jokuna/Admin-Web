import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SeatIcon from "@material-ui/icons/EventSeat";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import EditIcon from "@material-ui/icons/Edit";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import RemoveLocationIcon from "@material-ui/icons/LocationOff";
import Tooltip from "@material-ui/core/Tooltip";
import { MAP_DIALOGS } from "./util/const";

const MapToolbar = ({ handleDialog, mapIdx }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ButtonGroup className={classes.group} size="small">
                <Tooltip title="Add a new map">
                    <Button onClick={() => handleDialog({ type: MAP_DIALOGS.OPEN_MAP })}>
                        <AddLocationIcon />
                    </Button>
                </Tooltip>
                <Tooltip title="Edit selected map">
                    <Button disabled={mapIdx >= 0 ? false : true}>
                        <EditLocationIcon />
                    </Button>
                </Tooltip>
                <Tooltip title="Remove selected map">
                    <Button disabled={mapIdx >= 0 ? false : true}>
                        <RemoveLocationIcon />
                    </Button>
                </Tooltip>
            </ButtonGroup>
            <ButtonGroup className={classes.group} size="small">
                <Tooltip title="Add a seat">
                    <Button
                        disabled={mapIdx >= 0 ? false : true}
                        onClick={() => handleDialog({ type: MAP_DIALOGS.OPEN_SEAT })}>
                        <SeatIcon />
                    </Button>
                </Tooltip>
                <Tooltip title="Rotate seat to left">
                    <Button
                        disabled={mapIdx >= 0 ? false : true}
                    >
                        <RotateLeftIcon />
                    </Button>
                </Tooltip>
                <Tooltip title="Rotate seat to right">
                    <Button
                        disabled={mapIdx >= 0 ? false : true}
                    >
                        <RotateRightIcon />
                    </Button>
                </Tooltip>
                <Tooltip title="Edit selected seat">
                    <Button
                        disabled={mapIdx >= 0 ? false : true}
                    >
                        <EditIcon />
                    </Button>
                </Tooltip>

            </ButtonGroup>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: theme.spacing(1),
    },
    group: {
        marginRight: theme.spacing(1),
    }
}))
export default MapToolbar