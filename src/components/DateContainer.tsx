import {DateDisplay} from "./DateDisplay.tsx";
import {useEffect, useState} from "react";

export const DateContainer = () => {
    const [date,setDate] = useState(Date.now()); //use Stage
    //props là 1 cách để truyền biến của component này sang component khác
    // useEffect sẽ thực hiện 1 hành động dụa trên 1 cái gì đó
    // useEffect(()=>{
    //     console.log('rendered')
    // },[date])
    return (
        <div className='flex justify-center items-center flex-col mt-[3rem]'>
            <input
                type="date"
                className='text-[1.5rem] p-4 rounded-[14px] border-4 border-teal-400'
                onChange={(e) => setDate(e.target.value)}/>
            <DateDisplay date={date}/>
        </div>
    )
}
