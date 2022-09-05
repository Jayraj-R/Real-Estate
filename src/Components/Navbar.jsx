import * as React from 'react';
import {
	Menu,
	AppBar,
	Box,
	Container,
	IconButton,
	Stack,
	Typography,
	Toolbar,
	MenuItem,
	Button,
	useScrollTrigger,
	Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { navLinks as Links } from '../utils/constants';
import styles from '../styles/Navbar.module.css';

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const Navbar = (props) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [navLinks, setNavLinks] = React.useState(Links);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<HideOnScroll {...props}>
			<AppBar position='static' sx={{ background: '#fff' }}>
				<Container maxWidth='xl'>
					<Toolbar>
						<Typography
							variant='h5'
							noWrap
							component='a'
							color='primary'
							href='/'
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }}
							className={styles.logo}
						>
							ESTATERY
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='primary'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{navLinks.map((navLink) => (
									<MenuItem key={navLink.label} onClick={handleCloseNavMenu}>
										<Typography textAlign='center'>{navLink.label}</Typography>
										{navLink.isExpandable ? <KeyboardArrowDownIcon /> : <></>}
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography
							variant='h5'
							noWrap
							component='a'
							color='primary'
							href=''
							sx={{ display: { xs: 'flex', md: 'none' } }}
							className={styles.logo}
						>
							ESTATERY
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								columnGap: '2rem',
							}}
						>
							{navLinks.map((navLink) => (
								<Typography
									noWrap
									component='a'
									className={styles.navLink}
									key={navLink.label}
									onClick={handleCloseNavMenu}
								>
									{navLink.label}
									{navLink.isExpandable ? <KeyboardArrowDownIcon /> : <></>}
								</Typography>
							))}
						</Box>

						<Stack
							spacing={2}
							direction='row'
							sx={{ display: { xs: 'none', md: 'flex' } }}
						>
							<Button variant='outlined'>Login</Button>
							<Button variant='contained'>Sign up</Button>
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	);
};

export default Navbar;
