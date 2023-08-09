import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../formSouurce";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const baseUrl="http://localhost:8000/api"
const Datatable = ({columns,ishotel,isRoom}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(ishotel ?"/hotel" :isRoom?'/room':`/users`);
  const viewData=ishotel ?"hotels" :isRoom?'rooms':`users`
console.log(viewData);
 
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    const paths=ishotel ?'hotel':isRoom ? 'room' :"users"
    try {
      if(isRoom){
        const res = await axios.get(baseUrl+"/hotel/");
        const hotelId=res.data[0]._id
         await axios.delete(`${baseUrl}/${paths}/${id}/${hotelId}`);
        setList(list.filter((item) => item._id !== id));

      }else{
        await axios.delete(`${baseUrl}/${paths}/${id}`);
        setList(list.filter((item) => item._id !== id));

      }
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${viewData}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;