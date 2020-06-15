(function () {

'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuy=this;

  ShoppingListCheckOffService.addItem("Cookies",10);
  ShoppingListCheckOffService.addItem("Coke",4);
  ShoppingListCheckOffService.addItem("Biscuits",5);
  ShoppingListCheckOffService.addItem("Chocolate",7);
  ShoppingListCheckOffService.addItem("Apples",8);

  ToBuy.items=ShoppingListCheckOffService.gettoBuy();

  ToBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlreadyBought=this;

  AlreadyBought.items1=ShoppingListCheckOffService.getalreadyBought();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy=[];
  var bought=[];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuy.push(item);
  };

  service.removeItem = function (itemIndex) {
    bought.push(toBuy[itemIndex])
    toBuy.splice(itemIndex, 1);
  };

  service.gettoBuy = function () {
    return toBuy;
  };

  service.getalreadyBought = function () {
    return bought;
  };

}

})();
