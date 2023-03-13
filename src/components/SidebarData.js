import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { icons } from 'react-icons';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Data Analytics",
        path: "/data-analytics",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Intents",
        path: "/intents",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Entities",
        path: "/entities",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Products",
        path: "/products",
        icons: <FaIcons.FaCartPlus />,
        cName: "nav-text",
    },
];