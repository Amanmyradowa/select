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


function Subcategories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dialog, setDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const id = window.location.search.split('=')[1];
    async function fetchData(){
      try {
        // const res = await AxiosInstance.get(`/categories`);
        const res = {
          status:200,
          data:[
            {
              name_tm:'Kategory1 tm',
              name_ru:'Kategory1 ru',
              image: require('../../assets/data/hyzmatlar.png')
            },
            {
              name_tm:'Kategory2 tm',
              name_ru:'Kategory2 ru',
              image: require('../../assets/data/markets.png')
            },
            {
              name_tm:'Kategory3 tm',
              name_ru:'Kategory3 ru',
              image: require('../../assets/data/onumcilikler.png')
            },
            {
              name_tm:'Kategory4 tm',
              name_ru:'Kategory4 ru',
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

      <Link to={'/categories/subcategory/add?categoryId=0'} style={{textDecoration:'none'}}>
        <Button variant="contained" color='success'>
          Sub-kategory goşmak
        </Button>
      </Link>

      <br />
      <br />
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
                  Sub-kategory ady tm
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Sub-kategory ady ru
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
                        {row.name_tm}
                      </TableCell>
                      <TableCell align='left'>
                        {row.name_ru}
                      </TableCell>
                      <TableCell align='right'>
                        <Link to={`/categories/subcategory/edit?categoryId=0&subcategoryId=1`} style={{textDecoration:'none'}}>
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

export default Subcategories;