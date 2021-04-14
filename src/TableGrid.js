import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Data from "./Data";
import {dataitems} from "./Data";




 const TableGrid=(props)=> {
    const rows = 
      props.list.map(item=>(
        {
          id : "1",
          deviceId : item.deviceId,
          serial : item.serial
        }
      ))
    
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'id' },{ field: 'deviceId' }, { field: 'serial',width: 200 }]}
        rows={rows}
        />
    </div>
  );
}

export default TableGrid;