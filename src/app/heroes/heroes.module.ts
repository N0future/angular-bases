import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ListComponent, HeroComponent],
  imports: [CommonModule],
  exports: [ListComponent, HeroComponent]
})
export class HeroesModule { }
