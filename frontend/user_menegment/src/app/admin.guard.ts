import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const adminGuard: CanActivateFn = (route, state) => {
  
  const admin = sessionStorage.getItem('admin');
  console.log(admin);
  
  const router = inject(Router)

  
  if (admin ==="false")  {
    router.navigate(['login'])
    return false
  } else {
    return true
  }
 };