import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Searchbar from "../../../layout/LayoutAdmin/Topbar/Searchbar"
import "./Menu.scss"
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"

export default function StaffTable() {
    const [value, setValue] = React.useState("1")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

 
    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Passed" value="passed" />
                        <Tab label="Rejected" value="rejected" />
                    </TabList>
                </Box>
                <TabPanel value="passed">
                    <TableContainer component={Paper}>
                        <div className="search-bar" style={{ width: "300px" }}>
                            <Searchbar />
                        </div>
                        <Table
                            sx={{ minWidth: 450, width: "100%" }}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Order
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Date
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Customer
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Payment
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Status
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Price
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>

                        <div
                            className="pagination"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "1rem",
                                marginLeft: "auto",
                            }}
                        ></div>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="rejected">ss</TabPanel>
            </TabContext>
        </Box>
    )
}
