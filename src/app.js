'use strict';
import * as _ from 'lodash';
import * as Utils from './_utils';

import fs from 'fs';
import path from 'path';

/** get cmd options **/
var input = Utils.getOption('i');
var output = Utils.getOption('o');
var port = Utils.getOption('p');


Utils.readFile(input)
    .then((result) => {
        console.log('promise resolved with:', result);
    });