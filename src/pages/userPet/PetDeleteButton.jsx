import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useParams } from "react-router";

function PetDelete(props) {
    const { open, onClose, onConfirm } = props;

    const handleDeleteConfirm = async (petId) => {
        try {
            // Thực hiện gọi API xóa pet sử dụng petId
            await axios.delete(`https://petdom-apis.onrender.com/api/pets/${petId}`);
            // Xử lý sau khi xóa pet thành công (ví dụ: cập nhật danh sách pet)
            console.log("Pet deleted successfully.");
        } catch (error) {
            // Xử lý lỗi khi xóa pet
            console.error("Lỗi khi xóa pet: ", error);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>Are you sure you want to delete this pet?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDeleteConfirm} color="secondary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default PetDelete;
