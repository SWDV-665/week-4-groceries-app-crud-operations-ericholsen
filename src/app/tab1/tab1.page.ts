import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery App"


  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("Removing Item = ", item, index);
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + '...',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  /*slidingItem included to enable the item to slide back when done, name commes from HTML*/
  async editItem(item, index, slidingItem) {
    console.log("Edit Item = ", item, index);
    const toast = await this.toastController.create({
      message: 'Editing ' + item.name + '...',
      duration: 2000
    });
    toast.present();

    console.log("Editing Item");
    this.inputDialogService.showPrompt(item, index, slidingItem);

  }
  

  async addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }

  

}
