import React,{useState,useEffect} from 'react';
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




function Categories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dialog, setDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    async function fetchData(){
      try {
        // const res = await AxiosInstance.get(`/categories`);
        const res = {
          status:200,
          data:[
            {
              name:'Kategory1 tm',
              link:'Kategory1 ru',
              image: require('../../assets/data/hyzmatlar.png')
            },
            {
              name:'Kategory2 tm',
              link:'Kategory2 ru',
              image: require('../../assets/data/markets.png')
            },
            {
              name:'Kategory3 tm',
              link:'Kategory3 ru',
              image: require('../../assets/data/onumcilikler.png')
            },
            {
              name:'Kategory4 tm',
              link:'Kategory4 ru',
              image: require('../../assets/data/restoran.png')
            },
          ]
        }
        if(res.status===200){
          setData(res.data);
        }
      } catch ({response}) {
        window.confirm(response.data.message)
      }
    }
    fetchData()
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDialog = (id,confirm)=>{
    if(confirm){
      setDeleteId(id);
    }
    setDialog(!dialog);
  }

  const deleteRow = async()=>{
    const id = deleteId;
    try {
      await AxiosInstance.post('/products/delete/'+id);
    } catch ({response}) {
      window.confirm(response.data.message);
    }
    const newState = []
    for(let i = 0; i<data.length; i++){
      if(data[i].news_id !== id){
        newState.push(data[i]);
      }
    }
    setCount(count-1);
    setDialog(false);
    setData(newState);
  }

  const imageStyle = {
    with:'300px',
    height: '100px',
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

      <Link to={'/banners/add?categoryId=0'} style={{textDecoration:'none'}}>
        <Button variant="contained" color='success'>
          Banner goşmak
        </Button>
      </Link>
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
                  Banner ady
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Banner linki
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Suraty
                </TableCell>
                <TableCell
                  align='right'
                  style={{minWidth: '100px'}}
                  >
                  Üýtgetmek / Pozmak
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell align='left'>
                        {row.name}
                      </TableCell>
                      <TableCell align='left'>
                        {row.link}
                      </TableCell>
                      <TableCell align='left'>
                        <img style={imageStyle} src={row.image} alt="" />
                      </TableCell>
                      <TableCell align='right'>
                        <Link to={`/banners/edit?id=${i}`} style={{textDecoration:'none'}}>
                          <Button
                            variant="contained" 
                            style={{marginRight:'10px'}}
                          >
                              Üýtgetmek
                          </Button>
                        </Link>
                        <Button
                          variant="contained" 
                          color='error'
                          style={{marginRight:'10px'}}
                          onClick={()=>handleDialog(row.product_id,1)}
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Categories;