import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'

const RoomsPage = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Container>
        <Box
          sx={{
            display: {
              sm: 'block',
              md: 'flex',
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2em',
            marginY: '6em',
          }}
        >
          <form className="formContact" action="">
            <Typography variant="h3">
              Contactanos en un{' '}
              <strong style={{ color: 'var(--green-aqua)' }} color="primary">
                click
              </strong>
            </Typography>
            <Typography variant="h4"></Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="nombre"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              type="email"
              id="outlined-basic"
              label="correo"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              type="email"
              id="outlined-basic"
              label="numero de telefono"
              variant="outlined"
              margin="normal"
            />
            <Button
              fullWidth
              style={{ background: 'var(--green-aqua)', color: 'white' }}
            >
              enviar
            </Button>
            <Box></Box>
          </form>
          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.8063007745881!2d-71.97889343044866!3d-13.521766599177912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd6757384a4f7%3A0xa2afa16155a04202!2sMatara%20377%2C%20Cusco%2008002!5e0!3m2!1ses-419!2spe!4v1685121163525!5m2!1ses-419!2spe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </Box>
  )
}

export default RoomsPage
