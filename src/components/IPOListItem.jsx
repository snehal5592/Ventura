import { Avatar, Box, Typography, Grid, Paper } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const IPOListItem = ({ ipo, onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      onClick={onClick}
      sx={{
        p: 2,
        mb: 2,
        cursor: "pointer",
        "&:hover": { backgroundColor: "#f8f9fb" },
        border: "1px solid #eee",
        borderRadius: 2
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <Avatar src={ipo.logo} alt={ipo.company} sx={{ width: 48, height: 48, mr: 2 }} />
          <Box>
            <Typography fontWeight="600" color="text.primary">
              {ipo.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ipo.dates}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Typography sx={{ color: "#1A064F", fontWeight: 600 }}>
            {ipo.issueSize}
          </Typography>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Typography sx={{ color: "#1A064F", fontWeight: 600 }}>
            {ipo.priceRange}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography sx={{ color: "#1A064F", fontWeight: 600 }}>
            {ipo.minInvestment}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {ipo.lot}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IPOListItem;
