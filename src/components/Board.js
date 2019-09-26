import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../index.css'
import { Container } from '@material-ui/core';

export function BoardRepresenation(props) {
const {columns,groups,items}  =props
  return (
    <div>
    <h2 className='table-title'>Team Tasks </h2>
    <Paper className='root'>
     {
       groups.map( (group)=> {
        return <Container>
        <Table className='table' style={{marginBottom:'40px'}}>
      <TableHead>
        <TableRow>
          <TableCell>{group.title}</TableCell>
         <BoardColumns columns={columns}/>
        </TableRow>
      </TableHead>
      <TableBody>
        {filterItems(items,group.id).map(item => (
          <TableRow key={item.name}>
            <TableCell component="th" scope="row">
            {item.name}
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">User</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
      </Container>
       })
     }
    </Paper>
    </div>
  );
}

const BoardColumns = (props) => {
  const { columns } = props;
  return (
      columns.map( (col,i) =>
      {
        if(i>0){
          return (
            <TableCell align="right">{col.title}</TableCell>
            )
        }else{
          return (<TableCell align="right"/>)
        }
      })
  )
}

function filterItems(items,groupId){
  items=items.map((item)=>{
    if(item.group.id==groupId){
      return item;
    }
    });
  return items.filter(function(el) { return el; });
}

const Board = (data) => {
    return (
        <BoardRepresenation {...data.data}/>
    );
}

export default Board;
