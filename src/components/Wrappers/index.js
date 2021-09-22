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
export const ListItemTextExtended = ({primary, secondary, overline, primaryTypographyProps, overlineTypographyProps, ...props}) => {
    return (
        <ListItemText 
            {...props}
            primary={<div><Typography sx={{lineHeight: 0, ...overlineTypographyProps}} 
            variant="overline">{overline}</Typography><Typography sx={primaryTypographyProps}>{primary}</Typography></div>} 
            secondary={secondary} />
    )
}
