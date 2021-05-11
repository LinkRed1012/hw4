import './App.css'
import React from 'react';
//import axios from 'axios';
import $ from 'jquery';

class UserName extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        online_name: '',
          username: '',
          githubUrl: '',    
          avataUrl: '',
          follwers: '',
          place: '',
      }
  }
  componentDidMount() {
    $.get(this.props.source, (result) => {
           console.log(result);
           const data = result;
           if (data){
               this.setState({
                   online_name: data.login,
                   username: data.name,
                   place: data.location,
                   githubUrl: data.html_url,
                   avataUrl: data.avatar_url,
                   followers: data.followers,
               });
           }
      });
  }
  render(){
      return(
         
          <div>
              <p>ID:{this.state.online_name}</p>
              <h3>{this.state.username}</h3>
              <img src={this.state.avataUrl} /><p/>
              <a>location:{this.state.place}</a>
              <p>followers: {this.state.followers}</p>
              <a href={this.state.githubUrl}>Github Link </a>
           </div>

      )
  }
}


export default UserName;