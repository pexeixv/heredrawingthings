import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import BaseLayout from '@/components/BaseLayout'
import { useSnipcartCartSync } from '@/hooks/useSnipcartCartSync'

function App() {
  useSnipcartCartSync()
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<BaseLayout disableHeader disableFooter />}>
        <Route path="/minimal" element={<>Test</>} />
      </Route>
    </Routes>
  )
}

export default App
