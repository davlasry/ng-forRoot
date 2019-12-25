import {ModuleWithProviders, NgModule} from '@angular/core';
import {StudentsService} from './students.service';
import {AnotherComponent} from './another/another.component';



@NgModule({
  declarations: [AnotherComponent],
  exports: [AnotherComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        StudentsService
      ]
    };
  }

  // static forChild(): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule
  //   };
  // }
}
