# mui-listitem-extended 🪜
[![Tests](https://github.com/adamwattis/mui-listitem-extended/actions/workflows/main.yml/badge.svg)](https://github.com/adamwattis/mui-listitem-extended/actions/workflows/main.yml)
Helper components to extend the functionality of Mui's ListItem
* Works with [Mui](https://mui.com/) Material UI
* Add Overline text to a ListItem
* Add two components to ListItemSecondaryAction

## Installation and use
Install in your React app:
```
npm install mui-listitem-extended
```
Import the extended components:
```
import { ListItemTextExtended, ListItemSecondaryActionExtended } from 'mui-listitem-extended'
```
You can then use the components exactly the same as you would the regular ListItemTest and ListItemSecondaryAction components - with the added benefit of having a ***third, Overline text field***, and room for ***two actions*** (IconButton, Switch, etc.):
```
<ListItem>
    <ListItemAvatar>
        <Avatar>
            <Image />
        </Avatar>
    </ListItemAvatar>
    <ListItemTextExtended 
        overline="new contact"
        primary="(123) 456-7890"
        secondary="Jan 9, 2021" />
    <ListItemSecondaryAction>
        <IconButton>
            <Inbox/>
        </IconButton>
        <IconButton>
            <Comment />
        </IconButton>
    </ListItemSecondaryAction>
</ListItem>
```
The above snippet will render:
![Something](https://imgur.com/C687a60.jpg)

## License
Licensed under the MIT License