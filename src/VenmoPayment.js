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
    }

    return (
        <Collapse
            in={props.expanded}
            timeout="auto"
            unmountOnExit
        >
            <Box>
                <Paper
                    elevation={3}
                    sx={{justifyContent:"center", alignItems:"center",}}
                >
                    <CardMedia
                        component="img"
                        height="auto"
                        image={renderVenmoPhoto()}
                        alt={'altText'}
                    />
                </Paper>
            </Box>
        </Collapse>
    )
}
