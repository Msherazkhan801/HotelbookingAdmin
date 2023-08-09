import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../hooks/useFetch";

const List = ({isHotel}) => {
  const {data,loading , error}=useFetch(isHotel ? `/hotel` :'/room')
  console.log(data);
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">{isHotel ? 'Type': 'Description'}</TableCell>
            <TableCell className="tableCell">{isHotel?'City': 'Max People'}</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Adress</TableCell>
          </TableRow>
        </TableHead>
      {isHotel ?  <TableBody>
          {data.map((row,i) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{i+1}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row?.photo[0]?row?.photo[0] :rows[0]?.img } alt="" className="image" />
                  {row?.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row?.type}</TableCell>
              <TableCell className="tableCell">{row.city}</TableCell>
              <TableCell className="tableCell">{row?.cheapestPrice}</TableCell>
              <TableCell className="tableCell">{row?.adress ?row?.adress:'adress not availibale'}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
        :
        <TableBody>
        {data.map((row,i) => (
          <TableRow key={row._id}>
            <TableCell className="tableCell">{i+1}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                {/* <img src={row?.photo[0]?row?.photo[0] :rows[0]?.img } alt="" className="image" /> */}
                {row?.title}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row?.desc}</TableCell>
            <TableCell className="tableCell">{row.maxPeople}</TableCell>
            <TableCell className="tableCell">{row?.price}</TableCell>
            <TableCell className="tableCell">{row?.adress ?row?.adress:'adress not availibale'}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>}
      </Table>
    </TableContainer>
  );
};

export default List;