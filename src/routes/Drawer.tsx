import { createDrawerNavigator } from '@react-navigation/drawer';
import Products from '../Pages/Products';

const Drawer = createDrawerNavigator();

export default function DrawerPage() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name='Produtos' component={Products} />
        </Drawer.Navigator>
    )
}
