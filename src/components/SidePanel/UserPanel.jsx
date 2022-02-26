import React from 'react';
import { Dropdown, Grid, Header, Icon, Image } from 'semantic-ui-react';
import firebase from '../../firebase';
//import {connect} from 'react-redux';

class UserPanel extends React.Component{
    state = {
        user:this.props.currentUser
    }

   
    dropdownOptions = () => [
        {
        key:"user",
        text: <span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
        disabled: true
    },
    {
        key:'avatar',
        text: <span>Change Avatar</span>
    },
    {
        key:'signOut',
        text: <span onClick={this.handleSignout}>Sign Out</span>
    }
];

handleSignout=()=>{
    firebase
    .auth()
    .signOut()
    .then(()=>console.log("Signed Out"))
}
    render(){
        const {user} = this.state
        return(
            <Grid style={{background:'$4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{padding:'1.2rem', margin: 0}}>
                        <Header inverted floated='left' as="h2"> 
                            <Icon name="puzzle piece"/>
                            <Header.Content>Chatwave</Header.Content>
                        </Header>
                        <Header style={{padding:'0.25em'}} as="h4" inverted>
                        <Dropdown trigger={
                            <span>
                                <Image src={user.photoURL} spaced="right" avatar/>
                                {user.displayName}
                            </span>
                        } options={this.dropdownOptions()}/>
                    </Header>
                    </Grid.Row>
                    
                </Grid.Column>
            </Grid>
        )
    }
}


export default UserPanel;