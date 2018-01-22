import React, {Component} from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import {getData} from '../actions'
import { getUserData } from '../reducers/addData'

const mapStateToProps = (state = []) => {
  return {
    userData: getUserData(state)
  };
}


class ShowData extends Component {

  componentWillMount() {
    const {dispatch} = this.props
    dispatch (getData())
  }

    eachUser = () => {
      const { userData } = this.props
        console.log(this.props) 
        const data = userData
       return data.map((value,index) => {
            return ( 
            <Table.Row key={index}>
                <Table.Cell>{value.name}</Table.Cell>
                <Table.Cell>{value.phone}</Table.Cell>
                <Table.Cell>{value.time}</Table.Cell>
              </Table.Row>)
        })
    }

render() {  
    return (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          
              <Table.Body>
              {this.eachUser()}           
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='left chevron' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='right chevron' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          
    )}
}

ShowData = connect(mapStateToProps)(ShowData)

export default ShowData
