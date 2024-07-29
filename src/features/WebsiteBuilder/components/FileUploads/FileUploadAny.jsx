import { Box, Button } from '@mui/material'
import { toast } from '../../../../customLibraries/MyReactToastify/toast'
import { useRef } from 'react'

const FileUploadAny = ({
  inputId,
  acceptedFileTypes = '*',
  maxFileSizeInKB,
  fileTypeValidation = () => true,
  onUpload,
  children,
}) => {
  const fileInputRef = useRef(null)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const fileValidation = fileTypeValidation(file)
    if (fileValidation !== true) {
      toast.error(fileTypeValidation)
      return
    }
    if (file.size > maxFileSizeInKB * 1024) {
      toast.error(
        `File size exceeds the ${maxFileSizeInKB}KB limit. Please select a smaller file.`
      )
      return
    }
    /* LocalStorage only has 5MB limit. Can't store large files there. IndexDB is a 
    good alternative. With URL.createObjectURL(file) I'm mimicking backend service which returns a 
    URL */
    onUpload(URL.createObjectURL(file))
  }

  return (
    <Box>
      <input
        ref={fileInputRef}
        accept={acceptedFileTypes}
        style={{ display: 'none' }}
        id={inputId}
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor={inputId}>
        <Button
          variant="contained"
          onClick={() => fileInputRef.current.click()}
        >
          {children || 'Upload file'}
        </Button>
      </label>
    </Box>
  )
}

export default FileUploadAny
