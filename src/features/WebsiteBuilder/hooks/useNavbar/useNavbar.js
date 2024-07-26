import { useDispatch, useSelector } from 'react-redux'
import {
  websiteBuilderNavbarSelector,
  websiteBuilderSliceActions,
} from '../../redux/websiteBuilderSlice'
import { useCallback } from 'react'
import { getNewNavbarItemObj } from '../../schemaGenerator/schemaGetters/getNewNavbarItemObj'

export const useNavbar = () => {
  const navbar = useSelector(websiteBuilderNavbarSelector)
  const dispatch = useDispatch()

  const addItemInNavbar = useCallback(() => {
    dispatch(
      websiteBuilderSliceActions.addItemInNavbar({
        newItem: getNewNavbarItemObj(),
      })
    )
  }, [dispatch])

  const updateItemInNavbar = useCallback(
    (itemId, updatedData) => {
      dispatch(
        websiteBuilderSliceActions.updateItemInNavbar({
          itemId,
          updatedData,
        })
      )
    },
    [dispatch]
  )

  const updateNavbarStyles = useCallback(
    (styleProperty, value) => {
      dispatch(
        websiteBuilderSliceActions.updateNavbarStyles({
          styleProperty,
          value,
        })
      )
    },
    [dispatch]
  )

  return { navbar, addItemInNavbar, updateItemInNavbar, updateNavbarStyles }
}
