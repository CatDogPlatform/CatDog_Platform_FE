import React, { useEffect, useState } from "react"
// import CloseIcon from "@mui/icons-material/Close"

import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material"

// import { useDispatch, useSelector } from "react-redux"

export const DetailModal = ({ row, isOpen, handleCloseDetailModal }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={handleCloseDetailModal}
            maxWidth="sm"
            fullWidth
        >
            <DialogContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Detail
                    </Typography>
                    <Button onClick={handleCloseDetailModal}>
                        {/* <CloseIcon /> */}
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        padding: "1rem",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Date
                            <TextField value={row?.date} fullWidth readOnly />
                        </Grid>
                        <Grid item xs={12}>
                            User
                            <TextField value={row?.user} fullWidth readOnly />
                        </Grid>
                        <Grid item xs={12}>
                            Status
                            <TextField value={row?.status} fullWidth readOnly />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "1rem",
                        }}
                    ></Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
