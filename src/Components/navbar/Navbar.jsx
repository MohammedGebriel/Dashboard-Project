import { useContext } from 'react';
import './navbar.css'
import { MdSearch,MdLanguage,MdDarkMode,MdFullscreenExit,MdNotificationsNone,MdOutlineChatBubbleOutline,MdViewList } from "react-icons/md";
import { DarkModeContext } from '../context/DarkModeContext';
function Navbar() {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className='navbar w-100 d-flex align-items-center'>
            <div className="wrapper d-flex justify-content-between w-100 align-items-center">
                <div className="search d-flex align-items-center p-1 border ">
                    <input type="text" placeholder='Search...' className='border-0 outline-0 me-2'/>
                    <MdSearch className='icon fs-4 text-secondary'/>
                </div>
                <div className="items d-flex ">
                    <div className="item">
                        <MdLanguage className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <MdDarkMode className='icon mode' onClick={()=> dispatch({type:"TOOGLE"})}/>
                    </div>
                    <div className="item">
                        <MdFullscreenExit className='icon' />
                    </div>
                    <div className="item">
                        <MdNotificationsNone className='icon' />
                        <div className="counter d-flex align-items-center justify-content-center text-white fw-bold rounded-circle">1</div>
                    </div>
                    <div className="item">
                        <MdOutlineChatBubbleOutline className='icon' />
                        <div className="counter d-flex align-items-center justify-content-center text-white fw-bold rounded-circle">2</div>
                    </div>
                    <div className="item">
                        <MdViewList className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU" alt="" width="30px" height="30px" 
                        className='rounded-circle'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar