import { useParams, useNavigate } from "react-router-dom";
import ipos from "../data/ipos.json";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Paper,
  Breadcrumbs,
  Link
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import DownloadButton from "../components/Button";
import IPOTimeline from "../components/IPOTimeline";
import { useTheme } from "@mui/material/styles";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const IPODetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ipo = ipos.find((i) => i.id === id);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!ipo) return <Typography>IPO not found</Typography>;

  const {
    company,
    logo,
    details: {
      issueSize,
      priceRange,
      minAmount,
      lotSize,
      listedOn,
      listedPrice,
      listingGain,
      timeline,
      companydeatils
    }
  } = ipo;

  return (
    <Container sx={{ mt: 4 }}>
      <Box mb={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontSize: '12px' }}>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography color="text.primary" sx={{ fontSize: '12px' }}>Market Watch</Typography>
        </Breadcrumbs>
      </Box>

      <Box
        display="flex"
        alignItems={isMobile ? "flex-start" : "center"}
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        gap={2}
        flexWrap="wrap"
        mb={2}
      >


        <Box display="flex" alignItems="center" gap={2}>
          <Button
            onClick={() => navigate("/")}
            startIcon={
              <ArrowBackIcon
                sx={{
                  padding: "7px",
                  border: "1px solid grey",
                  color: "grey",
                  fontSize: "32px !important", // make sure it's a string or number
                }}
              />
            }
          >
          </Button>
          <Avatar src={logo} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="h6" fontWeight="bold" color="#1A064F" style={{ fontSize: "16px" }}>
              {company}
            </Typography>
            <Typography color="text.secondary" style={{ fontSize: "14px" }}>
              {company} Private Limited
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={2} // adds space between icon and button
        >
          <DownloadButton />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1A064F",
              borderRadius: "15px",
              padding: "10px 20px",
              textTransform: "none"
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Box>

      {/* Outer Paper for IPO Details Section */}


      {/* Nested Paper for actual grid */}
      <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#f9f9fb" }}>


        <Box sx={{ border: "1px solid #eee", borderRadius: 2, p: 2, backgroundColor: "#f9f9fb" }}>
          <Typography variant="subtitle1" fontWeight={600} mb={2} color="#1A064F">
            IPO details
          </Typography>

          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              backgroundColor: "#fff"
            }}
          >
            {/* Row 1 */}
            <Grid container spacing={2} mb={1}>
              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Issue size</Typography>
                <Typography fontWeight={600} color="#1A064F">{issueSize}</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Price range</Typography>
                <Typography fontWeight={600} color="#1A064F">{priceRange}</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Minimum amount</Typography>
                <Typography fontWeight={600} color="#1A064F">{minAmount}</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Lot size</Typography>
                <Typography fontWeight={600} color="#1A064F">{lotSize}</Typography>
              </Grid>
            </Grid>


            {/* Row 2 */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Issue dates</Typography>
                <Typography fontWeight={600} color="#1A064F">{listedOn}</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Listed on</Typography>
                <Typography fontWeight={600} color="#1A064F">{listedOn}</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Listed price</Typography>
                <Typography fontWeight={600} color="#1A064F">{listedPrice}</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} sx={{ width: { xs: '100%', sm: '50%', md: '20%' } }}>
                <Typography variant="body2" color="text.secondary">Listing gains</Typography>
                <Typography fontWeight={600} color="#1A064F">
                  {listingGain?.split(" ")[0]}{" "}
                  <span style={{ color: "red" }}>
                    {listingGain?.split(" ")[1]}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>



      </Paper>
      {/* Paper for IPO Timeline */}
      <Paper elevation={3} sx={{ p: 2, marginTop: 2 }}>
        <IPOTimeline steps={timeline} />
      </Paper>
      <Paper elevation={3} sx={{ p: 2, marginTop: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} mb={2} color="#1A064F">
          About the Company
        </Typography>
        <p style={{ fontSize: "12px", color: "#808080" }}>{companydeatils}</p>
      </Paper>
    </Container>
  );
};

export default IPODetails;
