import React from 'react'
import {Grid, Cell} from 'react-mdl'

class Landing extends React.Component{
    render(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
         <img
          src="https://pbs.twimg.com/profile_images/1146102348424593412/l4u2AFIR_400x400.jpg"
          alt="samson"
          className="samson"
         />

         <div className="banner-text">
             <h1>Web Developer</h1>

             <hr/>

             <p>HTML/CSS | React | JavaScript | Bootstrap | Postgres | Nodejs </p>

            <div className="social-links">
                {/*linkedin */}
                <a href="https://www.linkedin.com/in/samsonadedayo" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true"/>></a>

            {/*GitHub*/}
             <a href="https://github.com/onipedadedayo142" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"/>></a>

            {/* Twitter*/}
            <a href="https://www.twitter.com/adedayo100" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-twitter-square"  aria-hidden="true"/>></a>

            </div>
             </div> 
             
        </Cell>
    </Grid>
        </div>
    )
}
}
export default Landing