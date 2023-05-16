import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import './App.css';
import Box from "@mui/material/Box";
import {useState} from "react";
import {pink} from "@mui/material/colors";

export default function OptionListItem(props) {

    const [isChecked, setIsChecked] = useState(false)

    const onListItemClick = () => {
        if (props.checkedSelections.length > 0) {
            if(isChecked){
                const updatedCheckedSelections = props.checkedSelections.filter(option => option !== props.id);
                props.setCheckedSelections([...updatedCheckedSelections])
                setIsChecked(false)
            }
            else if (!isChecked) {
                props.setCheckedSelections([...props.checkedSelections, props.id])
                setIsChecked(true)
            }
        } else {
            if (!isChecked) {
                props.setCheckedSelections([props.id])
                setIsChecked(true)
            }
        }

    }

    return (
        <ListItem>
            <ListItemButton
                role={undefined}
                dense
                onClick={onListItemClick}
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={isChecked}
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                </ListItemIcon>
                <ListItemText className='listItem' id={props.id + 'list'} primary={props.title}/>
                <Box sx={{display: 'flex'}}>
                    <ListItemText
                        id={props.id + 'listText'}
                        primary={`$ ${props.price}`}
                        sx={{flexDirection: 'row-reverse',}}
                    />
                </Box>
            </ListItemButton>
        </ListItem>
    )
}
