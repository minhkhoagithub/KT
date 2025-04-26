import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        {/* <div className="flex items-center">
          <img src="/logo.png" alt="IUH Logo" className="h-10 mr-4" />
          <div>
            <h1 className="text-lg font-bold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
            <p className="text-sm">Đổi mới tư duy, làm giàu tri thức - đời sống</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Kết nối</a>
          <a href="#" className="hover:underline">Liên hệ</a>
          <img src="/vn.png" alt="VN" className="h-5" />
          <img src="/en.png" alt="EN" className="h-5" />
        </div> */}
      </header>

      {/* Banner */}
      <div className="bg-blue-100 text-center py-6">
        <h2 className="text-2xl font-bold text-red-600">Hòa Bình - Phát Triển</h2>
        <p className="text-gray-700">Vươn tầm cao mới, hướng tới tương lai</p>
      </div>

      {/* Main content */}
      <main className="flex flex-1 bg-gray-100 justify-center py-4 flex">
        <div className="flex w-11/12 max-w-7xl bg-white rounded-lg shadow-lg h-[70vh] overflow-y-auto border">
          {/* Sidebar */}
          <aside className="w-1/4 p-4 border-r">
            <h3 className="font-bold mb-2">Cơ cấu tổ chức</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-700 hover:underline">Lãnh đạo</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Các phòng ban</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Các khoa</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Các viện</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Các trung tâm</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Các phân hiệu</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Đoàn thể</a></li>
            </ul>
          </aside>

          {/* Main news content */}
          <section className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded shadow">
                <h3 className="font-bold mb-2 text-red-600">Thông báo</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Thông báo kế hoạch nghỉ lễ 2025</li>
                  <li>Thông báo tuyển chọn sinh viên tốt nghiệp</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow">
                <h3 className="font-bold mb-2 text-red-600">Tuyển sinh</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Tuyển sinh đào tạo liên thông</li>
                  <li>Tuyển sinh văn bằng hai</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow">
                <h3 className="font-bold mb-2 text-red-600">Tin tức - Sự kiện</h3>
                <p>AVEVA tài trợ phần mềm trị giá 180.000 đô cho IUH.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow">
                <h3 className="font-bold mb-2 text-red-600">Hợp tác quốc tế</h3>
                <p>Tuần lễ giao lưu văn hóa quốc tế 2025.</p>
              </div>
            </div>
            
          </section>
          
        </div>
        
      </main>
      <footer className="bg-blue-900 text-white text-center py-4 max">
        © 2025 Đại học Công nghiệp TP. Hồ Chí Minh
      </footer>
      {/* Footer */}
      
    </div>
  );
};

export default Layout;
