import './App.css'
import StudentChart from './components/Dashboard/StudentChart'
import NavBer from './components/NavBer/NavBer'
import PhoneBer from './components/PhoneBer/PhoneBer'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <>
      <NavBer />
      <PriceList />
      <StudentChart />
      <PhoneBer />
    </>
  )
}

export default App
