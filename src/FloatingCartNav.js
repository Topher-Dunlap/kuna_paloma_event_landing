import * as React from 'react';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid #fff`,
        padding: '0 4px',
    },
}));

export default function FloatingCartNav(props) {
    const onClick = async () => {
        await props.handleExpandClick()
        props.executeScrollToCart()
    }
    return (
        <Box
            style={{
                position: 'fixed',
                display: 'flex',
            }}
        >
            <IconButton
                aria-label="cart"
                onClick={onClick}
            >
                <StyledBadge
                    badgeContent={props.itemCount}
                    color="secondary"
                    sx={{
                        right: -3,
                        top: 13,
                        border: `2px solid`,
                        color: '#fff',
                        padding: '0 4px',
                    }}
                >
                    <ShoppingCartIcon sx={{ fontSize: 35 }}/>
                </StyledBadge>
            </IconButton>
        </Box>
    );
}
