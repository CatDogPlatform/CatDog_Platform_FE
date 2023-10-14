import React, { useState } from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Searchbar from "../../../layout/LayoutAdmin/Topbar/Searchbar"
import "./Menu.scss"
import { DetailModal } from "./DetailButton"
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    TableBody,
    Pagination,
} from "@mui/material"

export default function StaffTable() {
    const [value, setValue] = React.useState("1")
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false)
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
    const [selectedCandidate, setSelectedCandidate] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedTab, setSelectedTab] = useState(0)

    const handleDetailClick = (row) => {
        setSelectedCandidate(row)
        setIsDetailModalOpen(true)
    }

    const handleApproveClick = () => {
        setIsApproveModalOpen(true)
    }

    const handleRejectClick = () => {
        setIsRejectModalOpen(true)
    }

    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false)
    }

    const handleCloseApproveModal = () => {
        setIsApproveModalOpen(false)
    }

    const handleCloseRejectModal = () => {
        setIsRejectModalOpen(false)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue)
    }

    React.useEffect(() => {
        setValue("passed")
    }, [])
    const fakeData = [
        {
            postId: 238878,
            date: "Apr 24, 2022 ",
            user: "User 1",
            status: "Passed",
        },
        {
            postId: 2,
            date: "Apr 24, 2022 ",
            user: "User 2",
            status: "Rejected",
        },
        {
            postId: 3,
            date: "Apr 24, 2022 ",
            user: "User 155",
            status: "Passed",
        },
        {
            postId: 4,
            date: "Apr 24, 2022 ",
            user: "User 45",
            status: "Passed",
        },
        {
            postId: 5,
            date: "Apr 24, 2022 ",
            user: "User 100",
            status: "Passed",
        },
        {
            postId: 5,
            date: "Apr 24, 2022 ",
            user: "User 100",
            status: "Passed",
        },
        {
            postId: 5,
            date: "Apr 24, 2022 ",
            user: "User 100",
            status: "Passed",
        },
    ]

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{ sx: { backgroundColor: "red" } }}
                    >
                        <Tab
                            className={`panel_one ${
                                value === "passed" ? "Mui-selected" : ""
                            }`}
                            label={<div>abc</div>}
                            value="passed"
                        />

                        <Tab label="Rejected" value="rejected" />
                    </TabList>
                </Box>
                <TabPanel value="passed">
                    <div
                        className="search-bar"
                        style={{ width: "520px", marginBottom: "20px" }}
                    >
                        <Searchbar />
                    </div>
                    <TableContainer component={Paper}>
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
                                        PostID
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
                                        User
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
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fakeData.map((row) => (
                                    <TableRow key={row.postId}>
                                        <TableCell style={{ fontWeight: "900" }}>
                                            {row.postId}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ fontWeight: "900" }}
                                        >
                                            {row.date}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ fontWeight: "900" }}
                                        >
                                            {row.user}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ fontWeight: "900" }}
                                        >
                                            {row.status}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() =>
                                                    handleDetailClick(row)
                                                }
                                                style={{
                                                    textTransform: "none",
                                                    color: "#259AE6",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Detail
                                            </Button>
                                            <Button
                                                // onClick={() =>
                                                //     handleDetail(row.postId)
                                                // }
                                                style={{
                                                    textTransform: "none",
                                                    color: "#34C543",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                // onClick={() =>
                                                //     handleReject(row.postId)
                                                // }
                                                style={{
                                                    textTransform: "none",
                                                    color: "#EB4335",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
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
                <TabPanel value="rejected">
                    <TableContainer component={Paper}>
                        <div className="search-bar" style={{ width: "400px" }}>
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
                                        PostID
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
                                        User
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
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fakeData.map((row) => (
                                    <TableRow key={row.postId}>
                                        <TableCell>{row.postId}</TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ fontWeight: "900" }}
                                        >
                                            {row.date}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ fontWeight: "900" }}
                                        >
                                            {row.user}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ fontWeight: "900" }}
                                        >
                                            {row.status}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                // onClick={() =>
                                                //     handleChangeStatus(row.postId)
                                                // }
                                                style={{
                                                    textTransform: "none",
                                                    color: "#259AE6",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Detail
                                            </Button>
                                            <Button
                                                // onClick={() =>
                                                //     handleDetail(row.postId)
                                                // }
                                                style={{
                                                    textTransform: "none",
                                                    color: "#34C543",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                // onClick={() =>
                                                //     handleReject(row.postId)
                                                // }
                                                style={{
                                                    textTransform: "none",
                                                    color: "#EB4335",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
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
            </TabContext>
            <DetailModal
                isOpen={isDetailModalOpen}
                handleCloseDetailModal={handleCloseDetailModal}
                row={selectedCandidate}
            />
            <Pagination
                page={currentPage}
                onChange={handleChangePage}
                showFirstButton
                showLastButton
                style={{
                    marginLeft: "930px",
                    paddingTop: "10px",
                    paddingBottom: "15px",
                }}
            />
        </Box>
    )
}
