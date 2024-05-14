import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetUserPerformanceQuery } from 'state/api';
import { DataGrid } from '@mui/x-data-grid';
import Header from 'components/Header';
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

const Performance = () => {
    const theme = useTheme();
    const userId = useSelector((state) => state.global.userId)
    const {data, isLoading} = useGetUserPerformanceQuery(userId);

    const columns = [

        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },

        {
            field: "userId",
            headerName: "ID de Usuario",
            flex: 1,
        },

        {
            field: "createdAt",
            headerName: "Fecha",
            flex: 1,
        },

        {
            field: "products",
            headerName: "Número de Productos",
            flex: 0.7,
            sortable: false,
            renderCell: (params) => params.value.length,
        },

        {
            field: "cost",
            headerName: "Costo",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
    
    ]

    return (
        <Box m="1.5rem 2.5rem" >
            <Header title="RENDIMIENTO" subtitle="Realice un Seguimiento del Rendimiento de sus Ventas de Afiliados aquí" />

            <Box
                mt="40px"
                height="82vh"
                width="auto"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },

                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none",
                    },

                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },

                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none",
                    },

                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={ isLoading || !data }
                    getRowId={(row) => row._id}
                    rows={(data && data.sales) || []}
                    columns={columns}
                    slots={{ ColumnMenu: CustomColumnMenu }}
                />
            </Box>
        </Box>
    )
}

export default Performance