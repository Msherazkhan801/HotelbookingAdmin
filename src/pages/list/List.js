import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/dataTable/DataTable"

const List = ({columns,ishotel,isRoom}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable columns={columns} ishotel={ishotel} isRoom={isRoom}/>
      </div>
    </div>
  )
}

export default List