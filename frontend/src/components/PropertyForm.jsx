import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CssBaseline,
  Grid,
} from "@mui/material";

const PropertyForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      place: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      nearbyHospitals: "",
      nearbyColleges: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      place: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      nearbyHospitals: "",
      nearbyColleges: "",
    });
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h5">
          {initialData ? "Update Property" : "Add Property Details"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2 }}
          className="property-form-box">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="place"
                label="Place"
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="area"
                label="Area (sq ft)"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="bedrooms"
                label="Number of Bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="bathrooms"
                label="Number of Bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="nearbyHospitals"
                label="Nearby Hospitals"
                name="nearbyHospitals"
                value={formData.nearbyHospitals}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="nearbyColleges"
                label="Nearby Colleges"
                name="nearbyColleges"
                value={formData.nearbyColleges}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            {initialData ? "Update" : "Post"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PropertyForm;
