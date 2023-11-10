import React, { useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";
import Alert from "@mui/material/Alert";

function PetDetailPopup({ isOpen, message, onClose }) {
  const [success, setSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // Thêm trường số điện thoại
  const [email, setEmail] = useState(""); // Thêm trường email

  const sendNotification = async () => {
    // Đây bạn có thể thực hiện việc gửi thông báo hoặc thực hiện các tác vụ khác tùy ý

    // Sau khi thực hiện thành công, bạn có thể hiển thị thông báo
    setSuccess(true);

    // Đóng modal sau khi thông báo đã được gửi
    onClose();
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={isOpen}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "100%", // Chiều rộng 100%
              maxWidth: "400px", // Chiều rộng tối đa, có thể điều chỉnh
            }}
          >
            <p>{message}</p>
            <TextField
              label="Số điện thoại"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                onClick={sendNotification}
                style={{ marginRight: "10px" }}
              >
                Yes
              </Button>
              <Button variant="contained" onClick={onClose}>
                No
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={success}
        autoHideDuration={800}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Thông báo đã được gửi thành công!
        </Alert>
      </Snackbar>
    </>
  );
}

export default PetDetailPopup;
