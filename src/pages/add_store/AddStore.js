import React, { useState } from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { ADD_STORE_STEPS } from "../../libs/const";
import StoreInformation from "../../layouts/store_information/StoreInformation";
import Grid from "@material-ui/core/Grid";

const AddStore = () => {
    const classes = useStyles();
    const [curStep, setCurStep] = useState(0);


    return (
        <div className={classes.root}>
            <Stepper activeStep={curStep} className={classes.stepper} alternativeLabel>
                {ADD_STORE_STEPS.map((label, idx) => (
                    <Step key={idx}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.contents}>
                {curStep === 0 && <StoreInformation />}
            </div>
            <div className={classes.btnRoot}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={4}>
                        <Button fullWidth className={classes.button} variant="contained" disableElevation>
                            Previous
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button fullWidth className={classes.button} variant="contained" disableElevation color="primary">
                            Next
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'center',
    },
    stepper: {
        background: 'none'
    },
    contents: {
        maxWidth: 500,
        margin: 'auto',
    },
    btnRoot: {
        textAlign: 'right',
        paddingBottom: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
}))
export default AddStore;