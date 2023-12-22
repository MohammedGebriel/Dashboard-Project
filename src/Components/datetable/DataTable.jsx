import { Link } from 'react-router-dom'
import './datatable.css'

function DataTable() {
  return (
    <div className='datatable'>
      <div className="data-table-title">
        Add New User
        <Link to='/users/new' className='link'>
          Add New
        </Link>
      </div>

    </div>
  )
}

export default DataTable