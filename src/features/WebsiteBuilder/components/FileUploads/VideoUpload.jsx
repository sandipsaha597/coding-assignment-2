import FileUploadAny from './FileUploadAny'

export const VideoUpload = ({ inputId, onUpload }) => {
  // URL.revokeObjectURL(blobURL)

  // const handleFileReset = () => {
  //   if (blobURL) {
  //     URL.revokeObjectURL(blobURL)
  //     setBlobURL('')
  //   }
  // }
  return (
    <FileUploadAny
      inputId={inputId}
      acceptedFileTypes="video/*"
      maxFileSizeInKB={20 * 1024}
      fileTypeValidation={(file) => {
        if (file.type.startsWith('video/')) return true
        return 'Please upload a valid video file'
      }}
      onUpload={onUpload}
    >
      Video Upload
    </FileUploadAny>
  )
}

export default VideoUpload
