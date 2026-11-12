import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchServicesBySalonId,
} from "../../Redux/SalonServices/action";
import IconButton from "@mui/material/IconButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function ServiceTable() {
  const dispatch = useDispatch();
  const { salon,salonService} = useSelector((store) => store);
  useEffect(() => {
    if (salon.salon) {
      dispatch(
        fetchServicesBySalonId({
          salonId: salon.salon?.id,
          jwt: localStorage.getItem("jwt"),
          categoryId: null,
        }),
      );
    }
  }, [dispatch, salon.salon]);
  return (
    <>
      <h1 className="pb-5 font-bold text-xl">Services</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">PRICE</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salonService.services.map((service) => (
              <StyledTableRow key={service.id}>
                <StyledTableCell component="th" scope="row">
                  <div className="flex gap-1 flex-wrap">
                    <img
                      className="w-20 rounded-md"
                      src={service.image}
                    />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{service.name}</StyledTableCell>
                <StyledTableCell align="right">{service.price}</StyledTableCell>
                <StyledTableCell align="right" className="space-y-2">
                  <IconButton>
                    <Edit/>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
