import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from '../Pages/Product';

const Drawer = createDrawerNavigator();

export default function DrawerPage() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name='Produtos' component={Product} />
        </Drawer.Navigator>
    )
}
