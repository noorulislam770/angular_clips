import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective,IConfig, provideEnvironmentNgxMask, provideNgxMask  } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component'

export const MASK_CONFIG = new InjectionToken<IConfig>('ngx-mask config');
@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,

  ],
  exports : [
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent,
  ],
  providers : [
    provideNgxMask(),
    provideEnvironmentNgxMask()
  ]
})
export class SharedModule { }
