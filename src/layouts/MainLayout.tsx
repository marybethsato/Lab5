import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from '../components/Footer';


const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default MainLayout;