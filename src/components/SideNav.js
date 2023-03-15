import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const SideNav = () => {

    const [open, setOpen] = React.useState({
        trending: false,
        topics: false
    });

    const handleClick = (listItem) => {
        setOpen((prevState) => ({ ...prevState, [listItem]: !prevState[listItem] }))
    };

    return (
        <List
            sx={{ width: '200px', maxWidth: 300, bgcolor: 'background.paper', height: '100vh', borderRight: '1px solid lightgrey' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={() => handleClick('trending')}>
                <ListItemText primary="Trending" />
                {open['trending'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open['trending']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton onClick={() => handleClick('topic')}>
                <ListItemText primary="Topic" />
                {open['topic'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open['topic']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}

export default SideNav;