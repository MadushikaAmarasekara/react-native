import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props){
    const renderMenuItem = ({item}) => (
        <ListItem>
            <Avatar source = {{uri: 'https://natashaskitchen.com/wp-content/uploads/2020/04/Pizza-Dough-Best-Pizza-Crust-Recipe-3-500x500.jpg'}} />
            <ListItem.Content>
                <ListItem.Title>
                    {item.name}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {item.description}
                </ListItem.Subtitle>
            </ListItem.Content>
            {/* <ListItem.Chevron/> */}
        </ListItem>
    )

    return(
        <FlatList 
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Menu;