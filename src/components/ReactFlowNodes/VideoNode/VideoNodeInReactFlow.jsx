import { styled } from '@mui/material'

// Text node to show in chatbotFlow
const VideoNodeInReactFlow = ({ selected, data }) => {
  return (
    <>
      {/* simple styling as per the design provided */}
      <StyledTextNodeInReactFlow selected={selected}>
        <div style={{ userSelect: 'none' }}>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YQHsXMglC9A?si=0u5_v7XWBp36VbqM"
            title="YouTube video player"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
          <video
            key={data.src}
            width="320"
            height="240"
            controls
            title={data.title}
          >
            <source src={data.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </StyledTextNodeInReactFlow>
    </>
  )
}

export default VideoNodeInReactFlow

const StyledTextNodeInReactFlow = styled('div')(({ selected }) => ({
  // the selected nodes should be highlighted
  outline: `2px solid ${selected ? '#7386bc' : 'transparent'}`,
  borderRadius: '10px',
  overflow: 'hidden',
}))
