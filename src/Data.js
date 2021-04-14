import React,{Component} from "react";
import { DataGrid } from '@material-ui/data-grid';
import TableGrid from "./TableGrid";
import Mtable from "./Mtable";


class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded : false,
        }
    }


componentDidMount() {
    fetch('https://raw.githubusercontent.com/sagarkhan/sagarkhan.github.io/master/data-set.json')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded : true,
            items : json,
        })
    });
}

render() {
    var {isLoaded,items} = this.state;

    if(!isLoaded){
        return <div>Loading....</div>;
    }
    else{
      const dataitems = items.map(item=>item);
      
  return (
    //<TableGrid list={dataitems}></TableGrid>
    <div style={{padding:"0px 30px"}}>
    <Mtable list={dataitems}></Mtable>
    </div>

    /*<div className="Data">
      <ul>
          {items.map(item=>(
              <li>
                 {item.serial}
             </li>
          ))};
      </ul>
    </div>*/
          );
    }
}
}

export default Data;

