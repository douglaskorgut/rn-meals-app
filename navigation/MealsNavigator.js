import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {createAppContainer} from "react-navigation";

const MealsNavigator = createStackNavigator({
    Categorias: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetailScreen: {
        screen: MealDetailsScreen
    }
});

export default createAppContainer(MealsNavigator);