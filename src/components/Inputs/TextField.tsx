import { ChangeEventHandler, FC } from 'react'

// Import MUI components
import MuiTextField from '@mui/material/TextField'

const TextField: FC<{
  onChange: ChangeEventHandler
  value: string
  placeholder: string
  height?: string
  width?: string
  fullWidth?: boolean
}> = ({
  onChange,
  value,
  placeholder,
  height = '46px',
  width = '600px',
  fullWidth = false,
}) => {
  return (
    <MuiTextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth={fullWidth}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '50px',
        },
        '& .MuiOutlinedInput-root': {
          width: width,
          height: height,
        },
      }}
    />
  )
}
export { TextField }
