import { Container, Typography, Box, Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ipos from "../data/ipos.json";
import { useNavigate } from "react-router-dom";

const IPOList = () => {
  const navigate = useNavigate();

  // Define DataGrid columns
  const columns = [
    {
      field: "company",
      headerName: "Company / Issue Date",
      flex: 1.5,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={params.row.logo} sx={{ width: 36, height: 36 }} />
          {/* <img src={params.row.logo} alt="iamge"/> */}
          <Box>
            <Typography fontWeight={600} fontSize={14} color="#1A064F" sx={{ fontFamily: "Sora" }}>
              {params.row.company}
            </Typography>
            <Typography fontSize={13} color="#6e6e6e" sx={{ fontFamily: "Sora" }}>
              {params.row.dates}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      field: "issueSize",
      headerName: "Issue Size",
      flex: 1,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "priceRange",
      headerName: "Price Range",
      flex: 1,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "minInvestment",
      headerName: "Min Invest / Qty",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
          <Typography fontWeight={600} color="#1A064F">
            {params.row.minInvestment}
          </Typography>
          <Typography fontSize={13} color="#6e6e6e">
            {params.row.lot}
          </Typography>
        </Box>
      )
    }
  ];

  // Rows from ipos
  const rows = ipos.map((ipo) => ({
    ...ipo,
    id: ipo.id.toString() 
  }));

  return (
    <Container sx={{ mt: 4, fontFamily: "Sora" }}>
      <Typography
        variant="h5"
        fontWeight={600}
        mb={3}
        color="#1A064F"
      >
        Upcoming IPOs
      </Typography>

      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          // disableRowSelectionOnClick
          onRowClick={(params) => navigate(`/ipo/${params.row.id}`)}
          sx={{
            fontFamily: "Sora",
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f8f8f8",
              fontWeight: 600,
              color: "#6E6E6E"
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f1f1f1",
              cursor: "pointer"
            }
          }}
        />
      </Box>
    </Container>
  );
};

export default IPOList;
