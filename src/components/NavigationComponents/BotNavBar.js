import { Appbar } from 'react-native-paper'
import React from 'react'

const BotNavBar = () => {
    return (
        <Appbar
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
            }}>
            <Appbar.Action icon="home" onPress={() => { }} />
            <Appbar.Action icon="select-search" onPress={() => { }} />
        </Appbar>
    )
}

export default BotNavBar