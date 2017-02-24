import { OptionsExampleBase } from "../../options-example-base";
import { Component, OnInit, Injectable, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { Page, NavigatedData } from "ui/page";
import { OptionsService } from "../../navigation/options/options.service";
import * as frameModule from "ui/frame";
import * as applicationModule from "application";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { RadListViewComponent } from "nativescript-telerik-ui-pro/listview/angular";

@Component({
    moduleId: module.id,
    providers: [DataItemService],
    selector: "tk-listview-scroll-to-index-horizontal",
    templateUrl: "listview-scroll-to-index-horizontal.component.html",
    styleUrls: ["listview-scroll-to-index.component.css"]
})
@Injectable()
export class ListviewScrollToIndexHorizontalComponent extends OptionsExampleBase implements OnInit {
    private _optionsParamName: string;
    private _dataItems: ObservableArray<DataItem>;
    private _options: Array<string> = ["None", "CenteredHorizontally", "Left", "Right"];
    private _myScrollPosition: string;

    constructor(private _page: Page, private _dataItemService: DataItemService, private _optionsService: OptionsService, private _router: Router) {
        super();
        let selectedIndex = 2;
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "scrollDirection";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: selectedIndex, paramName: this._optionsParamName, items: this._options };
        }
                this.myScrollPosition = this._options[selectedIndex];

    }

    @ViewChild('myRadListView') listViewComponent: RadListViewComponent;

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get myScrollPosition(): string {
        return this._myScrollPosition;
    }

    set myScrollPosition(value: string) {
        this._myScrollPosition = value;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(100));
    }

    public onTap() {
        this.listViewComponent.listView.scrollToIndex(50);
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case this._options[0]:
                        this.myScrollPosition = this._options[0];
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case this._options[1]:
                        this.myScrollPosition = this._options[1];
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case this._options[2]:
                        this.myScrollPosition = this._options[2];
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case this._options[3]:
                        this.myScrollPosition = this._options[3];
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}