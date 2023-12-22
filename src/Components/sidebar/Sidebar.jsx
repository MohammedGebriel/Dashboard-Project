
import { Link } from 'react-router-dom';
import { MdDashboard,MdPersonOutline,MdStore,MdCreditCard,MdLocalShipping,MdInsertChart,MdNotificationsNone,MdSettingsSystemDaydream,MdOutlinePsychology,MdSettingsApplications,MdSupervisedUserCircle,MdLogout } from "react-icons/md";
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import './sidebar.css'
function Sidebar() {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar vh-100'>
      <div className="top d-flex align-items-center justify-content-center fs-5">
        <Link to='/'>
          <span className="logo fw-bold">lamadmin</span>
        </Link>
      </div>
      
      <div className="center ">
        <ul >
          <p className="title mb-0">Main</p>
          <li>
            <MdDashboard className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title mb-0">Lists</p>
          <Link to='/users'>
            <li>
              <MdPersonOutline className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          {/* <Link to='/'>
        </Link> */}
        <Link to='/products'>
          <li>
            <MdStore className="icon"/>
            <span>Products</span>
          </li>
        </Link>

          <li>
          <MdCreditCard className="icon"/>
            <span>Orders</span>
          </li>
          <li>
          <MdLocalShipping className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title mb-0">USEFUL</p>
          <li>
          <MdInsertChart className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <MdNotificationsNone className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title mb-0">services</p>

          <li>
          <MdSettingsSystemDaydream className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <MdOutlinePsychology className="icon"/>
            <span>Logs</span>
          </li>
          <p className="title mb-0">user</p>
          <li>
            <MdSettingsApplications className="icon"/>
            <span>Setting</span>
          </li>
          <li>
            <MdSupervisedUserCircle className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <MdLogout className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div onClick={()=> dispatch({type:"DARK"})}></div>
        
      </div>
    </div>
  )
}

export default Sidebar