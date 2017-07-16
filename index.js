import _ from 'lodash';
import angular from 'angular';

require('./app.module');
require('./hello.service');	
require('./app.service');
require('./app.component');

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

component();
