import { lazy } from 'react';
import { LazyExoticComponent } from 'react';
// import { RouteList } from './common/enums/routes.enum';

export enum RouteList {
  HOME,
  BRIEFCASES,
  BRIEFCASE_CREATE,
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
const Briefcases = lazy(() => import('./pages/briefcases/Briefcases'));
const CreateBriefcase = lazy(() => import('./pages/briefcases/CreateBriefcase'));

const routes: Routes = {
  // { path: RouteList.LOGIN, name: 'Login', element: Login },
  [RouteList.HOME]: { path: '/', name: 'Home', element: Home },
  //Briefcases
  [RouteList.BRIEFCASES]: { path: '/briefcases', name: 'Briefcases', element: Briefcases },
  [RouteList.BRIEFCASE_CREATE]: { path: '/briefcases/create', name: 'Create briefcase', element: CreateBriefcase },
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
