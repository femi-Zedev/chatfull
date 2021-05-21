import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


// Renvoyer les utilisateurs non authorisés vers loginpage
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);

// Authoriser les utilisateurs connectés
const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // ...canActivate(redirectLoggedInToChat),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'chat',
    // ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'keyboard-test',
    loadChildren: () => import('./pages/fongbe/fongbe.module').then( m => m.FongbeModule)
  },
  {
    path: '*',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
