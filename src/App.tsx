import './App.css'
import BottomBar from './components/bottomBar/BottomBar'
import Middlebar from './components/middleBar/Middlebar'
import TopBar from './components/topBar/TopBar'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
    <Layout>
      <TopBar />
      <Middlebar />
      <BottomBar />
    </Layout>
    </>
  )
}

export default App
