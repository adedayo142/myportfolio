import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import Main from './components/main'
import './App.css';

class App extends React.Component {
    render(){
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout >
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}}
         to="/">My Portfolio</Link>} scroll >
            <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'white'}}
         to="/">My Portfolio</Link>}>
            <Navigation>
            <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
       
    </Layout>
</div>
  );
}
}
export default App;
