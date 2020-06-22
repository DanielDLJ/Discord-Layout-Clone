import React from "react";

import { Grid } from "./styles";
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
        </Grid>
    )
};

export default Layout;