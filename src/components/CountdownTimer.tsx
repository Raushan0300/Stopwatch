import { useEffect, useState } from "react"

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState<number>(60);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [inputTime, setInputTime] = useState<number>(60);

    useEffect(()=>{
        let timer: NodeJS.Timeout | undefined;
        if(isActive && timeLeft > 0){
            timer = setInterval(()=>setTimeLeft((prev)=>prev - 1), 1000);
        } else if(!isActive && timeLeft !== 0){
            clearInterval(timer);
        }

        return()=>clearInterval(timer);
    },[isActive, timeLeft]);

    const handleStart = () => {
        setTimeLeft(inputTime);
        setIsActive(true);
    };

  return (
    <div className="text-center">
        <h2 className="text-2xl mb-2">Countdown Timer</h2>
        <label htmlFor="timeInput" className="block text-lg mb-2">Set Time (seconds)</label>
        <input type="number" id="timeInput" value={inputTime} onChange={(e)=>{setInputTime(Number(e.target.value))}} className="px-4 py-2 border-gray-300 rounded" disabled={isActive} />
        <div className="text-4xl mb-4">{timeLeft}s</div>
        {!isActive&&<button className="px-4 py-2 bg-green-500 text-white rounded mr-2" onClick={handleStart} disabled={isActive}>Start</button>}
        <button className="px-4 py-2 bg-yellow-500 text-white rounded mr-2" onClick={()=>{setIsActive(!isActive)}} disabled={timeLeft===0}>{isActive ? 'Pause' : 'Resume'}</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={()=>{
            setIsActive(false);
            setTimeLeft(60)}}>Reset</button>
    </div>
  )
}

export default CountdownTimer