import React from "react";

import { Grid } from "./styles";
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
        </Grid>
    )
};

export default Layout;