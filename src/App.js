import './App.css';
import "./component/style.css"
import ChartGrid from './component/Chart';
import Sidebar from './component/general/Sidebar';
import Header from './component/general/Header';

function App() {
  const data = [
    { label: 'A', value: 10, x: 5, y: 15 },
    { label: 'B', value: 20, x: 10, y: 25 },
    { label: 'C', value: 15, x: 15, y: 35 },
    { label: 'D', value: 25, x: 20, y: 45 },
    // Thêm dữ liệu cho biểu đồ ở đây
  ];

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <ChartGrid data={data} />
      </div>
    </div>
  );
}

export default App;
