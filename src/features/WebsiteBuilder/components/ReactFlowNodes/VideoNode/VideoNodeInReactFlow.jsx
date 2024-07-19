import { styled } from '@mui/material'
import { renderMode } from '../../../../../constants'

// Text node to show in website
const VideoNodeInReactFlow = ({ data, mode }) => {
  return (
    <>
      {/* simple styling as per the design provided */}
      {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YQHsXMglC9A?si=0u5_v7XWBp36VbqM"
            title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
      <StyledVideo
        key={data.src}
        controls={mode === renderMode.editor ? false : true}
        title={data.title}
      >
        <source src={data.src} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </>
  )
}

export default VideoNodeInReactFlow

const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  display: 'block',
  verticalAlign: 'middle',
})
