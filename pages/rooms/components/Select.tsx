import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export const SelectMul = ({
  options,
  value,
  handleChange,
  label,
  name
}: any) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={value}
          onChange={handleChange}
          name={name}
        >
          {options.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
