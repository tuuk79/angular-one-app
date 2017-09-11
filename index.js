import _ from 'lodash';
import angular from 'angular';

require('./node_modules/angular/angular')
require('./node_modules/@uirouter/angularjs/release/angular-ui-router');
require('./steve.module');
require('./app.module');
require('./hello.service');	
require('./app.service');
require('./components/app/app');
require('./components/home/home');
require('./components/about/about');
require('./components/admin/admin');

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

component();
