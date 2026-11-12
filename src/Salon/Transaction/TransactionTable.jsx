import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSalonBookings } from '../../Redux/Booking/action';


export default function TransactionTable() {
  const dispatch = useDispatch()
  const {booking, salon} = useSelector(store => store);
  useEffect(() => {
    if(salon.salon){
      dispatch(fetchSalonBookings({jwt: localStorage.getItem("jwt")}))
    }
  },[salon.salon, dispatch])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Customer Detail</TableCell>
            <TableCell align="right">Booking</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booking.bookings.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.startTime}
              </TableCell>
              <TableCell align="right">{row.userDTO.email}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
