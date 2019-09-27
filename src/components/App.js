import React, { Component } from 'react';
import axios from 'axios';
import Board from './Board';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../index.css';
import { REACT_APP_MONDAY_API } from '../constants';


class App extends Component {
  constructor() {
    super();
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    const url = `${REACT_APP_MONDAY_API}/boards`
    axios.get(url)
    .then(response => {
      this.setState({
        boards: response.data.data.boards
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){
const { boards } = this.state;
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Paper className='paper'>
            {boards.map( (board) =>
            <Sidebar
              name={board.name}
              key ={board.id}
            />
          )}
              </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className='paper1'>
              {boards.map( (board) =>
                <Board
                  data ={board}
                  key = {board.id}
                />
            )}
          </Paper>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;
