import Table from '../../Components/table/Table'
import Chart from '../../Components/chart/Chart'
import './single.css'

function Single() {
    return (
        <div className='single'>
            <div className="top d-flex">
                <div className="left">
                    <div className="edit-button">Edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item d-flex align-items-center">
                        <img src="https://picsum.photos/seed/picsum/100/100" alt="" className='item-img rounded-circle'/>
                        <div className="details">
                            <h1 className="item-title">Jane Doe</h1>
                            <div className="detail-item">
                                <span className="item-key">Email:</span>
                                <span className="item-value">janedow@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Phone:</span>
                                <span className="item-value">+1 2345 67 89</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Adress:</span>
                                <span className="item-value">Elton St. 234 Garden Yd. NewYork</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Country:</span>
                                <span className="item-value">USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart />
                </div>
            </div>
            <div className="bottom">
                <Table />
            </div>
        </div>
    )
}

export default Single