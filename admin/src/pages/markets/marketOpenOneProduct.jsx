import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { AxiosInstance, AxiosInstanceFormData } from '../../common/AxiosInstance';
import URLBack from '../../common/Config.js'
import Alert from '../../components/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function AddNews() {
  const [loading,setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [showImages,setShowImages] = useState([]);
  const [imageSources,setImageSources] = useState([]);
  const [valid2, setValid2] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [dialog2, setDialog2] = useState(false);
  const [status,setStatus] = useState(false);
  const [data, setData] = useState({
    name:'',
    category:'',
    brand:'',
    color:'',
    storage:'',
    price:'',
    ram:'',
    battery:'',
    fCamera:'',
    bCamera:'',
    country:'',
    internet:'',
    body_tm:'',
    body_en:'',
    stock:'',
  });

  useEffect(()=>{
    // const id = window.location.search.split('=')[1];
    // let status = localStorage.getItem('status')
    // setStatus(JSON.parse(status))
    async function fetchData(){
      const id = window.location.search.split('=')[1];
      try {
        // const {data,status} = await AxiosInstance.get('/products/'+id)
        const data2 = {
          data:{
            name:'A 53',
            price:'3500',
            definition:'Gaty arzan beryan hich yerden bu baha tapyp bilmersiniz',
          },
          status:200,
        }
        const {data,status} = data2
        if(status === 200){
          setData(data);
          const localImage = []
          // for(let i =0; i<data.images.length; i++){
          //   localImage.push({url:URLBack+'/'+data.images[i].image,old:true,id:data.images[i].image_id});
          // }
          setImageSources(localImage)
        }
      } catch ({response}) {
        console.log(response.data.message);
      }
    }
    fetchData();
  },[])

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

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const handleImages = (event) => {
    const images = [...imageSources];
    const showImages2 = [...showImages];
    if (event.target.files && event.target.files[0]) {
      for(let i = 0; i<event.target.files.length; i++){
        images.push({
          url: URL.createObjectURL(event.target.files[i])
        })
        showImages2.push(event.target.files[i])
      }
    }
    setImageSources(images);
    setShowImages(showImages2);
  }

  const deleteImage = async ()=>{
    setValid2(false);
    console.log(imageSources[deleteImageId])
    const images = [...showImages];
    const sources = [...imageSources]
    images.splice(deleteImageId,1)
    sources.splice(deleteImageId,1)
    setShowImages(images);
    setImageSources(sources);
    if(imageSources[deleteImageId].old){
      try {
        await AxiosInstance.post('/products/image/delete/'+imageSources[deleteImageId].id)
      } catch ({response}) {
        console.log(response.data.message);
      }
    }
  }
  const openDeleteImage = (id)=>{
    setValid2(true);
    setDeleteImageId(id);
  }

  const sendData = async ()=>{
    const id = window.location.search.split('=')[1];
    setLoading(true)
    console.log(data);
    if(data.name && data.category && data.brand && data.color && 
      data.storage && data.price && (showImages.length || imageSources.length)  && data.ram && data.battery && 
      data.fCamera && data.internet && data.body_tm && data.body_en && data.stock){
      try {
        const res = await AxiosInstance.patch('/products/'+id,data);
        console.log(res,123)
        if(res.status === 200){
          if(showImages.length){
            const formData = new FormData();
            for(let i = 0; i<showImages.length; i++){
              formData.append('image',showImages[i]);
            }
            const {status} = await AxiosInstanceFormData.post('/products/upload-image/'+res.data.product_id,formData)
            if(status === 201){
              window.location.href = '/products';
            }
          }else{
            window.location.href = '/products';
          }
        }
      } catch ({response}) {
        console.log(response.data.message);
      }
    }else{
      setValid(true);
    }
    
    setLoading(false);
  }

  const closeAlert = ()=>{
    setValid(false);
  }
  const closeAlert2 = ()=>{
    setValid2(false);
  }

  return (
    <div>
      <Grid container columnSpacing={4} rowSpacing={4}>
        <Grid item xs={9}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Haryt ady" 
            variant="standard" 
            value={data.name} 
            autoComplete='off'
            onChange={handleChange('name')}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Bahasy" 
            variant="standard" 
            value={data.price} 
            autoComplete='off'
            type={'number'}
            onChange={handleChange('price')}
          />
        </Grid>
        
        
        

        <Grid item xs={12}>
          <TextField 
            fullWidth   
            disabled
            id="standard-basic" 
            label="Düşündiriş" 
            variant="outlined" 
            value={data.body_tm} 
            autoComplete='off'
            multiline
            rows={5}
            onChange={handleChange('body_tm')}
          />
        </Grid>

        <Grid item xs={12} style={{}}>
          <input 
            type="file" 
            accept='image/*'
            multiple
            id="icon-button-photo"
            onChange={handleImages}
            hidden
          />

          <label htmlFor="icon-button-photo">
              <Button color="primary" component="span">
                <svg width="100" height="100" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00153 4.5C6.00153 5.32843 5.32995 6 4.50153 6C3.6731 6 3.00153 5.32843 3.00153 4.5C3.00153 3.67157 3.6731 3 4.50153 3C5.32995 3 6.00153 3.67157 6.00153 4.5Z" fill="black"/>
                  <path d="M2.00153 0C0.896956 0 0.00152588 0.89543 0.00152588 2V12C0.00152588 13.1046 0.896956 14 2.00153 14H14.0015C15.1061 14 16.0015 13.1046 16.0015 12V2C16.0015 0.895431 15.1061 0 14.0015 0H2.00153ZM14.0015 1C14.5538 1 15.0015 1.44772 15.0015 2V8.50001L11.2251 6.5528C11.0326 6.45655 10.8002 6.49428 10.648 6.64646L6.93782 10.3566L4.27888 8.58399C4.08056 8.45178 3.8165 8.47793 3.64797 8.64646L1.00153 11V2C1.00153 1.44772 1.44924 1 2.00153 1H14.0015Z" fill="black"/>
                </svg>
              </Button>
          </label>
          
          <label style={imageSources.length ? {display:'block'} : {display:'none'}}>
            {
              imageSources.map((image,i) =>{
                return (
                  <img style={{width:'30%', marginRight:'10px'}} src={image.url} key={i} onClick={()=>openDeleteImage(i)}/>
                )
              })
            }
          </label>
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
      {valid2 ? <Alert text='Pozmak isleyanizmi?' button='Hawa' ok={deleteImage} close={closeAlert2}/> : ''}
    </div>
  );
}

export default AddNews;
