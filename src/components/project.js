import React from 'react'
import {Tabs, Tab, Grid, Cell, Card,CardTitle, CardActions, CardText, CardMenu, Button, IconButton} from 'react-mdl'

class Project extends React.Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                {/* project 1*/}
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Food Recipe</CardTitle>
    <CardText>
        A food recipe app, that show the ingredients and recipes of each meal.
    </CardText>
    <CardActions border>
        <Button colored href="https://github.com/onipedadedayo142/recipe.github.io">GitHub</Button>
        <Button colored href="https://prorecipe.herokuapp.com">APP</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

 {/* project 2*/}
 <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Monster Roladex</CardTitle>
 <CardText>
     A robot app, that shows different types of fun robots when searched with their name.
 </CardText>
 <CardActions border>
 <Button colored href="https://github.com/onipedadedayo142/monster-roladex.github.io">GitHub</Button>
     <Button colored href="https://monster-roladex.herokuapp.com">APP</Button>
 </CardActions>
 <CardMenu style={{color: '#fff'}}>
     <IconButton name="share" />
 </CardMenu>
</Card>

 {/* project 3*/}
 <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Face Recognition</CardTitle>
 <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Mauris sagittis pellentesque lacus eleifend lacinia...
 </CardText>
 <CardActions border>
 <Button colored href="https://github.com/onipedadedayo142/facerecognitionbrain.github.io">GitHub</Button>
     <Button colored href="https://facialbrain.herokuapp.com">APP</Button>
 </CardActions>
 <CardMenu style={{color: '#fff'}}>
     <IconButton name="share" />
 </CardMenu>
</Card>
</div> 
     )

        }
            
        }
    
    
    render(){
    return(
        <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                </Tabs>
               
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                     
        </div>
    )
}
}
export default Project