import './featured.css'
import { MdMoreVert,MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured() {
    const percentage = 70
    return (
        <div className='featured'>
            <div className="top d-flex align-items-center justify-content-between">
                <h1 className="title">Total Revenue</h1>
                <MdMoreVert fontSize="small" />
            </div>
            <div className="bottom d-flex flex-column align-items-center justify-content-center">
                <div className="featured-chart">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={8}/>
                </div>
                <p className="title">Total sale</p>
                <p className="amount">$420</p>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="summary text-center d-flex align-items-center justify-content-between w-100">
                    <div className="item">
                        <div className="item-title">Target</div>
                        <div className="item-result negative d-flex align-items-center">
                            <MdKeyboardArrowDown />
                            <div className="result-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Last Week</div>
                        <div className="item-result positive d-flex align-items-center">
                            <MdKeyboardArrowUp />
                            <div className="result-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Last Month</div>
                        <div className="item-result positive d-flex align-items-center">
                            <MdKeyboardArrowUp />
                            <div className="result-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured