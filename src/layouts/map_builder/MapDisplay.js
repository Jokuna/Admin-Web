import React, { useState, useEffect } from 'react'
import useStyles from "@material-ui/core/styles/makeStyles";
import { MAP_BUILDER_HEIGHT } from "./util/const";
import Grey from "@material-ui/core/colors/grey";
import Seat from "./SeatItem";
import ButtonBase from '@material-ui/core/ButtonBase';
import { SEAT_SIZE, MAP_EVENTS } from "./util/const";
import { useDrop } from "react-dnd";

const MapDisplay = ({ data, seatGroups, handleEvents }) => {
    const classes = makeStyles();
    const [size, setSize] = useState({
        height: 0,
        width: 0,
        margin: 'auto',
    })
    const [, drop] = useDrop({
        accept: "seat",
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const x = Math.round(item.x + delta.x);
            const y = Math.round(item.y + delta.y);

            console.log(item);
            console.log(delta);
            moveSeat(item.id, x, y);
            return undefined;
        }
    });

    const moveSeat = (id, x, y) => {
        console.log(id, x, y);
        handleEvents({ type: MAP_EVENTS.UPDATE_SEAT_GROUP, data: { x, y, seat_id: id } });
    }
    useEffect(() => {
        const { height, width } = data;

        let margin = MAP_BUILDER_HEIGHT < height ? "0px" : `${(MAP_BUILDER_HEIGHT - height) / 2}px`;
        margin = margin + " auto";
        setSize({
            height, width, margin
        });

    }, [data])

    return (
        <div
            ref={drop}
            className={classes.root}
            style={{ ...size }}>
            {seatGroups && seatGroups.map((group, idx) => (
                <Seat idx={idx} key={idx} data={group} />
            ))}
        </div>

    )
}

const makeStyles = useStyles(theme => ({
    root: {
        backgroundColor: Grey['300'],
        overflow: 'auto',
        position: 'relative'
    }
}))
export default MapDisplay;