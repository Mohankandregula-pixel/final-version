import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People';
import DraftsIcon from '@material-ui/icons/Drafts';
import DescriptionIcon from '@material-ui/icons/Description';

export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title:"Users",
        icon: <PeopleIcon />,
        link: "/admin/about"
    },
    {
        title:"Posts",
        icon: <DraftsIcon />,
        link: "/admin/post"
    },
    {
        title:"Resources",
        icon: < DescriptionIcon/>,
        link: "/admin/resource"
    },
]