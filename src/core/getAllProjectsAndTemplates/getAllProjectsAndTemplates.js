import { produce } from 'immer'
import { getAllInBuiltTemplates } from '../inBuiltTemplates/templates/functions/getAllInbuiltTemplates'

export const getAllProjectsAndTemplates = (userAddedProjectsAndTemplates) => {
  /* In-build templates should not be stored in the state or localStorage
  User can't mutate in-built templates. If we want to add a new in-built template or 
  modify one, we should be able to without breaking anything */
  return produce(userAddedProjectsAndTemplates, (draftState) => {
    draftState.templates = getAllInBuiltTemplates().concat(draftState.templates)
  })
}
