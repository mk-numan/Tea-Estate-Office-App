import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import {
  People,
  Agriculture,
  BugReport,
  Assignment,
} from "@mui/icons-material";

function DashboardCard({ icon, title }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ textAlign: "center" }}>
        {icon}
        <Typography variant="h6" mt={1}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            🌿 Tea Estate Office
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          Welcome, Numan
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Assistant Manager Dashboard
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <DashboardCard
              title="Labour"
              icon={<People fontSize="large" />}
            />
          </Grid>

          <Grid item xs={6}>
            <DashboardCard
              title="Green Leaf"
              icon={<Agriculture fontSize="large" />}
            />
          </Grid>

          <Grid item xs={6}>
            <DashboardCard
              title="Spray Register"
              icon={<BugReport fontSize="large" />}
            />
          </Grid>

          <Grid item xs={6}>
            <DashboardCard
              title="Daily Report"
              icon={<Assignment fontSize="large" />}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, borderRadius: 3 }}
        >
          + New Daily Report
        </Button>
      </Container>
    </>
  );
}