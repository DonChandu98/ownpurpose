import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ValentinePage from './pages/ValentinePage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="valentine" element={<ValentinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
