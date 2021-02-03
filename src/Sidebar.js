import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons"




function Sidebar() {
    return ( 
    <div className ="sidebar">
        <SidebarRow
            src = "https://scontent.flim16-1.fna.fbcdn.net/v/t1.0-1/p320x320/119117716_1161078287611745_3240477881518686838_n.jpg?_nc_cat=108&amp;ccb=2&amp;_nc_sid=7206a8&amp;_nc_eui2=AeHi7O2ADodV9VAEH5iiyHuN3IAH0eEidivcgAfR4SJ2K_LtdY1PisZ8MLkniGjDhuGak28i4R6RSL98-1-gMBa4&amp;_nc_ohc=AME-JQiIukYAX-bxtbr&amp;_nc_ht=scontent.flim16-1.fna&amp;tp=6&amp;oh=4635ef38ff296c383fc70f410414e7f9&amp;oe=5FEC259D"
            title = "Richard Vargas" 
        />
        <SidebarRow 
        Icon = {LocalHospitalIcon}
        title = "Centro de Información de COVID-19" 
        />
        <SidebarRow Icon = {EmojiFlagsIcon} title="Páginas" />
        <SidebarRow Icon = {PeopleIcon} title="Amigos" />
        <SidebarRow Icon = {ChatIcon} title="Messenger"/>
        <SidebarRow Icon = {StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon = {VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon = {ExpandMoreOutlined} title="Marketplace"/>
    </div>
    );
}

export default Sidebar
