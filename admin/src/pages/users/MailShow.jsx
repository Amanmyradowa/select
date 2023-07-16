import React,{useState,useEffect} from 'react';
import { AxiosInstance } from '../../common/AxiosInstance';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function MailShow() {
  const [data,setData] = useState({
    name:'',
    email:'',
    text:'',
    createdAt:'',
  })

  useEffect(()=>{
    const fetchData = async ()=>{
      const id = window.location.search.split('=')[1];
      try {
        const res = await AxiosInstance.get('/mail/'+id);
        console.log(res);
        if(res.status ===200){
          setData(res.data);
        }
      } catch ({response}) {
        window.confirm(response.data.message);
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <Grid container columnSpacing={10} rowSpacing={2}>
        <Grid item xs={4}><b>Ady:</b> {data.name}</Grid>
        <Grid item xs={4}><b>Email:</b> {data.email}</Grid>
        <Grid item xs={4}><b>Wagty</b> <u>{data.createdAt.split('T')[0]}</u></Grid>
        <Grid item xs={12}><b>Texti:</b> {data.text}</Grid>
        <Grid item xs={12}>
          <Link to={'/mails'} style={{textDecoration:'none'}}>
            <Button variant="contained" >Yza çykmak</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default MailShow;
