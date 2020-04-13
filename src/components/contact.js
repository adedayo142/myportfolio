import React from 'react'
import {Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends React.Component{
    render(){
    return(
        <div className="contact-body">
           <Grid className="contact-grid">
               <Cell col={6}>
                   <h2>Onipede Samson</h2>
                   <img
                   src="https://pbs.twimg.com/profile_images/1146102348424593412/l4u2AFIR_400x400.jpg"
                   alt="samson"
                   style={{height:'250px'}}
                   />
                   <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>I am Onipede Samson a front end developer with two years experience of coding and freelancing. 
                       My love for web developing grew with the passion i have for it.</p>
               </Cell>
               <Cell col={6}>
                   <h2>Contact Me</h2>
                   <hr/>
             <div className="contact-list">
                   <List>
            <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i className="fa fa-phone-square"  aria-hidden="true"/>
                    +2348168486380
                    </ListItemContent>
                </ListItem>
           
                <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i className="fa fa-envelope"  aria-hidden="true"/>
                 Adedayo142@gmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                https://www.linkedin.com/in/samson-adedayo-666646144/
                    </ListItemContent>
                </ListItem>
            </List>
                   </div>
                   
                 </Cell> 
                </Grid>
        </div>
    )
}
}
export default Contact