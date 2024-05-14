import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
    const [view, setView] = useState("units");

    return (
        <Box m="1.5rem 2.5rem">
            <Header
                title="DESCRIPCIÓN GENERAL"
                subtitle="Descripción General de los Ingresos y Beneficios Generales"
            />

            <Box height="75vh">
                <FormControl sx={{ mt: "1rem" }}>
                <InputLabel>View</InputLabel>
                <Select
                    value={view}
                    label="View"
                    onChange={(e) => setView(e.target.value)}
                >
                    <MenuItem value="sales">Ventas</MenuItem>
                    <MenuItem value="units">Unidades</MenuItem>
                </Select>
                </FormControl>
                <OverviewChart view={view} />
            </Box>
        </Box>
    );
    };

export default Overview;