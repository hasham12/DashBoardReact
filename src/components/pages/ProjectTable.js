import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const ProjectTable = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Project Title</Table.HeaderCell>
        <Table.HeaderCell>Project Date</Table.HeaderCell>
        <Table.HeaderCell>Efficacy</Table.HeaderCell>
        <Table.HeaderCell>User Role</Table.HeaderCell>
        <Table.HeaderCell>Project Details</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='Left'>
            ERP
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>12/10/2020</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          Manager <br />
          <a href='#'>18 studies</a>
        </Table.Cell>
        <Table.Cell>
          Creatine supplementation is the reference compound for increasing
          muscular
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='Left'>
            Ware House Management
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>12/10/2020</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
        Manager <br />
          <a href='#'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
          Creatine is the reference compound for power improvement, with numbers
          from one 
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ProjectTable