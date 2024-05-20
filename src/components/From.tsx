import React, { useState } from 'react'

export default function From() {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const handleClick=()=>{
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        ///cập nhật state
        setName(e.target.value)
        
    }
    const emailElemant =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
  return (
    <div>From
        {/* 
        Các kĩ thuật xử lý trong from
        có 2 kĩ thuật xử lý chính
        1.controller
            + lấy dữ liệu người dùng nhập vào ô imput
            + lấy dữ liệu khi người dùng nhập vào ô textarea
            + chọn selec-option
            -ở trong funcion component muốn quản lý dữ liệu (trạng thái) dùng useState.
        2.uncontroller
        */}

        <div>
            <label htmlFor="">tên</label>
            <input 
            onChange={handleChange}
            type="text" 
            />
            <button onClick={handleClick}>LOgin</button>
            <p>{name}</p>
            <label htmlFor="">email</label>
            <input onChange={emailElemant} type="text" />
            <p>{email}</p>
        </div>
    </div>
  )
}
