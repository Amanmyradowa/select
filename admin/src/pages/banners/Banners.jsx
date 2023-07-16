import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// For table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Banners() {
  const [count,setCount] = useState([0,0,0])
  return (
    <div>
      {/* Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Bannerler
                </TableCell>
                <TableCell align='center'>
                  Sany
                </TableCell>
                <TableCell
                  align='right'
                  style={{minWidth: '100px'}}
                  >
                  Açmak
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align='left'>
                  Baş sahypadaky bannerler
                </TableCell>
                <TableCell align='center'>
                  {count[0]}
                </TableCell>
                <TableCell align='right'>
                  <Link to={`/banners/open?index=0`} style={{textDecoration:'none'}}>
                    <Button
                      variant="contained" 
                      // color='error'
                      style={{marginRight:'10px'}}
                    >
                      Açmak
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align='left'>
                  Haryt içindäki bannerler
                </TableCell>
                <TableCell align='center'>
                  {count[1]}
                </TableCell>
                <TableCell align='right'>
                  <Link to={`/banners/open?index=1`} style={{textDecoration:'none'}}>
                    <Button
                      variant="contained" 
                      // color='error'
                      style={{marginRight:'10px'}}
                    >
                      Açmak
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align='left'>
                  Lentadaky bannerler
                </TableCell>
                <TableCell align='center'>
                  {count[2]}
                </TableCell>
                <TableCell align='right'>
                  <Link to={`/banners/open?index=2`} style={{textDecoration:'none'}}>
                    <Button
                      variant="contained" 
                      // color='error'
                      style={{marginRight:'10px'}}
                    >
                      Açmak
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
    </div>
  );
}

export default Banners;
