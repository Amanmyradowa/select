import React,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AxiosInstance } from '../../common/AxiosInstance';
// For table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';




function News() {
  const [data,setData] = useState([])
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dialog, setDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      try {
        // const res = await AxiosInstance.get(`/mail?limit=${rowsPerPage}&offset=${page*rowsPerPage}`);
        const res = {
          status:200,
          data:{
            count:3,
            rows:[
              {
                phoneOrEmail:"hydyrowayhan7@gmail.com",
                code:"JLKFJD&f8dfh"
              },
              {
                phoneOrEmail:"hydyrowayhan7@gmail.com",
                code:"JLKFJD&f8dfh"
              },
              {
                phoneOrEmail:"+99364813308",
                code:"JLKFJD&f8dfh"
              },
            ]
          }
        }
        if(res.status===200){
          setData(res.data.rows);
          setCount(res.data.count);
        }
      } catch ({response}) {
        window.confirm(response.data.message)
      }
    }
    fetchData()
  },[page,count])

  const handleDialog = (id,confirm)=>{
    if(confirm){
      setDeleteId(id);
    }
    setDialog(!dialog);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteRow = async()=>{
    const id = deleteId;
    try {
      await AxiosInstance.delete('/mail/'+id);
    } catch ({response}) {
      window.confirm(response.data.message);
    }
    const newState = []
    for(let i = 0; i<data.length; i++){
      if(data[i].id !== id){
        newState.push(data[i]);
      }
    }
    setCount(count-1);
    setDialog(false);
    setData(newState);
  }



  return (
    <div>
      <Dialog
        open={dialog}
        onClose={handleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Siz hakykatdanam pozmak isleýaňizmi?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDialog}>Ýok</Button>
          <Button onClick={deleteRow} autoFocus>
            Howa
          </Button>
        </DialogActions>
      </Dialog>

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
                  Nomer ýada Email 
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Kode
                </TableCell>
                <TableCell
                  align='right'
                  style={{minWidth: '300px'}}
                  >
                  Açmak / Pozmak
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .map((row,i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell align='left'>
                        {row.phoneOrEmail}
                      </TableCell>
                      <TableCell align='left'>
                        {row.code}
                      </TableCell>
                      <TableCell align='right'>
                        <Link to={`/mailShow?id=${row.id}`}  style={{textDecoration:'none'}}>
                          <Button
                            variant="contained" 
                            style={{marginRight:'10px'}}
                          >
                            Açmak
                          </Button>
                        </Link>
                        <Button
                          variant="contained" 
                          color='error'
                          onClick={()=>handleDialog(row.id,1)}
                        >
                          Pozmak
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default News;