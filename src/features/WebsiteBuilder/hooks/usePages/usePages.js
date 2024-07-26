import { useDispatch, useSelector } from 'react-redux'
import {
  websiteBuilderPagesSelector,
  websiteBuilderSliceActions,
} from '../../redux/websiteBuilderSlice'
import { getActivePage } from '../../../../core/utilFunctions'
import { useCallback } from 'react'
import { getNewPageObj } from '../../schemaGenerator/schemaGetters/getNewPageObj'

export const usePages = () => {
  const pages = useSelector(websiteBuilderPagesSelector)
  const [activePage] = getActivePage(pages)
  const activePageId = activePage.id

  const dispatch = useDispatch()

  const addPage = useCallback(() => {
    dispatch(websiteBuilderSliceActions.addPage({ newPage: getNewPageObj() }))
  }, [dispatch])

  const changeActivePage = useCallback(
    (pageId) => {
      dispatch(
        websiteBuilderSliceActions.changeActivePage({
          pageId,
        })
      )
    },
    [dispatch]
  )

  const updatePageDetails = (pageId, details) => {
    dispatch(
      websiteBuilderSliceActions.updatePageDetails({
        pageId,
        details,
      })
    )
  }

  return {
    activePageId,
    activePage,
    pages,
    addPage,
    changeActivePage,
    updatePageDetails,
  }
}
