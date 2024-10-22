import { useState } from 'react'
import CountdownTimer from './components/CountdownTimer'
import Stopwatch from './components/Stopwatch'

function App() {
  const [activeTab, setActiveTab] = useState<string>('countdown')
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-4'>Multi Function Timer</h1>
      <div className='flex space-x-4 mb-6'>
        <button className={`px-4 py-2 rounded ${activeTab === 'countdown' ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={()=>{setActiveTab('countdown')}}>Countdown Timer</button>
        <button className={`px-4 py-2 rounded ${activeTab === 'stopwatch' ? 'bg-blue-500': 'bg-gray-300'}`} onClick={()=>{setActiveTab('stopwatch')}}>Stopwatch</button>
      </div>
      {activeTab === 'countdown' ? <CountdownTimer /> : <Stopwatch />}
    </div>
  )
}

export default App
