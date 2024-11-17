"use client";

import {
  Avatar,
  Box,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";

const Wrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid2
      container
      sx={{
        height: "100vh",
        ".MuiList-root": {
          marginTop: "0",
          ".MuiTypography-root": {
            color: theme.palette.mainAccent[200],
          },
        },

        ".MuiListItemAvatar-root": {
          minWidth: 40,
        },
        ".MuiListItem-root": {
          padding: 1,
        },
      }}
    >
      <Grid2
        size={{ xs: 0, sm: 4, md: 3, lg: 2 }}
        sx={{
          bgcolor: theme.palette.blueAccent[100],
          color: theme.palette.mainAccent[200],
        }}
      >
        <Stack direction="column" spacing={2}>
          <Box>ADMIN</Box>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src="/assets/icons/home.png"
                    sx={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </ListItemAvatar>
                <ListItemText secondary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 8, md: 9, lg: 10 }}
        sx={{
          bgcolor: "green",
          p: 1,
        }}
      >
        {children}
      </Grid2>
    </Grid2>
  );
};

export default Wrapper;
