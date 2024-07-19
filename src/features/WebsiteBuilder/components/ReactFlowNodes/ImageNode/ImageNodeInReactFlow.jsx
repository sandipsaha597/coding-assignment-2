import { styled } from '@mui/material'

// Text node to show in website
const ImageNodeInReactFlow = ({ data }) => {
  return (
    <>
      {/* simple styling as per the design provided */}
      <StyledImg
        draggable="false"
        src={data.src}
        alt={data.alt}
        style={
          {
            // width: data.width,
            // height: data.height,
            // objectFit: 'contain',
          }
        }
      />
    </>
  )
}

export default ImageNodeInReactFlow

const StyledImg = styled('img')({
  display: 'block',
  verticalAlign: 'middle',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})
