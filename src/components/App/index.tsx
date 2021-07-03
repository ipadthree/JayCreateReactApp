// 必须把app wrap在 BrowserRouter 里， 要不然useHistory不管用的
// BrowserRouter会keep URL 与 浏览器一致
// MemoryRouter会把url存在memory里，适合React Native用
import { BrowserRouter } from 'react-router-dom';
import AppContent from '../Routes';
import Navbar from '../Navigation/Navbar';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <AppContent />
            </div>
        </BrowserRouter>
    );
}

export default App;
