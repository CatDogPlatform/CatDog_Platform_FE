import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Searchbar from "../../../layout/LayoutAdmin/Topbar/Searchbar";
import { DetailModal } from "./DetailButton";
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, Button, TableBody, Pagination } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StaffTable() {
    const [value, setValue] = useState("pending");
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]); // Dữ liệu từ API
    const [isLoading, setIsLoading] = useState(true);

    const handleDetailClick = (row) => {
        setSelectedCandidate(row);
        setIsDetailModalOpen(true);
    };

    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleRejectClick = (row) => {
        // Gửi yêu cầu PUT lên API để đánh dấu rằng mục đã bị từ chối.
        fetch(`https://64a7842d096b3f0fcc8165a8.mockapi.io/pdfAPi/${row.postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ reject: true }), // Đánh dấu mục là rejected
        })
            .then((response) => {
                if (response.ok) {
                    // Cập nhật dữ liệu trong local state để thể hiện trạng thái mới.
                    const updatedData = data.map((item) => (item.postId === row.postId ? { ...item, reject: true } : item));
                    setData(updatedData);
                    toast.success("Success Notification !", {
                        position: toast.POSITION.TOP_RIGHT,
                    });

                    // Kiểm tra xem trạng thái cần chuyển qua "Rejected"
                    if (value === "pending") {
                        handleChange(null, "rejected");
                    }
                } else {
                    console.error("Lỗi khi gửi yêu cầu PUT lên API");
                }
            })
            .catch((error) => {
                console.error("Lỗi khi gửi yêu cầu PUT lên API:", error);
            });
    };

    useEffect(() => {
        // Gọi API và cập nhật dữ liệu
        fetch("https://64a7842d096b3f0fcc8165a8.mockapi.io/pdfAPi")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <ToastContainer />
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab
                            className={`panel_one ${value === "pending" ? "Mui-selected" : ""}`}
                            label="Pending"
                            value="pending"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "red",
                                },
                            }}
                        />
                        <Tab
                            label="Rejected"
                            value="rejected"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: value === "rejected" ? "blue" : "",
                                },
                            }}
                        />
                    </TabList>
                </Box>
                <TabPanel value="pending">
                    <div className="search-bar" style={{ width: "520px", marginBottom: "20px" }}>
                        <Searchbar />
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
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={5}>Đang tải dữ liệu...</TableCell>
                                    </TableRow>
                                ) : (
                                    data.map((row) => (
                                        <TableRow key={row.postId}>
                                            <TableCell style={{ fontWeight: "700" }}>{row.postId}</TableCell>
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
                                                    onClick={() => handleDetailClick(row)}
                                                    style={{
                                                        textTransform: "none",
                                                        color: "#259AE6",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    Detail
                                                </Button>
                                                <Button
                                                    style={{
                                                        textTransform: "none",
                                                        color: "#3fc84d",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    Approve
                                                </Button>
                                                <Button
                                                    style={{
                                                        textTransform: "none",
                                                        color: "#EB4335",
                                                        fontWeight: "700",
                                                    }}
                                                    onClick={() => handleRejectClick(row)} // Gọi hàm xử lý khi bấm nút "Reject"
                                                >
                                                    Reject
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                <TabPanel value="rejected">
                    <div className="search-bar" style={{ width: "520px", marginBottom: "20px" }}>
                        <Searchbar />
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
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={5}>Đang tải dữ liệu...</TableCell>
                                    </TableRow>
                                ) : (
                                    data.map((row) => (
                                        <TableRow key={row.postId}>
                                            <TableCell style={{ fontWeight: "700" }}>{row.postId}</TableCell>
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
                                                    onClick={() => handleDetailClick(row)}
                                                    style={{
                                                        textTransform: "none",
                                                        color: "#259AE6",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    Detail
                                                </Button>
                                                <Button
                                                    style={{
                                                        textTransform: "none",
                                                        color: "#34C543",
                                                        fontWeight: "700",
                                                    }}
                                                >
                                                    Approve
                                                </Button>
                                                <Button
                                                    style={{
                                                        textTransform: "none",
                                                        color: "#EB4335",
                                                        fontWeight: "700",
                                                    }}
                                                    onClick={() => handleRejectClick(row)} // Gọi hàm xử lý khi bấm nút "Reject"
                                                >
                                                    Reject
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
    );
}
