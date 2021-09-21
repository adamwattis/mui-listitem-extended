import React from 'react'
import { 
    ListItemText, 
    Box, 
    Typography 
} from '@mui/material'
 
export const ListItemSecondaryActionExtended = ({children, ...props}) => {
    return (
        <Box {...props} sx={{ display: 'flex', gap: 2, alignItems: 'center' }} >
            {children}
        </Box>
    )
}
export const ListItemTextExtended = ({primary, secondary, overline, ...props}) => {

    return (
        <ListItemText 
            {...props}
            primary={<div><Typography style={{lineHeight: 0}} 
            variant="overline">{overline}</Typography><Typography>{primary}</Typography></div>} 
            secondary={secondary} />
    )
}
