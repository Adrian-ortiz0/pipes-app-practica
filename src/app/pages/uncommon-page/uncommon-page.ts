import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Adrian',
  gender: 'male',
  age: 23,
  address: 'Bucarmanga, Colombia',
};
const client2 = {
  name: 'Adriana',
  gender: 'female',
  age: 27,
  address: 'Bucarmanga, Colombia',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  clientsMap = signal({
    '=0' : 'no tenemos ningun cliente en espera',
    '=1' : 'tenemos un cliente en espera',
    other: 'tenemos # clientes en espera'
  })

  clients = signal(['Maria', 'Pedro', 'Juan', 'Adrian', 'Mariana']);
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

   // Keyvalue pipe

   profile = {
    name: 'Adrian',
    age: 23,
    address: 'Bucaramanga, Colombia'
   }
}
