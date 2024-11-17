import { Button } from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen({ navigation }): React.JSX.Element {

    return (
        <MainLayout>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>

    );

}

export default AboutScreen;