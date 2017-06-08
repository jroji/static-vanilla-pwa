import { HomeModule } from './modules/home/home.module';

export const routes = {
    '/home': new HomeModule(),
    '*': new HomeModule(),
    '/test': '/test/test.module#TestModule'
};
