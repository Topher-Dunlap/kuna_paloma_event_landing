import * as React from 'react';
import {Collapse, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import './App.css';
import venmo_20 from './photos/venmo_20.jpg'
import venmo_55 from './photos/venmo_55.jpg'
import venmo_70 from './photos/venmo_70.jpg'
import venmo_85 from './photos/venmo_85.jpg'
import venmo_90 from './photos/venmo_90.jpg'
import venmo_125 from './photos/venmo_125.jpg'
import venmo_150 from './photos/venmo_150.jpg'
import venmo_155 from './photos/venmo_155.jpg'
import venmo_200 from './photos/venmo_200.jpg'
import venmo_220 from './photos/venmo_220.jpg'
import venmo_270 from './photos/venmo_270.jpg'
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function VenmoPayment(props) {

    const renderVenmoPhoto = () => {
        if(props.total === 20){
            return venmo_20
        }
        else if(props.total ===55){
            return venmo_55
        }
        else if(props.total === 70){
            return venmo_70
        }
        else if(props.total === 85){
            return venmo_85
        }
        else if(props.total === 90){
            return venmo_90
        }
        else if(props.total === 125){
            return venmo_125
        }
        else if(props.total === 150){
            return venmo_150
        }
        else if(props.total === 155){
            return venmo_155
        }
        else if(props.total === 200){
            return venmo_200
        }
        else if(props.total === 220){
            return venmo_220
        }
        else if(props.total === 270){
            return venmo_270
        }
        return 'not_found'
    }

    const comboDoesNotExist = renderVenmoPhoto()

    return (
        <Collapse
            in={props.expanded}
            timeout="auto"
            unmountOnExit
        >
            <Box>
                <Paper
                    elevation={0}
                    sx={{justifyContent:"center", alignItems:"center",}}
                >
                    {
                        comboDoesNotExist !== 'not_found' ?
                            <>
                                <Typography variant="subtitle2" padding="1.5rem" margin="2rem 0 0 0">
                                    Tap and hold QR code below to open link via browser or Venmo App
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={renderVenmoPhoto()}
                                    alt={'altText'}
                                />
                            </>
                        :
                            <Typography variant="h6" padding="1.5rem" color="red">
                                Unable to process venmo QR as one or more of your selections overlap during the event.
                                Please try removing an item and pressing payment again.
                                Otherwise reach out to Topher Dunlap on FB for specific questions.
                            </Typography>
                    }

                </Paper>
            </Box>
        </Collapse>
    )
}
