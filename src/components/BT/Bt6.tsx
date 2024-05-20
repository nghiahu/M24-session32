import React, { useState } from 'react';

export default function Bt6() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [rePass, setrePass] = useState<string>('');
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      const user = {
        name,
        email,
        pass,
        rePass,
      };
      console.log(user);
    };
  return (
    <div style={{ paddingTop: 30 }}>Bài tập 6
      <div>
        <h2>Thêm mới tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Họ và tên</label> <br />
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Mật khẩu</label> <br />
            <input type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label> <br />
            <input type="password" name="confirmPassword" value={rePass} onChange={(e) => setrePass(e.target.value)}/>
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    </div>
  );
}
