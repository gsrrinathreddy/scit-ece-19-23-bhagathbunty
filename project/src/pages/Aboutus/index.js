import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [Aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


    return(
        <>
<Typography>Name: BHAGATH</Typography>
<Typography>Father Name: RAJU</Typography>
<Typography>Mother Name:SUJATHA</Typography>
<Typography>Email: bhagathbunty66@gmail.com</Typography>
<Typography>Phone No.: 9908596072</Typography>
        </>
        
    )
    }
   