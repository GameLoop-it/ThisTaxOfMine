'use strict';

function onPayTaxes() {
	if (World.gIsGameOver) {
		return;
	}
	let t = -Math.floor((World.money * 0.9 * Math.random() + 50));
	Notifications.create("You have paid " + Math.abs(t) + " in taxes", t);
	World.addMoney(t);

}

function onWork() {
	if (World.gIsGameOver) {
		return;
	}
	let wage = Math.floor(1000 * Math.random());
	Notifications.create("You have gained " + wage, wage);
	World.addMoney(wage);
	World.syncUI();
}

function onRestart() {
	World.init();
}

$(document).ready(function () {
	World.init();
});
