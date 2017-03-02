import { NativeScriptModule, platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
// >> using-global-directives
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';
import { CALENDAR_DIRECTIVES } from 'nativescript-telerik-ui-pro/calendar/angular';
import { CHART_DIRECTIVES } from 'nativescript-telerik-ui-pro/chart/angular';
import { DATAFORM_DIRECTIVES } from 'nativescript-telerik-ui-pro/dataform/angular';

// Not required imports, these are used by the nativescript-samples-angular SDK examples
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent, createRouteEntryArray, APP_ROUTES } from "./navigation/app.component";
import { AppExampleComponents } from "./navigation/appExamples";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { COMMON_DIRECTIVES } from './navigation/directives';

// >> (hide)
import * as applicationModule from "application";
import * as frescoModule from "nativescript-fresco";
import { TNSFrescoModule } from "nativescript-fresco/angular";
import {SideDrawerChildComponent} from './sidedrawer/shared/shared-child/shared-child.component';

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        frescoModule.initialize();
    });
}
createRouteEntryArray(AppExampleComponents);
// << (hide)

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        LISTVIEW_DIRECTIVES,
        SIDEDRAWER_DIRECTIVES,
        CALENDAR_DIRECTIVES,
        CHART_DIRECTIVES,
        DATAFORM_DIRECTIVES,
        COMMON_DIRECTIVES,
        AppComponent,
        ExamplesListDepth1Component,
        ExamplesListDepth2Component,
        ExamplesListDepth3Component,
        AppExampleComponents,
        OptionsComponent,
        SideDrawerChildComponent
    ],
    imports: [
        NativeScriptModule,
        TNSFrescoModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    providers: [
        OptionsService,
        ExampleItemService
    ]
})
class AppModule { 

}

platformNativeScriptDynamic().bootstrapModule(AppModule);
// << using-global-directives