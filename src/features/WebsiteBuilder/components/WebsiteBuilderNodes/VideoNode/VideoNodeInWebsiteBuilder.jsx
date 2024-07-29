import { styled } from '@mui/material'
import { useRef } from 'react'
import { renderMode } from '../../../../shared/constants/renderMode'

// Text node to show in website
const VideoNodeInWebsiteBuilder = ({ data, mode }) => {
  const videoRef = useRef(null)

  return (
    <StyledVideo
      ref={videoRef}
      key={data.src}
      controls
      title={data.title}
      onClick={(e) => (mode === renderMode.editor ? e.preventDefault() : true)}
    >
      <source src={data.src} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
  )
}

export default VideoNodeInWebsiteBuilder

const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  display: 'block',
  verticalAlign: 'middle',
  pointerEvents: 'auto',
})
