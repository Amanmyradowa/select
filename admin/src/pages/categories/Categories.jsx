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




function Categories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(()=>{
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
  const imageStyle = {
    with:'300px',
    height: '100px',
  }
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
                  Kategory ady tm
                </TableCell>
                <TableCell
                  align='left'
                  style={{minWidth: '170px'}}
                >
                  Kategory ady ru
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
                  Üýtgetmek / Açmak
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
                      <TableCell align='left'>
                        <img style={imageStyle} src={row.image} alt="" />
                      </TableCell>
                      <TableCell align='right'>
                        <Link to={`/categories/edit?id=${i}`} style={{textDecoration:'none'}}>
                          <Button
                            variant="contained" 
                            style={{marginRight:'10px'}}
                          >
                              Üýtgetmek
                          </Button>
                        </Link>
                        <Link to={`/categories/subcategory?categoryId=${i}`} style={{textDecoration:'none'}}>
                          <Button
                            variant="contained" 
                            color='success'
                            style={{marginRight:'10px'}}
                          >
                              Açmak
                          </Button>
                        </Link>
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