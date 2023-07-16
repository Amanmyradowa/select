import React,{useState, useEffect,useContext} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { AxiosInstance } from '../../common/AxiosInstance';
import Alert from '../../components/Alert';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function MarketOpen() {
  const [loading,setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [dialog2, setDialog2] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [warnings, setWarnings] = useState(['Siziň bu bildirişiňiz pully bildirişlere degişli Siziň bu bildirişiňiz pully bildirişlere degişli Siziň bu bildirişiňiz pully bildirişlere degişli Siziň bu bildirişiňiz pully bildirişlere degişli','Siz nädogry bildiriş goýýarsyňyz'])
  const [status,setStatus] = useState(false);
  const [data, setData] = useState({
    name:'',
    category:'',
    place:'',
    phone:'',
    text:'',
    image:'',
    status:'',
    active:'',
    warning:'',
  });

  const [teswirs, setTeswirs] = useState([])

  useEffect(()=>{

    const teswirler = [
      {
        userCode:'XJfh234',
        teswir:'Onush yanmy Onush yanmy Onush yanmy Onush yanmy Onush yanmy Onush yanmyOnush yanmy Onush yanmyOnush yanmyOnush yanmyOnush yanmy',
        answer:'Onushyan howa'
      },
      {
        userCode:'Dowrebap',
        teswir:'Onush yanmy',
        answer:''
      },
      {
        userCode:'XJfh234',
        teswir:'Onush yanmy',
        answer:"Sana name"
      },
    ]

    setTeswirs(teswirler);

    const fetchData = async ()=>{
      const id = window.location.search.split('=')[1];
      let status = localStorage.getItem('status')
      setStatus(JSON.parse(status))
      try {
        // const res = await AxiosInstance.get('/storages/'+id)
        // if(res.status === 200){
        //   setData(res.data);
        // }
        setData({status:'Garashylyar',image:require('../../assets/data/hyzmatlar.png'),name:'Dowrebap',category:'Marketler we dukanlar', place:'Ashgabat', text:'Ony etyas muny etyas bet zatlar etyas we satyas', phone:'+99364813308', warning:''})
      } catch ({response}) {
        window.confirm(response.data.message);
      }
    }
    fetchData();
  },[])

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const sendData = async ()=>{
    // setLoading(true);
    
    // if(data.name){
    //   try {
    //     const res = await AxiosInstance.patch('/storages/'+data.storage_id,data);
    //     if(res.status === 200){
          window.location.href = '/markets';
    //     }
    //   } catch ({response}) {
    //     window.confirm(response.data.message);
    //   }
    // }else{
    //   setValid(true);
    // }
    // setLoading(false);
  }

  // const deleteDialog

  const closeAlert = ()=>{
    setValid(false);
  }

  const handleDialog = (id,index)=>{
    
    // if(confirm){
    //   setDeleteId(id);
    // }
    setDialog(!dialog);
  }
  const handleDialog2 = (id,index)=>{
    console.log(data.warning)
    // if(confirm){
    //   setDeleteId(id);
    // }

    setDialog2(!dialog2)
  }

  const deleteRow = async()=>{
    // const id = deleteId;
    // try {
    //   await AxiosInstance.post('/storages/delete/'+id);
    // } catch ({response}) {
    //   window.confirm(response.data.message);
    // }
    // const newState = []
    // for(let i = 0; i<data.length; i++){
    //   if(data[i].storage_id !== id){
    //     newState.push(data[i]);
    //   }
    // }
    // setCount(count-1);
    setDialog(false);
    // setData(newState);
  }

  const warning = async()=>{
    console.log(data.warning);
    setDialog2(!dialog2)
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
      <Dialog
        open={dialog2}
        onClose={handleDialog2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Siz näme sebäpde ýatyrýarsyňyz?
        </DialogTitle>
        <DialogContent>
          <div style={{height:'10px'}}></div>
          <FormControl fullWidth>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={data.warning}
                onChange={handleChange('warning')}
                >
                {
                  warnings.map((warn)=>{
                    return(
                      <FormControlLabel value={warn} key={warn} control={<Radio />} label={warn} />
                    )
                  })
                }
              </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog2}>Ýok</Button>
          <Button onClick={warning} autoFocus>
            Howa
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container columnSpacing={10} rowSpacing={2} style={{fontSize:'18px'}}>
        <Grid item xs={12}><b>Market ady:</b> {data.name}</Grid>
        <Grid item xs={4}><b>Kategoriýasy:</b> {data.category}</Grid>
        <Grid item xs={4}><b>Ýerleşýän ýeri:</b> {data.place}</Grid>
        <Grid item xs={4}><b>Telefon belgisi:</b> {data.phone}</Grid>
        <Grid item xs={12}><b>Doly maglumaty:</b> {data.text}</Grid>
        <Grid item xs={8}><img src={data.image} alt="" /></Grid>
        {
          status === 1 ? 
            <Grid item xs={12}>
              <label htmlFor="active"><b>Işjeň</b></label>
              <Checkbox id='active' onChange={handleChange('active')} />
            </Grid> : ''
        }

        <Grid item xs={12}>
          <h3>Teswirler</h3>
          <div style={{width:'100%',display:'flex'}}>
            <Grid item xs={4}><b>Gelen teswirler</b></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}><b>Ýazylan jogaplar</b></Grid>
          </div>
          {
            teswirs.map((teswir,i)=>{
              return(
                <div className='chat' key={i} style={{display:'flex',justifyContent:'flex-start',width:'100%',fontSize:'14px'}}>
                  <Grid item xs={4}>
                    <div className='user' style={{background:'#03a9f4',marginBottom:'5px',padding:'10px 15px',borderRadius:'5px',width:'fit-content'}}><span>{teswir.userCode}</span>{teswir.teswir}</div>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={4}>
                    {
                      teswir.answer ? <div className='answer' style={{background:'#4caf50',marginBottom:'5px',padding:'10px 15px',borderRadius:'5px',width:'fit-content'}}>{teswir.answer}</div>:''
                    }
                  </Grid>
                  <Grid item xs={3} style={{display:'flex',marginTop:'20px'}}>
                    <svg onClick={()=>handleDialog(1,1)} width="25" height="25" style={{cursor:'pointer'}} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1.5V2.5H13.5C13.7761 2.5 14 2.72386 14 3C14 3.27614 13.7761 3.5 13.5 3.5H12.9616L12.1088 14.1595C12.0257 15.1989 11.1579 16 10.1152 16H3.88479C2.84207 16 1.97431 15.1989 1.89116 14.1595L1.0384 3.5H0.5C0.223858 3.5 0 3.27614 0 3C0 2.72386 0.223858 2.5 0.5 2.5H4V1.5C4 0.671573 4.67157 0 5.5 0H8.5C9.32843 0 10 0.671573 10 1.5ZM5 1.5V2.5H9V1.5C9 1.22386 8.77614 1 8.5 1H5.5C5.22386 1 5 1.22386 5 1.5ZM3.49999 5.0285L3.99999 13.5285C4.0162 13.8042 4.25282 14.0145 4.52849 13.9983C4.80415 13.9821 5.01448 13.7454 4.99826 13.4698L4.49826 4.96978C4.48205 4.69411 4.24543 4.48379 3.96976 4.5C3.6941 4.51622 3.48377 4.75283 3.49999 5.0285ZM10.0302 4.50086C9.75457 4.48465 9.51795 4.69497 9.50173 4.97064L9.00173 13.4706C8.98552 13.7463 9.19584 13.9829 9.47151 13.9991C9.74717 14.0154 9.98379 13.805 10 13.5294L10.5 5.02936C10.5162 4.75369 10.3059 4.51708 10.0302 4.50086ZM7 4.5C6.72386 4.5 6.5 4.72386 6.5 5V13.5C6.5 13.7761 6.72386 14 7 14C7.27615 14 7.5 13.7761 7.5 13.5V5C7.5 4.72386 7.27615 4.5 7 4.5Z" fill="black"/>
                    </svg>
                  </Grid>
                </div>
              )
            })
          }
        </Grid>

        <Grid item xs={12}>
          {
            status !== 1 ?
              <Button style={{marginRight:'15px'}} variant="contained" color='success' onClick={sendData} disabled={loading}>
                Kabul etmek 
                <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
              </Button>
             : ''
          }
          <Button style={{marginRight:'15px'}} variant="contained" color='error' onClick={()=>handleDialog(0,1)} disabled={loading}>
            Pozmak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
          <Button style={{marginRight:'15px'}} variant="contained" color='warning' onClick={()=>handleDialog2(0,2)} disabled={loading}>
            Ýatyrmak we Duýdurmak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
          <Button variant="contained" onClick={sendData} disabled={loading}>
            Ýatda saklamak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
        </Grid>
      </Grid>
      {valid ? <Alert text='Boşluklary dolduryň!!!' close={closeAlert}/> : ''}
    </div>
  );
}

export default MarketOpen;
