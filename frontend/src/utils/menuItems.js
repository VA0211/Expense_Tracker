import {dashboard, expenses, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    // {
    //     id: 2,
    //     title: "",
    //     icon: "",
    //     link: "/dashboard",
    // },
    {
        id: 2,
        title: "Thu nhập",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Chi Tiêu",
        icon: expenses,
        link: "/dashboard",
    },
]