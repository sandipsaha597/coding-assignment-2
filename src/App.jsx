import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './features/Home/pages/HomePage'
import WebsiteBuilderPage from './features/WebsiteBuilder/pages/WebsiteBuilderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/builder/:projectId" element={<WebsiteBuilderPage />} />
      {/* <Route path="/preview/:projectId" element={<PreviewPage />} /> */}
    </Routes>
  )
}

export default App
