import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletematerialComponent } from './deletematerial/deletematerial.component';
import { RatematerialComponent } from './ratematerial/ratematerial.component';
import { UploadmaterialComponent } from './uploadmaterial/uploadmaterial.component';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadmaterialComponent
  },
  {
    path: 'delete',
    component: DeletematerialComponent,
  },
  {
    path: 'rate',
    component: RatematerialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
