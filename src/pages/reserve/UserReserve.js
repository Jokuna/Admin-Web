import React, { useEffect } from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import qs from "query-string";
import { useDispatch, useSelector, batch } from "react-redux";
import { subscribeStore, unsubscribeAll, setStore } from "../store/storeActions";
import Grey from "@material-ui/core/colors/grey";
import MapViewer from "../../layouts/map_builder/MapViewer";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { VIEW_MODE } from "../../layouts/map_builder/util/const";
import { verifyToken } from "./ReserveActions";
import Container from "@material-ui/core/Container";

const UserReserve = ({ location }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { data, seatGroups } = useSelector(state => state.store);
    const { verified, loaded, user } = useSelector(state => state.reserve);
    
    useEffect(() => {
        let query = qs.parse(location.search);
        batch(() => {
            console.log('called');
            dispatch(verifyToken(query.user_token));
            dispatch(subscribeStore(query.sid));
            dispatch(setStore(query.sid));
        })


        return () => dispatch(unsubscribeAll());
    }, [location])



    if (!loaded || !data || !seatGroups || seatGroups.length <= 0) return (
        <Backdrop className={classes.Backdrop} open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    // if (!verified) return (
    //     <Container maxWidth="sm" className={classes.container}>
    //         <Typography variant="body1" align="center">
    //             Not a valid user token
    //         </Typography>
    //     </Container>
    // )

    return (
        <div className={classes.root}>
            <div className={classes.mapWrapper}>
                <Typography variant="body1" gutterBottom align="center">
                    {verified ? 
                        `${user.email}, please select a seat.` :
                        `User Token Not Valid`
                    }
                </Typography>
                <MapViewer
                    maps={data.maps}
                    beacons={data.beacons}
                    seatGroups={seatGroups}
                    drawerVisible={false}
                    mode={VIEW_MODE.Reserve}
                />
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(5)}px ${theme.spacing(1)}px`,
        height: '100vh',
        width: `calc(100vw - ${theme.spacing(2)}px)`,
        backgroundColor: Grey['100'],
        display: "flex"
    },
    mapWrapper: {
        margin: '0px auto'
    },
    Backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.primary.dark
    },
    container: {
        paddingTop: `${theme.spacing(3)}px`
    }
}))
export default UserReserve;