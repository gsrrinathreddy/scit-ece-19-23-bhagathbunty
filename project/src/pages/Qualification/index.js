import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';

export default function Qualifications() {
  let [loader,setLoader]= useState(true);
  let [Qualifications, setQualifications]=useState(null);

  const getQualificationsData = async () => axios.get('http://localhost:8000/Qualifications')
                                                  .then(res=>{
                                                      setQualifications(res.data)
                                                      setLoader(false)
                                                  }).Catch(err => console.log(err))

          useEffect(()=>{
              getQualificationsData();

          },[])
      console.log("Qualifications",Qualifications)

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLq3bWGKgwuPOhgXP1I6F7v8-W4Ts3PAeZFmAVXBXlQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="SREE CHAITHANYA INSTITUTIONS AND TECHNOLOGICAL SCIENCES"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                62% 
              </Typography>
              {" — BTech(ECE)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="krishnaveni" src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/327447358_1801403226899977_2096168360173936731_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jRY6egDuOXsAX9YAII_&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfBVtHh7HfhsdaqOTwT7KYyMbg049ltdz3lYy5IE5Ebibg&oe=6424AC84" />
        </ListItemAvatar>
        <ListItemText
          primary="krishnaveni Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% 
              </Typography>
              {" — IIT"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Scholars" src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/292143773_550909500068303_563307185802771192_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Sdfll6SCSPEAX-yP1tN&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfAUU5ksZuH81nUKbSWjjlPFPY98DwboIeQMQoKUN5CuzA&oe=6424B4DE" />
        </ListItemAvatar>
        <ListItemText
          primary="LOY0LA HIGH SCHOOL"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                85% 
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}