import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/Card'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import CreateProjectButton from '../pages/AddProjectButton'
import DataTable from '../pages/DataTable'

export default class CreateProject extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <CreateProjectButton/>
                <DataTable/>
            </div>
    
          
        );
    }
} 

