import photo from './photos/Zoukapolis_K_P.png';
import './App.css';
import {Typography} from "@mui/material";
import options from "./eventOptions"
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@emotion/react";
import OptionCard from "./OptionCard";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from '@mui/material/styles';
import * as React from 'react';
import {pink} from "@mui/material/colors";
import Cart from "./Cart";
import FloatingCartNav from "./FloatingCartNav";
import { useRef, useState} from "react";

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
})

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function App() {

    const [expandedCart, setExpandedCart] = useState(false)
    const [itemCount, setItemCount] = useState(0)
    const [selections, setSelections] = useState([])

    let cartRef = useRef()

    const handleExpandCartClick = () => {
        setExpandedCart(!expandedCart);

    };

    const executeScrollToCart = () => {
        if (cartRef.current) {
            window.scrollTo({behavior: 'smooth', top: cartRef.current.offsetTop})
        }
    }

    const cardOptionsMap = options.map(option => {
        return (
            <OptionCard
                key={option.id}
                id={option.id}
                price={option.price}
                title={option.title}
                avatar={option.avatar}
                dates={option.dates}
                description={option.description}
                photoPath={option.photoPath}
                setItemCount={setItemCount}
                itemCount={itemCount}
                setSelections={setSelections}
                selections={selections}
            />
        )
    })

    return (
        <div className="App">
            <FloatingCartNav
                handleExpandClick={handleExpandCartClick}
                executeScrollToCart={executeScrollToCart}
                itemCount={itemCount}
            />
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <img
                        src={photo}
                         className="App-photo-main"
                         alt="logo"
                    />
                    <div className="buttonMargin">
                        <Typography variant="h2">
                            Weekend Options
                        </Typography>
                    </div>
                    {cardOptionsMap}
                </header>
                <ExpandMore
                    expand={expandedCart}
                    onClick={handleExpandCartClick}
                    aria-expanded={expandedCart}
                    aria-label="show more"
                >
                    <ShoppingCartIcon
                        sx={{color: pink[500]}}
                        fontSize="large"
                        onClick={executeScrollToCart}
                    />
                </ExpandMore>
                <Cart
                    cartRef={cartRef}
                    expanded={expandedCart}
                    setSelections={setSelections}
                    selections={selections}
                    itemCount={itemCount}
                    setItemCount={setItemCount}
                />
            </ThemeProvider>
        </div>
    )
}

export default App;
