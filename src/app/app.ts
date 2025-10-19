import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('angular-signal');

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  selectedVe
constructor() {
  console.log("quantity calue", this.quantity());
  // to update quantity
  this.quantity.update(qty => qty * 2);
}

qtyEff = effect(() => console.log("latest qty: ", this.quantity()))

onQuantitySelected(qty: number) {
  this.quantity.set(qty);
  // this.quantity.set(5);
  // this.quantity.set(42);
}

}
