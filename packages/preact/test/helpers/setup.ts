import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import jsdom = require('jsdom-global');

jsdom();

configure({ adapter: new Adapter() });
