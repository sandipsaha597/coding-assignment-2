import { toast } from '../../../../../../../customLibraries/MyReactToastify/toast'
import { store } from '../../../../../../../store/store'
import {
  getItemById,
  handleDownload,
} from '../../../../../../../utils/functions'
import { websiteBuilderPagesSelector } from '../../../../../redux/websiteBuilderSlice'
import { BUTTON_ACTION_TYPES } from './buttonActionTypes'

export const BUTTON_ACTION_TYPE_TO_FUNCTION_MAP = {
  [BUTTON_ACTION_TYPES.REDIRECT_TO_EXTERNAL_URL]: (fullURL) => {
    const newWindow = window.open(fullURL, '_blank', 'noopener,noreferrer')
    if (newWindow) {
      newWindow.opener = null
    }
  },
  [BUTTON_ACTION_TYPES.REDIRECT_TO_INTERNAL_URL]: (pageId, { navigate }) => {
    const [page, index] = getItemById(
      pageId,
      websiteBuilderPagesSelector(store.getState())
    )
    if (index === -1) {
      toast.error('Page does not exist or got deleted')
      return
    }
    const pageSlug = page.pageDetails.slug
    navigate(pageSlug)
  },
  [BUTTON_ACTION_TYPES.DOWNLOAD_A_FILE]: (fileURL) => {
    const [result, errName, errMessage] = handleDownload(fileURL)
    if (result === false) {
      toast.error(`${errName}: ${errMessage}`)
    }
  },
}
