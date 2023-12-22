import './home.css'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'
import Table from '../../Components/table/Table'
function Home() {
  return (
    <>
      <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="list-container">
                    <div className="list-title mb-3">Latest Transactions</div>
                    <Table />
                </div>
    </>
  )
}

export default Home