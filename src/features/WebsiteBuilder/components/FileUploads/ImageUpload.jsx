import FileUploadAny from './FileUploadAny'

const ImageUpload = ({ inputId, onUpload }) => {
  return (
    <FileUploadAny
      inputId={inputId}
      acceptedFileTypes="image/*"
      maxFileSizeInKB={2 * 1024}
      fileTypeValidation={(file) => {
        if (file.type.startsWith('image/')) return true
        return 'Please upload a valid image file'
      }}
      onUpload={onUpload}
    >
      Image Upload
    </FileUploadAny>
  )
}

export default ImageUpload
