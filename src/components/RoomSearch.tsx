'use client'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import {
  Box,
  Button,
  Drawer,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material'
import { useState } from 'react'

import { SearchFilters } from './SearchFilters'

export const RoomSearch = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <TextField
        label="Tipo de evento o nombre"
        placeholder="Fiesta electronica"
        InputProps={{
          sx: { borderRadius: 30 },
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon color="primary" fontSize="large" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={toggleDrawer}
              sx={{
                background: '#8E24AA',
                color: '#fff',
                padding: '1.2rem',
                borderRadius: '50%',
                height: '1rem',
                width: '1rem',
                cursor: 'pointer',
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                '&:hover': { background: '#FBC02D' },
              }}
            >
              <SortRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <Drawer open={open} anchor="left">
        <Stack sx={{ padding: '2rem', gap: '2rem' }}>
          <CloseRoundedIcon
            onClick={toggleDrawer}
            color="primary"
            fontSize="large"
            sx={{ alignSelf: 'end', cursor: 'pointer' }}
          />
          <SearchFilters />
          <Button variant="contained" onClick={toggleDrawer}>
            Filtrar
          </Button>
        </Stack>
      </Drawer>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <SearchFilters />
      </Box>
    </Box>
  )
}
