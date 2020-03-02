import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FormsComponent } from "./forms/forms.component";
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductsComponent }from './products/products.component';
import { ProductDetailsComponent } from './product.details/product.details.component';

export const routes: Routes = [
    {
        path: "products",
        component: ProductsComponent,
    },
    {
        path: "products/:id",
        component: ProductDetailsComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "forms",
        component: FormsComponent
    },
    {
        path: "about/:id",
        component : AboutComponent,
        children: [
            {
                path: "about1",
                component: About1Component
            },
            {
                path: "about2",
                component: About2Component
            }
        ]
    }
];