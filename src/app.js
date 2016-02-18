'use strict';
import path from 'path';
import cmd from 'commander';
import chalk from 'chalk';
import util from 'util';

import * as _ from 'lodash';
import * as Utils from './_utils';
import ramlParser from './_parser';

/** -------------------------------------------------- **/
/** ----- Get cmd options                              **/
cmd.version('1.0.0')
    .option('-i, --input <input_file>', '(required) Input RAML file')
    .option('-o, --output <output_file>', 'Output html file')
    .option('-p, --port <number>', 'Port used to start application')
    .on('--help', displayHelp)
    .on('-h', displayHelp)
    .parse(process.argv);


if (!_.isUndefined(cmd.input)) {

    ramlParser(cmd.input)
        .then((raml) => {

            var resources = raml.resources();
            //var api = raml.api()

            console.log('-------- RESULT --------');
            _.forEach(resources, (res) => {
                console.log('resource:', res.absoluteUri());
                console.log('   name:', res.displayName());

                var methods = _.map(res.methods(), (method) => {
                    return method.method();
                });
                console.log('   methods:', methods);
            })
        });

} else {
    console.log(chalk.red('ERROR: no input file provided!, see help.'));
    cmd.outputHelp();
}


/** -------------------------------------------------- **/
/** ----- Some fns                                     **/
function displayHelp() {
    console.log('  Examples:');
    console.log('    1) -i api.raml -o index.html');
    console.log('    2) -i api.raml -p 3000');
    console.log('');
}

