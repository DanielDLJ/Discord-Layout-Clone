import React from "react";

import { Grid } from "./styles";
import ChannelData from '../ChannelData'
import UserList from '../UserList'
import UserInfo from '../UserInfo'
import ChannelList from '../ChannelList'
import ChannelInfo from '../ChannelInfo'
import ServerList from '../ServerList'
import ServerName from '../ServerName'

const Layout: React.FC = () =>{
    return(
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
            <UserInfo/>
            <UserList/>
            <ChannelData/>
        </Grid>
    )
};

export default Layout;