'use client'
import EventRoundedIcon from '@mui/icons-material/EventRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import TodayRoundedIcon from '@mui/icons-material/TodayRounded'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
} from '@mui/material'

export const SearchFilters = () => {
  return (
    <FormControl
      fullWidth
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: '2rem',
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />}
          label="Gratis"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />}
          label="Solo adultos"
        />
      </FormGroup>
      <TextField
        label="Ciudad"
        placeholder="Buenos Aires"
        InputProps={{
          sx: { borderRadius: 30 },
          startAdornment: (
            <InputAdornment position="start">
              <PlaceRoundedIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Desde"
        type="date"
        InputProps={{
          sx: { borderRadius: 30 },
          startAdornment: (
            <InputAdornment position="start">
              <TodayRoundedIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Hasta"
        type="date"
        InputProps={{
          sx: { borderRadius: 30 },
          startAdornment: (
            <InputAdornment position="start">
              <EventRoundedIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  )
}
