import * as frameModule from "ui/frame";
import { Router } from '@angular/router';

export class OptionsExampleBase {
    private _navigationParameters;
    protected router: Router;
    
    constructor() {
    }

    get navigationParameters() {
        return this._navigationParameters;
    }

    set navigationParameters(value) {
        this._navigationParameters = value;
    }

    public onOptionsTapped() {
        this.router.navigate(['/options'], { queryParams: { selectedIndex: this.navigationParameters.selectedIndex, paramName: this.navigationParameters.paramName, items: this.navigationParameters.items } });
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}