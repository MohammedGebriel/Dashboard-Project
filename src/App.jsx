import Sidebar from './Components/sidebar/Sidebar'
import Navbar from './Components/navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { userInputs } from './FormSouce'
import { useContext } from 'react'
import { DarkModeContext } from './Components/context/DarkModeContext'
import './style/dark.css'
function App() {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <Router>
            <div className={darkMode ? 'home dark': 'home'}>
                <Sidebar />
                <div className="home-container">
                    <Navbar />
                    <Routes>
                        <Route path='/' >
                            <Route index element={<Home />} />
                            <Route path='users' element={<List />} />
                            <Route path='single' element={<Single />} />
                            <Route path='users/new' element={<New inputs={userInputs} title="Add New Users"/>} />
                        </Route>
                        

                    </Routes>
                    
                </div>
            </div>
        </Router>

    )
}

export default App