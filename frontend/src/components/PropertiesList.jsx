import React from 'react';
import { List, ListItem, ListItemText, IconButton, Box, Typography, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PropertiesList = ({ properties, onEdit, onDelete }) => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          My Properties
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {properties.map((property, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => onEdit(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={`Place: ${property.place}, Area: ${property.area} sq ft`}
                secondary={`Bedrooms: ${property.bedrooms}, Bathrooms: ${property.bathrooms}, Nearby Hospitals: ${property.nearbyHospitals}, Nearby Colleges: ${property.nearbyColleges}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default PropertiesList;
