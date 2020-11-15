import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public alertController: AlertController, public dataService: GroceriesServiceService) { }


  async showPrompt(item?, index?, slidingItem?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item' : 'Add Item',
      inputs: [
        {
          name: 'name',
          placeholder: "Name",
          value: item ? item.name : null
        },
        {
          name : 'quantity',
          placeholder: "Quantity",
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: (item) => {
            console.log('Confirm Save', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
              slidingItem.close();
            }
            else {
              this.dataService.addItem(item);
            }
            
            
          }
        }
      ]
    });

    await alert.present();

  }

}
