import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import params from '../params';

import Mine from './Mine';
import Flag from './Flag';

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged);
    if (!opened && !exploded) styleField.push(styles.regular);

    let color = null;
    
    switch (nearMines) {
        case 1:
            color = '#2A26D7';
        break;

        case 2:
            color = '#2B520F';
        break;

        case 3: case 4: case 5:
            color = '#F9060A';
        break;

        case 6: case 7: case 8:
            color = '#F221A9';
        break;
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ? 
                <Text style={[ styles.label, { color } ]}> { nearMines } </Text> : 
                false
            }

            { mined && opened ? <Mine /> : false }
            { flagged && !opened ? <Flag /> : false }
        </View>
    );
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },

    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },

    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },

    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },

    flagged: {

    }
});