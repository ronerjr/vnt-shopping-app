import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListOptionsComponent } from './shopping-list/shopping-list-options/shopping-list-options.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SHOPPING_ROUTES } from './shopping-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SHOPPING_ROUTES),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListOptionsComponent,
    ShoppingFormComponent,
    AboutComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  exports: [
    ShoppingComponent
  ],
  providers: [
    ShoppingListService
  ],
  entryComponents: [
    ShoppingListOptionsComponent,
  ]
})
export class ShoppingModule { }
