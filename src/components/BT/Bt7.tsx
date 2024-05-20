import React, { useState } from 'react';

export default function Bt7() {
  const [gender, setGender] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
};
  return (
    <div style={{ paddingTop: 30 }}>
      <h3>Bài tập 7</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Giới tính: {gender}</p>
            <input type="radio" name="gender" value="Nam"  onChange={(e) => setGender(e.target.value)}/> Nam
            <input  type="radio" name="gender" value="Nữ" onChange={(e) => setGender(e.target.value)}/> Nữ
            <input  type="radio" name="gender" value="Khác"onChange={(e) => setGender(e.target.value)}/>Khác
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
