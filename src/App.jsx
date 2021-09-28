import React from "react";

import { sentenceCase } from "change-case";

import {
  ThemeProvider,
  StyledEngineProvider,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CssBaseline,
  Container,
  Fab,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Radio,
  TextField,
  Tab,
  Tabs,
  Tooltip,
  Toolbar,
  Typography,
} from "@mui/material";

import withStyles from '@mui/styles/withStyles';

import { Alert, AlertTitle } from '@mui/material';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import {
  Add,
  Edit,
  Delete,
  Person,
  Menu,
} from "@mui/icons-material";

import useTheme from "./theme/use-theme";

const ICONS = [
  { key: "add", icon: <Add />, size: "small" },
  { key: "edit", icon: <Edit />, size: "medium" },
  { key: "delete", icon: <Delete />, size: "large" },
];

const MISSIONS_TO_MARS = ["Curiosity", "Ingenuity", "Perseverance"];

const MARS_PHOTOS = [
  {
    cols: 3,
    title: "3D View of 'Mont Mercou'",
    url:
      "https://mars.nasa.gov/system/resources/detail_files/25758_2-PIA24266-comboadjust.gif",
  },
  {
    title: "Selfie at the 'Mary Anning' Location on Mars",
    url:
      "https://mars.nasa.gov/system/resources/detail_files/25382_PIA24173-1600.jpg",
  },
  {
    cols: 2,
    title: "Rafael Navarro Mountain",
    url:
      "https://mars.nasa.gov/system/resources/detail_files/25773_PIA24544-1200.jpg",
  },
  {
    cols: 2,
    title: "Path to the 'Sulfate-Bearing Unit'",
    url:
      "https://mars.nasa.gov/system/resources/detail_files/25097_PIA23973-16.jpg",
  },
  {
    cols: 1,
    title: "View From the Top of the 'Greenheugh Pediment'",
    url:
      "https://mars.nasa.gov/system/resources/detail_files/25098_PIA23974-16.jpg",
  },
];

const BUTTON_COLORS = [ "primary", "secondary","success","error","info","warning"];

const FAB_COLORS = ['default','primary','secondary']
const TEXT_FIELD_VARIANTS = ["standard", "filled", "outlined"];

const TYPOGRAPHY_VARIANTS = [
  { key: "h1", sample: "h1 👋" },
  { key: "h2", sample: "h2 Heading" },
  { key: "h3", sample: "h3 Heading" },
  { key: "h4", sample: "h4 Heading" },
  { key: "h5", sample: "h5 Heading" },
  { key: "h6", sample: "h6 Heading" },
  { key: "subtitle1", sample: "subtitle1" },
  { key: "subtitle2", sample: "subtitle2" },
  { key: "body1", sample: "body1" },
  { key: "body2", sample: "body2" },
  { key: "button", sample: "button text" },
  { key: "overline", sample: "overline" },
  { key: "caption", sample: "caption" },
];

const COLOR_VARIANTS = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "error", label: "Error" },
  { key: "warning", label: "Warning" },
  { key: "info", label: "Info" },
  { key: "success", label: "Success" },
];

const TEXT_COLOR_VARIANTS = [
  { key: "primary", label: "Primary text" },
  { key: "secondary", label: "Secondary text" },
  { key: "textPrimary", label: "Text Primary" },
  { key: "textSecondary", label: "Text Secondary" },
  { key: "error", label: "Error text" },
];

const AppCard = withStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
}))(Card);

const StyledCard = withStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))(Card);

const StyledCardContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(CardContent);

const StyledCardHeader = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(CardHeader);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export default function App() {
  const [checked, setChecked] = React.useState([0]);
  const [inputColor, setInputColor] = React.useState("secondary");
  const [value, setValue] = React.useState(0);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar color="default">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="overline">Material-UI Component Demo</Typography>
           
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box marginY={3}>
          <Container maxWidth="false">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
              </Grid>

              <Grid item xs={12}>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  This is a warning alert — <strong>check it out!</strong>
                </Alert>
              </Grid>

              <Grid item xs={12}>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  This is an info alert — <strong>check it out!</strong>
                </Alert>
              </Grid>

              <Grid item xs={12}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert — <strong>check it out!</strong>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <StyledCard>
                  <StyledCardHeader
                    title="Typography"
                    titleTypographyProps={{
                      variant: "h5",
                      color: "textSecondary",
                    }}
                  />
                  <StyledCardContent>
                    {TYPOGRAPHY_VARIANTS.map(({ key, sample }) => (
                      <Typography
                        key={key}
                        variant={key}
                        display="block"
                        gutterBottom={true}
                      >
                        {sample}
                      </Typography>
                    ))}
                  </StyledCardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <StyledCard>
                  <StyledCardHeader
                    title="Colors"
                    titleTypographyProps={{
                      variant: "h5",
                      color: "textSecondary",
                    }}
                  />
                  <StyledCardContent>
                    <Typography variant="overline">Grey</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                            (i) => (
                              <Grid item xs>
                                <Tooltip title={`grey.${i}`}>
                                  <Box
                                    bgcolor={`grey.${i}`}
                                    border="1px solid currentColor"
                                    borderRadius="undefinedpx"
                                    paddingBottom="100%"
                                  />
                                </Tooltip>
                              </Grid>
                            )
                          )}
                        </Grid>
                      </Grid>
                      {COLOR_VARIANTS.map(({ key, label }) => (
                        <Grid key={key} item xs={12} sm={6}>
                          <Typography variant="overline">{label}</Typography>
                          <Grid container spacing={1}>
                            {["light", "main", "dark"].map((i) => (
                              <Grid key={`${key}.${i}`} item xs>
                                <Tooltip title={`${key}.${i}`}>
                                  <Box
                                    bgcolor={`${key}.${i}`}
                                    borderRadius="undefinedpx"
                                    paddingBottom="100%"
                                  />
                                </Tooltip>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      ))}
                      {TEXT_COLOR_VARIANTS.map(({ key, label }) => (
                        <Grid item xs={12}>
                          <Typography color={key}>{label}</Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <StyledCard>
                  <StyledCardHeader
                    title="Buttons"
                    titleTypographyProps={{
                      variant: "h5",
                      color: "textSecondary",
                    }}
                  />
                  <StyledCardContent>
                    {BUTTON_COLORS.map((color) => (
                      <Grid key={color} container spacing={2} alignItems="center">
                        {["text", "outlined", "contained"].map((v) => (
                          <Grid
                            key={v}
                            container
                            item
                            xs={12}
                            sm={4}
                            justifyContent="center"
                            sx={{
                              marginBottom:1
                            }}
                          >
                            <Button size="small" variant={v} color={color}>
                              Button
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    ))}
                    <Grid container spacing={2} alignItems="center">
                      {BUTTON_COLORS.map((color) =>
                        ICONS.map(({ key, icon, size }) => (
                          <Grid key={key} container item xs={4} justifyContent="center">
                            <IconButton color={color} size="small">{icon}</IconButton>
                          </Grid>
                        ))
                      )}
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      {FAB_COLORS.map((color) =>
                        ICONS.map(({ key, icon, size }) => (
                          <Grid key={key} container item xs={4} justifyContent="center">
                            <Fab color={color} size={size}>
                              {icon}
                            </Fab>
                          </Grid>
                        ))
                      )}
                    </Grid>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <StyledCard>
                  <StyledCardHeader
                    title="Navigation controls"
                    titleTypographyProps={{
                      variant: "h5",
                      color: "textSecondary",
                    }}
                  />
                  <div>
                    {["primary", "secondary"].map((color) => (
                      <>
                        <Tabs
                          variant="fullWidth"
                          indicatorColor={color}
                          value={value}
                     
                          onChange={handleChange}
                        >
                          <Tab label="Item One" />
                          <Tab label="Item Two" />
                          <Tab label="Item Three" />
                        </Tabs>
                        <Tabs
                          variant="fullWidth"
                          indicatorColor={color}
                          textColor={color}
                          value={value}
                          onChange={handleChange}
                        >
                          <Tab label="Item One" />
                          <Tab label="Item Two" />
                          <Tab label="Item Three" />
                        </Tabs>
                      </>
                    ))}
                    <StyledCardContent>
                      <Grid container spacing={3}>
                        {["default", "primary", "secondary", "transparent"].map(
                          (color) => (
                            <Grid key={color} item xs={12}>
                              <AppBar position="relative" color={color}>
                                <Toolbar>
                                  <IconButton color="inherit" edge="start" size="large">
                                    <Menu />
                                  </IconButton>
                                  <Typography variant="subtitle1">
                                    {`${sentenceCase(color)} App Bar`}
                                  </Typography>
                                </Toolbar>
                              </AppBar>
                            </Grid>
                          )
                        )}
                      </Grid>
                    </StyledCardContent>
                  </div>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <StyledCard>
                  <StyledCardHeader
                    title="Form Controls"
                    titleTypographyProps={{
                      variant: "h5",
                      color: "textSecondary",
                    }}
                  />
                  <div>
                    <StyledCardContent>
                      <Grid container spacing={3}>
                        <Grid item container xs={12}>
                          <ToggleButtonGroup size="small" color={inputColor}>
                            {["primary", "secondary"].map((color) => (
                              <ToggleButton
                                key={color}
                                selected={inputColor === color}
                                onClick={() => setInputColor(color)}
                              >
                                {color}
                              </ToggleButton>
                            ))}
                          </ToggleButtonGroup>
                        </Grid>
                        {TEXT_FIELD_VARIANTS.map((v) => (
                          <Grid item xs={12}>
                            <TextField
                              color={inputColor}
                              fullWidth
                              required
                              variant={v}
                              label={sentenceCase(`${v} variant`)}
                              defaultValue="Hello World"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </StyledCardContent>
                    <List>
                      {[0, 1, 2].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                          <ListItem
                            key={value}
                            role={undefined}
                            dense
                            button
                            onClick={handleToggle(value)}
                          >
                            <ListItemIcon>
                              <Checkbox
                                color={inputColor}
                                edge="end"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{
                                  "aria-labelledby": labelId,
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              id={labelId}
                              primary={MISSIONS_TO_MARS[value]}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                    {/* TODO: Wire-up Radio buttons */}
                    <List>
                      {MISSIONS_TO_MARS.map((value, idx) => {
                        const labelId = `checkbox-list-label-${idx}`;

                        return (
                          <ListItem key={idx} role={undefined} dense button>
                            <ListItemIcon>
                              <Radio
                                edge="end"
                                color={inputColor}
                                checked={idx === 0}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{
                                  "aria-labelledby": labelId,
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </div>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <AppCard>
                  <AppBar position="absolute">
                    <Toolbar>
                      <IconButton color="inherit" edge="start" size="large">
                        <Menu />
                      </IconButton>
                      <Typography variant="subtitle1">Example Layout</Typography>
                    </Toolbar>
                    <Tabs
                      variant="fullWidth"
                      value={value}
                      onChange={handleChange}
                    >
                      {MISSIONS_TO_MARS.map((mission) => (
                        <Tab label={mission} />
                      ))}
                    </Tabs>
                  </AppBar>
                  {/* Here to create space under AppBar */}
                  <Toolbar />
                  <Tabs />
                  <TabPanel value={value} index={1}>
                    <List>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <ListItem divider button>
                          <ListItemAvatar>
                            <Avatar>
                              <Person />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={`List Item ${i}`} />
                        </ListItem>
                      ))}
                    </List>
                  </TabPanel>
                  <TabPanel value={value} index={0}>
                    <ImageList cellHeight={220} cols={3}>
                      {MARS_PHOTOS.map((tile) => (
                        <ImageListItem key={tile.url} cols={tile.cols || 1}>
                          <ImageListItemBar title={tile.title} />
                          <img src={tile.url} alt={tile.title} />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <CardContent>
                      <p>
                        Dragged into Stubb’s boat with blood-shot, blinded eyes,
                        the white brine caking in his wrinkles; the long tension
                        of Ahab’s bodily strength did crack, and helplessly he
                        yielded to his body’s doom: for a time, lying all crushed
                        in the bottom of Stubb’s boat, like one trodden under foot
                        of herds of elephants. Far inland, nameless wails came
                        from him, as desolate sounds from out ravines.
                      </p>
                      <p>
                        Riotous and disordered as the universal commotion now was,
                        it soon resolved itself into what seemed a systematic
                        movement; for having clumped together at last in one dense
                        body, they then renewed their onward flight with augmented
                        fleetness. Further pursuit was useless; but the boats
                        still lingered in their wake to pick up what drugged
                        whales might be dropped astern, and likewise to secure one
                        which Flask had killed and waifed. The waif is a pennoned
                        pole, two or three of which are carried by every boat; and
                        which, when additional game is at hand, are inserted
                        upright into the floating body of a dead whale, both to
                        mark its place on the sea, and also as token of prior
                        possession, should the boats of any other ship draw near.
                      </p>
                    </CardContent>
                  </TabPanel>
                </AppCard>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
