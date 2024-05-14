import React from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import perfil from "assets/perfil.png";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },

    {
        text: "Orientado al cliente",
        icon: null,
    },

    {
        text: "Productos",
        icon: <ShoppingCartOutlined />,
    },

    {
        text: "Clientes",
        icon: <Groups2Outlined />,
    },

    {
        text: "Transacciones",
        icon: <ReceiptLongOutlined />,
    },

    {
        text: "Geografía",
        icon: <PublicOutlined />,
    },

    {
        text: "Ventas",
        icon: null,
    },

    {
        text: "Resumen",
        icon: <PointOfSaleOutlined />,
    },
    
    {
        text: "Resumen Diario",
        icon: <TodayOutlined />,
    },

    {
    
        text: "Resumen Mensual",
        icon: <CalendarMonthOutlined />,
    },

    {
        text: "Descripción General",
        icon: <PieChartOutlined />,
    },

    {
        text: "Gestión",
        icon: null,
    },
    
    {
        text: "Administrador",
        icon: <AdminPanelSettingsOutlined />,
    },

    {
        text: "Rendimiento",
        icon: <TrendingUpOutlined />,
    },
];

const Sidebar = ({
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
            <Drawer
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSixing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth,
                    },
                }}
            >
            <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant="h4" fontWeight="bold">
                                PANEL-REACT
                            </Typography>
                        </Box>

                        {!isNonMobile && (
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>

                <List>
                    {navItems.map(({ text, icon }) => {
                        if (!icon) {
                            return (
                                <Typography key={text} fontSize="18px" sx={{ m: "2.15rem 0 1.5rem 3rem" }}>
                                    {text}
                                </Typography>
                            );
                        }
                        
                        const lcText = text.toLowerCase();

                        return (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        navigate(`/${lcText}`);
                                        setActive(lcText);
                                    }}

                                    sx={{
                                        backgroundColor:
                                        active === lcText
                                            ? theme.palette.secondary[300]
                                            : "transparent",
                                        color:
                                        active === lcText
                                            ? theme.palette.primary[600]
                                            : theme.palette.secondary[100],
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            ml: "2rem",
                                            color:
                                            active === lcText
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[200],
                                        }}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                <ListItemText primary={text} />
                                
                                {active === lcText && (
                                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                                )}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>

        <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                <Box
                    component="img"
                    alt="profile"
                    src={perfil}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                />
                
                <Box textAlign="left">
                    <Typography
                        fontWeight="bold"
                        fontSize="0.9rem"
                        sx={{ color: theme.palette.secondary[100] }}
                    >
                        {user.name}
                    </Typography>
                
                    <Typography
                        fontSize="0.8rem"
                        sx={{ color: theme.palette.secondary[200] }}
                    >
                        {user.occupation}
                    </Typography>
                </Box>
                
                <SettingsOutlined
                    sx={{
                        color: theme.palette.secondary[300],
                        fontSize: "25px ",
                    }}
                />
            </FlexBetween>
        </Box>
        </Drawer>
        )}
        </Box>
    );
};

export default Sidebar;