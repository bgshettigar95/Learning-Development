import { IconButton } from "@mui/material";
import PostList from "../components/PostList";
import SideNav from "../components/SideNav";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Drawer from '@mui/material/Drawer';
import { useState } from "react";

const Home = () => {
    const [showDarwer, setShowDrawer] = useState(false);

    const toggleDrawer =
        (anchor, open) =>
            (event) => {
                if (
                    event?.type === 'keydown' &&
                    (event?.key === 'Tab' ||
                        event?.key === 'Shift')
                ) {
                    return;
                }

                setShowDrawer(open);
            };

    const sideMenu = (anchor) => {
        return <SideNav />
    };

    return <div style={{ display: 'flex' }}>
        <IconButton
            size="large"
            aria-label="filter categories"
            aria-controls="side-menu"
            aria-haspopup="true"
            sx={{ height: 'fit-content', marginTop: '2rem', padding: '5px', borderRadius: '0px', backgroundColor: 'aliceblue' }}
            onClick={toggleDrawer('left', true)}
        >
            <MenuOpenIcon />
        </IconButton>
        <Drawer
            anchor={'left'}
            open={showDarwer}
            onClose={toggleDrawer('left', false)}
        >
            {sideMenu('left')}
        </Drawer>
        <PostList />
    </div>
}

export default Home;