import './widget.css'
import { MdKeyboardArrowUp,MdPersonOutline,MdAddShoppingCart,MdAccountBalanceWallet,MdMonetizationOn } from "react-icons/md";
function Widget({ type }) {
    let data;
    // temporary
    const amount = 100;
    const diff = 20;
    switch(type) {
        case "user" :
        data = {
            title: "USERS",
            isMoney: false,
            link: "See all Users",
            icon: <MdPersonOutline className='icon d-flex align-self-end p-1 rounded-1'
            style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
        };
        break;
        case "order" : 
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all Orders",
            icon: <MdAddShoppingCart className='icon d-flex align-self-end p-1 rounded-1'
            style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>
        };
        break;
        case "earning" : 
        data = {
            title: "EARNINGS",
            isMoney: false,
            link: "View net earnings",
            icon: <MdMonetizationOn className='icon d-flex align-self-end p-1 rounded-1'
            style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>
        };
        break;
        case "balance" : 
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See Details",
            icon: <MdAccountBalanceWallet className='icon d-flex align-self-end p-1 rounded-1'
            style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>
        };
        break;
        default: break;
    }
    return (
        <div className='widget  d-flex justify-content-between rounded-2'>
            <div className="left d-flex flex-column justify-content-between">
                <span className="title fw-bold text-secondary">{data.title}</span>
                <span className="counter">{data.isMoney? "$": ""} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right d-flex flex-column justify-content-between">
                <div className="percentage d-flex align-items-center positive">
                    <MdKeyboardArrowUp />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget