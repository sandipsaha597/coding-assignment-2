import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './features/Home/pages/HomePage'
import WebsiteBuilderPage from './features/WebsiteBuilder/pages/WebsiteBuilderPage'
import { PreviewPage } from './features/Preview'
import { useAutoSaveProjectsAndTemplates } from './hooks/useAutoSaveProjectsAndTemplates/useAutoSaveProjectsAndTemplates'

function App() {
  useAutoSaveProjectsAndTemplates()
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/builder/:projectId" element={<WebsiteBuilderPage />} />
      <Route path="/preview/:projectOrTemplateId/*" element={<PreviewPage />} />
    </Routes>
  )
}

export default App
