import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function OrderSummary() {
  return (
    <Grid
      container
      sx={{ width: "100%", minHeight: "100vh" }}
      direction="column"
    >
      <Grid item>
        <Typography variant="h2">Order Summary</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">Scoops: $6.00</Typography>
      </Grid>
    </Grid>
  );
}

export default OrderSummary;
