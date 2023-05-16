import * as React from 'react';
import {Button, Collapse, Divider, Paper} from "@mui/material";
import List from '@mui/material/List';
import OptionListItem from './OptionListItem'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";
import './App.css';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import VenmoPayment from "./VenmoPayment";


export default function Cart(props) {

    const [checkedSelections, setCheckedSelections] = useState([])
    const [expandedVenmo, setExpandedVenmo] = useState(false)

    const handleExpandVenmoPaymentClick = () => {
        setExpandedVenmo(!expandedVenmo);
    };

    useEffect(() => {
        setExpandedVenmo(false)
    }, [props.selections])

    const cartSelections = props.selections.map(selection => {
        return (
            <>
                <OptionListItem
                    key={selection.id + "listItem"}
                    ref={props.cartRef}
                    id={selection.id}
                    title={selection.title}
                    price={selection.price}
                    selections={props.selections}
                    setSelections={props.setSelections}
                    itemCount={props.itemCount}
                    setItemCount={props.setItemCount}
                    checkedSelections={checkedSelections}
                    setCheckedSelections={setCheckedSelections}
                />
                <Divider/>
            </>
        )
    })

    const renderListItems = () => {
        if (props.selections.length > 0) {
            return (
                <Box>
                    {cartSelections}
                    {/*total list item*/}
                    <ListItem key={'listTotal'}>
                        <ListItemButton role={undefined} dense>
                            <ListItemText
                                primary={'Total'}
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            />
                            <Box sx={{display: 'flex'}}>
                                <ListItemText
                                    id={'listTotal'}
                                    primary={`$ ${calculateSum(props.selections, 'price')}`}
                                    sx={{
                                        flexDirection: 'row-reverse',
                                        fontWeight: 'bold'
                                    }}
                                />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                    <VenmoPayment
                        expanded={expandedVenmo}
                        total={calculateSum(props.selections, 'price')}
                    />
                    <Button
                        size="large"
                        variant="contained"
                        disableRipple="true"
                        onClick={handleExpandVenmoPaymentClick}
                        sx={{
                            bgcolor: '#9c32cc',
                            color: '#fff',
                            borderWidth: '1px',
                            borderColor: '#9c32cc',
                            margin: '2rem 0'
                        }}
                    >
                        Venmo Payment
                    </Button>
                </Box>
            )
        }
        return (
            <Typography variant="h5">
                Cart Is Empty.
            </Typography>
        )
    }

    const renderRemoveButton = () => {
        if (checkedSelections.length > 0) {
            return (
                <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DeleteIcon/>}
                    sx={{
                        color: 'red',
                        borderWidth: '1px',
                        borderColor: 'red'
                    }}
                    onClick={removeCheckedSelections}
                >
                    Remove Selections
                </Button>
            )
        } else {
            return (
                <Typography>
                    Select Item Below To Remove
                </Typography>
            )
        }
    }

    function calculateSum(array, property) {
        const total = array.reduce((accumulator, object) => {
            return accumulator + object[property]
        }, 0);
        return total
    }

    const removeCheckedSelections = () => {
        if (checkedSelections.length > 0) {
            checkedSelections.forEach(id => {
                const updatedSelections = props.selections.filter(option => option.id !== id);
                props.setSelections([...updatedSelections])
            })
            setCheckedSelections([])
        }
    }

    return (
        <Collapse
            in={props.expanded}
            timeout="auto"
            unmountOnExit
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    gridTemplateColumns: {md: '1fr 1fr'},
                    gap: 2,
                }}
            >
                <Box>
                    {renderRemoveButton()}
                </Box>
                <Paper
                    elevation={3}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <List
                        ref={props.cartRef}
                        sx={{
                            display: 'table-cell',
                            width: '35rem',
                            bgcolor: 'background.paper'
                        }}
                    >
                        {renderListItems()}
                    </List>
                </Paper>
            </Box>
        </Collapse>
    )
}
