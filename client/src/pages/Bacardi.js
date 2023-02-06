import React from "react";
import Header from "../components/visuals/Header";
import { tokens } from "../theme";

import Bacardibottles from "../components/Brands/Bacardibottles";
import Bacardicard from "../components/Brands/Bacardicard";
import Bacardicampaigns from "../components/Brands/Bacardicampaigns"


//architecture
import { Box, useTheme } from "@mui/material";



//functiionality
const Goslings = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Bacardi" />
            </Box>

            <Bacardicard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Bacardicampaigns />
                <Bacardibottles />

            </Box>
        </Box>



    );
};

export default Goslings;
