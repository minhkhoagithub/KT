import React from 'react';

const Menu = () => {
  return (
    <nav style={{ backgroundColor: '#2f2f91', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ position: 'relative', marginRight: '20px' }} >
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Giới thiệu</a>
          <ul style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#ffffff',
            listStyle: 'none',
            padding: '10px 0',
            margin: 0,
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            display: 'none',
            minWidth: '220px'
          }}
            className="submenu"
            
          >
            <li><a href="#" style={linkStyle}>Giới thiệu chung</a></li>
            <li><a href="#" style={linkStyle}>Tầm nhìn - Sứ mạng</a></li>
            <li><a href="#" style={linkStyle}>Triết lý giáo dục</a></li>
            <li><a href="#" style={linkStyle}>Phương châm hoạt động</a></li>
            <li><a href="#" style={linkStyle}>Giá trị cốt lõi</a></li>
            <li><a href="#" style={linkStyle}>Chính sách chất lượng</a></li>
            <li><a href="#" style={linkStyle}>Sơ đồ tổ chức</a></li>
            <li><a href="#" style={linkStyle}>Cơ sở vật chất</a></li>
            <li><a href="#" style={linkStyle}>Đội ngũ</a></li>
            <li><a href="#" style={linkStyle}>Ba công khai</a></li>
            <li><a href="#" style={linkStyle}>Hệ thống nhận diện</a></li>
          </ul>
        </li>

        {/* Thêm các menu khác giống vậy */}
        <li style={{ marginRight: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Đào tạo</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Tuyển sinh</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Nghiên cứu</a>
        </li>
        {/* Các mục khác tương tự */}
      </ul>

      <style>{`
        li:hover > .submenu {
          display: block;
        }
      `}</style>
    </nav>
  );
};

const linkStyle = {
  display: 'block',
  padding: '8px 16px',
  color: '#000',
  textDecoration: 'none'
};

export default Menu;
