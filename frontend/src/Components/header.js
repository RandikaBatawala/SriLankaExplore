import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import lanka from '../Icons/lanka.png';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


// const theme = createMuiTheme({
//     typography: {
//         button: {
//           fontSize: 20, // works
//           color: '#ffffff' // doesn't work
//         }
//       }
// });


function BtnSafeGuid() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (route) => {
        setAnchorEl(null);
      };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: 'black', fontWeight:'bold'}}
            >
                Safe Guide
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => window.location.replace('/SafeGuide/SaftyTips')}>Safty Tips</MenuItem>
                <MenuItem onClick={() => window.location.replace('/SafeGuide/HealthAdvisories')}>Health Advisories</MenuItem>
                <MenuItem onClick={() => window.location.replace('/SafeGuide/Alerts')}>Alerts</MenuItem>
                <MenuItem onClick={() => window.location.replace('/SafeGuide/EmergencyContacts')}>Emergency Contacts</MenuItem>
                
            </Menu>
        </div>
    );
}




export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: 56,
                boxShadow: 3,
                backdropFilter: 'blur(8px)',
                zIndex: 1100,
                position: 'sticky',
                top: '0px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',

            }}
        >
            <Container sx={{
                width: "100%",
                height: 56,
                backdropFilter: 'blur(8px)',
                zIndex: 1100,
                position: 'sticky',
                top: '0px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',

            }} >
                <div>
                    <div style={{ float: "left" }}>
                        <img src={lanka} className="App-logo " alt="logo" width="40px" height="40px" style={{ paddingTop: "8px", float: "left" }} />
                        <h3 style={{ margin: "0", paddingTop: "15px", float: "left" }}>SERENDIP</h3>
                    </div>
                    <div style={{ float: "right", paddingTop: "8px" }}>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Typography sx={{ minWidth: 100 }}>Contact</Typography>

                                <BtnSafeGuid />

                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2, Shadow: 3 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    </div>
                </div>
            </Container>
        </Box>
    );
}