import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import {useParams,useLocation}from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
const Single = ({isHotel,isRoom}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const {data,loading , error}=useFetch(`/users`)
  const filteredData = data.filter((item) => {
    return item._id === path; 
  });
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
        {!isHotel && !isRoom?  <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={filteredData[0]?.photo}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{filteredData[0]?.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{filteredData[0]?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{filteredData[0]?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {data[0]?.city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data[0]?.country}</span>
                </div>
              </div>
            </div>
          </div>:<></>}
          <div className="right">
            <Chart aspect={3 / 1} title={data[0]?.title} />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List isHotel={isHotel}/>
        </div>
      </div>
    </div>
  );
};

export default Single;
