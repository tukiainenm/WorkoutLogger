import React from 'react'
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements'

const CustomNavigationBar = ({ navigation, route, options }) => {
    const title = getHeaderTitle(options, route.name)
    const showBackButton = route.name !== "Login" && route.name !== "WorkoutLogger" ;

    return (
        <Appbar.Header>
            {showBackButton ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content
                title={title}
                />
        </Appbar.Header>
    );
}

export default CustomNavigationBar