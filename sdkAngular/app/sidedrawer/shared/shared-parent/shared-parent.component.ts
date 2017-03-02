import {Component, Injectable, OnInit} from "@angular/core";

import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {Observable} from 'data/observable';

@Component({
	moduleId: module.id,
	selector: "tk-sidedrawer-shared-parent",
	templateUrl: 'shared-parent.component.html',
})
@Injectable()
export class SideDrawerParentComponent extends Observable implements OnInit {
	constructor() {
		super()
	}

	ngOnInit() {
		this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
			+ " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
	}

}
