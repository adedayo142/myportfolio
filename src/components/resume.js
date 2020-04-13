import React from 'react'
import {Cell, Grid} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends React.Component{
	render(){
		return(
			<div className="resume">
			<Grid className="body">
			<Cell col={4}>
			<div style={{textAlign:'center'}}>
			<img
			src="https://pbs.twimg.com/profile_images/1146102348424593412/l4u2AFIR_400x400.jpg"
			alt="avatar"
			style={{height:'200px'}}
			/>
            </div>
			<h2 style={{paddingTop:'2em'}}>Onipede Samson </h2>
			<h4 style={{color:'grey'}}>Programmer</h4>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			<p>I am a Front End Developer  My love for web developing grew with the passion i have for it.</p>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			<h5>Address</h5>
			<p> Challenge, ibadan.</p>
			<h5>Phone</h5>
			<p>+234816-848-6380</p>
			<h5>Email</h5>
			<p>Adedayo142@gmail.com</p>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			</Cell>
			<Cell className="resume-right-col" col={8}>
			<h2>Education</h2>
			<Education 
			startYear={2011}
			endYear={2015}
			schoolName="Tai Solarin University"
			schoolDescription="My University Is A Premier University Of Education In Nigeria"
			/>
			<hr style={{borderTop:'3px solid #e22947'}}/>
			<h2>Experience</h2>
			<Experience
			startYear={2017}
			endYear={2018}
			jobName="IT Consultant"
			jobDescription="Attend to online issues of participants, make changes where it is due and submit to relevant authorities"
			/>
			<Experience
			startYear={2017}
			endYear={2019}
			jobName="Freelancer"
			jobDescription="Develop website, give out source code or reusuable components to users"
			/>
			<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
			
			<h2>Skills</h2>
			<Skills
			skill="javascript"
			progress={100}
			/>

			<Skills
			skill="Html/Css"
			progress={80}
			/>

			<Skills
			skill="Nodejs"
			progress={50}
			/>

			<Skills
			skill="React"
			progress={80}
			/>

			</Cell>
			</Grid>
			</div>
			)
	}
}

export default Resume