import { Grid, Typography } from '@mui/material'
import Counter from './Counter'

const CounterWithLabel = ({
  value,
  inputId,
  onChange,
  label,

  wrapperComponentProps,
  counterWrapperProps,
  counterProps,
  labelWrapperProps,
  labelProps,
}) => {
  return (
    <Grid
      container
      item
      alignItems={'center'}
      columnSpacing={2}
      sx={{
        flexWrap: 'wrap',
      }}
      {...wrapperComponentProps}
    >
      <Grid item xs="auto" {...counterWrapperProps}>
        <Typography htmlFor={inputId} component={'label'} {...labelProps}>
          {label}
        </Typography>
      </Grid>
      <Grid
        item
        xs
        {...labelWrapperProps}
        sx={{ pl: { md: '0px !important', lg: 2 } }}
      >
        <Counter
          inputId={inputId}
          min={0}
          value={value}
          onChange={onChange}
          {...counterProps}
        />
      </Grid>
    </Grid>
  )
}

// export default ColorPickerWithLabel

// }

export default CounterWithLabel

// import { Grid, Typography } from '@mui/material'
// import { Counter } from '../Counter'

// const ColorPickerWithLabel = ({
//   value,
//   inputId,
//   onChange,
//   label,

//   wrapperComponentProps,
//   counterWrapperProps,
//   counterProps,
//   labelWrapperProps,
//   labelProps,
// }) => {
//   return (
//     <Grid
//       container
//       item
//       alignItems={'center'}
//       columnSpacing={2}
//       {...wrapperComponentProps}
//     >
//       <Grid item xs {...counterWrapperProps}>
//         <Counter
//           inputId={inputId}
//           min={0}
//           value={value}
//           onChange={onChange}
//           {...counterProps}
//         />
//       </Grid>
//       <Grid item xs {...labelWrapperProps}>
//         <Typography {...labelProps}>{label}</Typography>
//       </Grid>
//     </Grid>
//   )
// }

// export default ColorPickerWithLabel
