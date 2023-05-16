import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {deepOrange} from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import options from "./eventOptions"
import kpPhoto from './photos/k&p.png'
import nickFox from './photos/nickFox.png'
import sarahZ from './photos/Bootcamp_sarah.png'
import social_dance from './photos/social_dance.png'
import fridayPass from './photos/Friday Pass.png'


export default function OptionCard(props) {
    const [clicked, setClicked] = useState(false)
    let itemCount = props.itemCount
    const photoPath = props.photoPath

    //when selections array is updated change the state of add/remove on card if necessary
    useEffect(()=>{
        props.setItemCount(props.selections.length)
        let findSelected = false
        props.selections.forEach(selection => {
            if(selection.id === props.id){
                findSelected = true
            }
        })
        if(findSelected){
            setClicked(true)
        }
        else{
            setClicked(false)
        }
    },[props.selections])


    const handleIconClick = () => {
        if(clicked){
            setClicked(false)
            props.setItemCount(itemCount-= 1)
            removeSelection()
        }
        else{
            setClicked(true)
            props.setItemCount(itemCount+= 1)
            addSelection()
        }
    }

    const renderPhoto = () => {
        if(photoPath === 'kpPhoto'){
            return kpPhoto
        }
        else if(photoPath === 'nickFox'){
            return nickFox
        }
        else if(photoPath === 'sarahZ'){
            return sarahZ
        }
        else if(photoPath === 'social_dance'){
            return social_dance
        }
        else if(photoPath === 'friday_pass'){
            return fridayPass
        }
        return kpPhoto
    }

    const addSelection = () => {
        const selection = options.find(option => option.id === props.id)
        if(props.selections.length !== 0){
            props.setSelections([...props.selections, selection])
        }
        else{
            props.setSelections([selection])
        }
    }

    const removeSelection = () => {
        const updatedSelections = props.selections.filter(option => option.id !== props.id);
        props.setSelections([...updatedSelections])
    }

    return (
        <Card
            variant="outlined"
            className="MuiCard-root"
            sx={{
                    maxWidth: 345,
                    backgroundColor: '#9c32cc',
                    color: '#fff',
                    borderWidth: '1px',
                    borderColor: '#fff'
                }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: deepOrange[500],
                            fontSize: '.75rem'
                        }}>
                        {props.avatar}
                    </Avatar>
                }
                titleTypographyProps={{variant: 'h6', marginRight: '1rem'}}
                title={props.title}
                subheader={props.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={renderPhoto()}
                alt={props.altText}
            />
            <CardContent sx={{color: '#fff'}}>
                <Typography variant="body2" color="#fff">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button onClick={handleIconClick}>
                    <IconButton
                        aria-label="add"
                        sx={{color: '#fff'}}
                    >
                        {clicked ? <RemoveIcon/> : <AddIcon/> }
                    </IconButton>
                    {clicked ? "Remove" : "Add" }
                </Button>
                <Typography
                    variant="h5"
                    color="#fff"
                    marginLeft={'auto'}
                    marginRight={'1rem'}
                >
                    ${props.price}
                </Typography>
            </CardActions>
        </Card>
    );
}
