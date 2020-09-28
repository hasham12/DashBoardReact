import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/Card'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import CreateProjectButton from '../pages/AddProjectButton'
import CardP from '../pages/Card'
import ProjectTable from './ProjectTable'
import Hooks from './TestHooks'
// import { Grid } from 'react-bootstrap'
import { Grid, Segment } from 'semantic-ui-react'

export default class CreateProject extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <Hooks/>
            <CreateProjectButton/>
            <ProjectTable/>
            <Grid >
            <Grid.Row centered  columns={3}>
            <Grid.Column>
                <Segment><CardP/></Segment> 
            </Grid.Column>
            <Grid.Column>
            <Segment><CardP/></Segment> 
            </Grid.Column>
            <Grid.Column>
            <Segment><CardP/></Segment> 
            </Grid.Column>
            </Grid.Row>
            </Grid>
            </>
        );
    }
} 

