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
import TextField from '@mui/material/TextField';




function Markets() {
  const [data,setData] = useState([])
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dialog, setDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [status,setStatus] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      try {
        // const res = await AxiosInstance.get(`/storages?limit=${rowsPerPage}&offset=${page*rowsPerPage}`);
        const res = {
          data:{
            rows:[
              {
                name:'Dowrebap',
                image: require('../../assets/data/hyzmatlar.png'),
                place: 'Ashgabat',
              },
              {
                name:'Ykjam',
                image: require('../../assets/data/hyzmatlar.png'),
                place: 'Tejen',
              },
              {
                name:'Serpay',
                image: require('../../assets/data/hyzmatlar.png'),
                place: 'Ashgabat',
              },
            ],
            count:3
          },
          status:200
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

  //For default statur
  useEffect(()=>{
    const st = localStorage.getItem('status');
    if(st == null){
      setStatus(0);
      localStorage.setItem('status',status)
    }else(
      setStatus(st)
    )
  },[])

  // const handleChange = (prop) => (event) => {
  //   console.log(event.target.value)
    
  // };

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
      await AxiosInstance.post('/storages/delete/'+id);
    } catch ({response}) {
      window.confirm(response.data.message);
    }
    const newState = []
    for(let i = 0; i<data.length; i++){
      if(data[i].storage_id !== id){
        newState.push(data[i]);
      }
    }
    setCount(count-1);
    setDialog(false);
    setData(newState);
  }

  const changeStatus = (index)=>{
    setStatus(index);
    localStorage.setItem('status',index);
  }

  const search = (event)=>{
    if(event.keyCode === 13){
      console.log(event.target.value)
    }
  }

  const imageStyle = {
    with:'300px',
    height: '100px',
  }
  const searchInput = {
    width:'400px',
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
      <div style={{display:'flex'}}>
        <Button style={{marginRight:'10px'}} variant="contained" color={status == 0 ? 'success' : 'primary'} onClick={()=>{changeStatus(0)}}>
          Garaşylýanlar
        </Button>
        <Button style={{marginRight:'10px'}} variant="contained" color={status == 1 ? 'success' : 'primary'} onClick={()=>{changeStatus(1)}}>
          Kabul edilenler
        </Button>
        <Button variant="contained" color={status == 2 ? 'success' : 'primary'} onClick={()=>{changeStatus(2)}}>
          Ýatyrylanlar
        </Button>
      </div>

      <br />
      <br />

      <TextField 
        fullWidth   
        id="standard-basic" 
        label="Gözleg..." 
        variant="standard" 
        value={data.name_ru} 
        autoComplete='off'
        // onChange={handleChange('search')}
        style={searchInput}
        onKeyDown={search}
      />

      <br /><br />

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
                  Market ady
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Market ýeri
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Suraty
                </TableCell>
                <TableCell
                  align='right'
                  style={{minWidth: '300px'}}
                  >
                  Üýtgetmek / Açmak / Pozmak
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .map((row,i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell align='left'>
                        {row.name}
                      </TableCell>
                      <TableCell align='left'>
                        {row.place}
                      </TableCell>
                      <TableCell align='left'>
                        <img style={imageStyle} src={row.image} alt="" />
                      </TableCell>
                      <TableCell align='right'>
                        <Link to={`/markets/edit?id=${row.storage_id}`}  style={{textDecoration:'none'}}>
                          <Button
                            variant="contained" 
                            style={{marginRight:'10px'}}
                            color='success'
                          >
                            Üýtgetmek
                          </Button>
                        </Link>
                        {
                          status == 1 ?
                          <Link to={`/markets/open?id=${row.storage_id}`}  style={{textDecoration:'none'}}>
                            <Button
                              variant="contained" 
                              style={{marginRight:'10px'}}
                            >
                              Açmak
                            </Button>
                          </Link>:''
                        }
                        <Button
                          variant="contained" 
                          color='error'
                          onClick={()=>handleDialog(row.storage_id,1)}
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

export default Markets;