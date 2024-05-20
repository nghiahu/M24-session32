import React, { useState } from 'react';

export default function Bt5() {
  const [productCode, setProductCode] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const product = {
      productCode,
      productName,
      price,
      quantity,
    };
    console.log(product);
  };

  return (
    <div style={{ paddingTop: 30 }}>Bài tập 5 <br />
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productCode">Mã sản phẩm</label> <br />
          <input type="text" id="productCode" value={productCode} onChange={(e) => setProductCode(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="productName">Tên sản phẩm</label> <br />
          <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="price">Giá</label> <br />
          <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="quantity">Số lượng</label> <br />
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

