import React from "react";

import { Grid } from "./styles";
import ChannelInfo from '../ChannelInfo'
import ServerList from '../ServerList'
import ServerName from '../ServerName'

const Layout: React.FC = () =>{
    return(
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
        </Grid>
    )
};

export default Layout;