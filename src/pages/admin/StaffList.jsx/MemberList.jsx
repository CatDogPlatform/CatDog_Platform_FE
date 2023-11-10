import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Searchbar from "../../../layout/LayoutAdmin/Topbar/Searchbar";
import { DetailModal } from "./DetailButton";
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
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import "./Menu.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MemberList() {
    const [value, setValue] = useState("pending");
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isBanDialogOpen, setIsBanDialogOpen] = useState(false);
    const [candidateToBan, setCandidateToBan] = useState(null);
    const [isBanSuccess, setIsBanSuccess] = useState(false);

    const [bannedCandidates, setBannedCandidates] = useState([]);

    const banCandidate = (candidate) => {
        setBannedCandidates([...bannedCandidates, candidate]);
    };
    const unbanCandidate = (candidate) => {
        // Loại bỏ thành phần khỏi danh sách đã ban
        const updatedBannedCandidates = bannedCandidates.filter((c) => c.postId !== candidate.postId);
        setBannedCandidates(updatedBannedCandidates);
    };

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false);
    };

    const handleOpenBanDialog = (candidate) => {
        setCandidateToBan(candidate);
        setIsBanDialogOpen(true);
    };

    const handleCloseBanDialog = () => {
        setIsBanDialogOpen(false);
    };

    const handleBanCandidate = () => {
        banCandidate(candidateToBan);
        fetch(`https://petdom-apis.onrender.com/api/user/members/${candidateToBan._id}/ban`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    // setData((prevData) =>
                    //     prevData.map((candidate) => (candidate._id === candidateToBan._id ? { ...candidate, ban: true } : candidate))
                    // );
                    setIsBanSuccess(true);
                    toast.success("Success Ban !", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    console.error("Lỗi khi cập nhật trạng thái ban");
                }
            })
            .catch((error) => {
                console.error("Lỗi khi gửi yêu cầu cập nhật trạng thái ban:", error);
            });

        setIsBanDialogOpen(false);
    };

    const handleUnbanCandidate = () => {
        unbanCandidate(candidateToBan);

        fetch(`https://petdom-apis.onrender.com/api/user/members/${candidateToBan._id}/unban`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ban: false }), // Đặt trạng thái ban thành false để unban
        })
            .then((response) => {
                if (response.status === 200) {
                    setData((prevData) =>
                        prevData.map((candidate) => (candidate._id === candidateToBan._id ? { ...candidate, ban: false } : candidate))
                    );
                    setIsBanSuccess(true);
                    setIsBanSuccess(true);
                    toast.success("Success Unban !", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    console.error("Lỗi khi cập nhật trạng thái unban");
                }
            })
            .catch((error) => {
                console.error("Lỗi khi gửi yêu cầu cập nhật trạng thái unban:", error);
            });

        setIsBanDialogOpen(false);
    };

    useEffect(() => {
        const storedBannedCandidates = JSON.parse(sessionStorage.getItem("bannedCandidates"));
        if (storedBannedCandidates) {
            setBannedCandidates(storedBannedCandidates);
        }

        fetch("https://petdom-apis.onrender.com/api/user/members")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setData(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
                setIsLoading(false);
            });
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    useEffect(() => {
        sessionStorage.setItem("bannedCandidates", JSON.stringify(bannedCandidates));
    }, [bannedCandidates]);

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <ToastContainer />

            <TabContext value={value}>
                <TabList onChange={(e, newValue) => setValue(newValue)}>
                    <Tab label="Pending" value="pending" />
                    <Tab label="Banned" value="banned" />
                </TabList>
                <TabPanel value="pending">
                    <div className="search-bar" style={{ width: "520px", marginBottom: "20px" }}>
                        <input
                            type="text"
                            placeholder="Search"
                            style={{
                                width: "617px",
                                height: "39px",
                                borderRadius: "10px",
                                paddingLeft: "20px",
                                border: "1px solid #d6d6d6",
                            }}
                        />
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450, width: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Member ID
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
                                        Email
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
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={5}>Đang tải dữ liệu...</TableCell>
                                    </TableRow>
                                ) : (
                                    data
                                        // .filter((row) => row.ban === false)
                                        .map((row) => (
                                            <TableRow key={row.postId}>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row._id}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row.createdAt}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row.email}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontWeight: "700", color: "green" }}>
                                                    {row.status}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        style={{
                                                            textTransform: "none",
                                                            color: "#EB4335",
                                                            fontWeight: "700",
                                                        }}
                                                        onClick={() => handleOpenBanDialog(row)}
                                                    >
                                                        Ban
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="banned">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450, width: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bolder",
                                            fontSize: "1rem",
                                        }}
                                        align="center"
                                    >
                                        Member ID
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={5}>Đang tải dữ liệu...</TableCell>
                                    </TableRow>
                                ) : (
                                    data
                                        .filter((row) => row.ban === true)
                                        .map((row) => (
                                            <TableRow key={row.postId}>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row.postId}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row.date}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row.user}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontWeight: "700" }}>
                                                    {row.status}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        style={{
                                                            textTransform: "none",
                                                            color: "#4CAF50", // Màu xanh lá cây cho nút Unban
                                                            fontWeight: "700",
                                                        }}
                                                        onClick={() => handleOpenBanDialog(row)}
                                                    >
                                                        Unban
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </TabContext>
            <DetailModal isOpen={isDetailModalOpen} handleCloseDetailModal={handleCloseDetailModal} row={selectedCandidate} />

            <Dialog open={isBanDialogOpen} onClose={handleCloseBanDialog}>
                <DialogTitle>Confirm</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure ? </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseBanDialog} color="primary">
                        Cancel
                    </Button>
                    {value === "pending" ? (
                        <Button onClick={handleBanCandidate} color="primary">
                            Confirm Ban
                        </Button>
                    ) : (
                        <Button onClick={handleUnbanCandidate} color="primary">
                            Confirm Unban
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </Box>
    );
}
