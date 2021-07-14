/**
 * 路由配置
 */
import React, { ReactNode } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import Detail from '../pages/detail';
import NotFound from '../pages/404';
import { flatRouter } from '../utils/utils';

export interface Route {
  path: string;
  exact?: boolean;
  name: string;
  layout?: boolean;
  hideMenu?: boolean;
  icon?: ReactNode;
  component: React.FC<any>;
  children?: Route[];
}

export const Routes: Route[] = [
  {
    path: '/',
    exact: true,
    name: '首页',
    icon: HomeOutlined,
    component: HomePage,
  },
  {
    path: '/login',
    name: '登录',
    hideMenu: true,
    layout: false,
    icon: HomeOutlined,
    component: LoginPage,
  },
  {
    name: '详情',
    path: '/detail',
    icon: HomeOutlined,
    component: Detail,
    children: [
      {
        name: '样例',
        path: '/demo',
        component: Detail,
      },
    ],
  },
  {
    path: '*',
    name: '404',
    hideMenu: true,
    layout: false,
    component: NotFound,
  },
];

export const flatRoutes = flatRouter(Routes);
