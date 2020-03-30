import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import { Components, EntryComponents } from './app.components';
import { Imports } from './app.imports';
import { Providers } from './app.providers';
import { Pipes } from './app.pipes';
import { FormSettingTableDataComponent } from './components/ui-artifacts/form-setting/form-setting-table-data/form-setting-table-data.component';
import { FormSettingNavigationComponent } from './components/ui-artifacts/form-setting/form-setting-navigation/form-setting-navigation.component';
import { UsersFilterFormComponent } from './components/views/users/users-filter-form/users-filter-form.component';
import { UsersDataTableComponent } from './components/views/users/users-data-table/users-data-table.component';
import { StopTaskModalComponent } from './components/ui-artifacts/stop-task-modal/stop-task-modal.component';
import { SecondsConverterPipe } from './pipes/seconds-converter.pipe';

@NgModule({
	declarations: [
		...Components,
		...Pipes,
		FormSettingTableDataComponent,
		FormSettingNavigationComponent,
		UsersFilterFormComponent,
		UsersDataTableComponent,
		StopTaskModalComponent,
		SecondsConverterPipe
	],
	imports: [ ...Imports ],
	providers: [ ...Providers ],
	bootstrap: [ AppComponent ],
	entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
