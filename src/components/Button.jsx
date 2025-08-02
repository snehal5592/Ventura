import { IconButton, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DownloadButton = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: 56,
        height: 56,
        paddingTop:"10px"
      }}
    >
      <IconButton
        sx={{
          width: "80%",
          height: "80%",
          border: "2px solid #1A064F",
          borderRadius: "16px",
          padding: "8px",
          backgroundColor: "#fff",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
          
        }}
      >
        <ArrowDownwardIcon sx={{ color: "#f37021" }} />
      </IconButton>
    </Box>
  );
};

export default DownloadButton;
