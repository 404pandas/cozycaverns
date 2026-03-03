import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cozy Caverns
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 6 }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
