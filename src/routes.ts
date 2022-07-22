import { lazy } from 'react';
import { LazyExoticComponent } from 'react';
// import { RouteList } from './common/enums/routes.enum';

export enum RouteList {
  HOME,
}

export interface Route {
  path: string;
  element: LazyExoticComponent<any>;
  exact?: boolean;
  name: string;
  isPrivate?: boolean;
}

export type Routes = {
  [key in RouteList]: Route;
};

const Home = lazy(() => import('./pages/Home'));
// const Login = lazy(() => import('./pages/Login'));
// const ProductList = lazy(() => import('./pages/products/ProductList'));
// const ProductCreate = lazy(() => import('./pages/products/ProductCreate'));
// const Categories = lazy(() => import('./pages/categories/Categories'));
// const CategoryCreate = lazy(() => import('./pages/categories/CategoryCreate'));
// const CategoryView = lazy(() => import('./pages/categories/CategoryView'));
// const CategoryUpdate = lazy(() => import('./pages/categories/CategoryUpdate'));
// const Shops = lazy(() => import('./pages/shops/Shops'));
// const ShopAddresses = lazy(() => import('./pages/shop-addresses/ShopAddresses'));

const routes: Routes = {
  // { path: RouteList.LOGIN, name: 'Login', element: Login },
  [RouteList.HOME]: { path: '/', name: 'Home', element: Home },
  // //Products
  // { path: RouteList.PRODUCTS, name: 'Products', element: ProductList },
  // { path: RouteList.PRODUCT_CREATE, name: 'Create product', element: ProductCreate },
  // //Categories
  // { path: RouteList.CATEGORIES, name: 'Categories', element: Categories },
  // { path: RouteList.CATEGORY_CREATE, name: 'Create new category', element: CategoryCreate },
  // { path: RouteList.CATEGORY_VIEW, name: 'View category', element: CategoryView },
  // { path: RouteList.CATEGORY_EDIT, name: 'Update category', element: CategoryUpdate },
  // //Shops
  // { path: RouteList.SHOPS, name: 'Shops', element: Shops },
  // //Shop addresses
  // { path: RouteList.SHOP_ADDRESSES, name: 'Shop addresses', element: ShopAddresses },
};

export default routes;
