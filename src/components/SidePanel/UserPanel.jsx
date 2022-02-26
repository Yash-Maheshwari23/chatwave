import React from 'react';
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react';

class UserPanel extends React.Component{
    dropdownOptions = () => [
        {
        key:"user",
        text: <span>Signed in as <strong>User</strong></span>,
        disabled: true
    },
    {
        key:'avatar',
        text: <span>Change Avatar</span>
    },
    {
        key:'signOut',
        text: <span>Sign Out</span>
    }
]
    render(){
        return(
            <Grid style={{background:'$4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{padding:'1.2rem', margin: 0}}>
                        <Header inverted floated='left' as="h2"> 
                            <Icon name="puzzle piece"/>
                            <Header.Content>Chatwave</Header.Content>
                        </Header>
                    </Grid.Row>
                    <Header style={{padding:'0.25em'}} as="h4" inverted>
                        <Dropdown trigger={
                            <span>User</span>
                        } options={this.dropdownOptions()}/>
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel;