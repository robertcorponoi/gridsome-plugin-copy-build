'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the options available to be passed to an instance of gridsome-plugin-copy-build and their default
 * values if any exist.
 */
var Options = /** @class */ (function () {
    /**
     * @param {Object} options The initialization options passed to the plugin.
     */
    function Options(options) {
        /**
         * The directory to copy the build files to.
         *
         * @property {string}
         *
         * @default process.cwd()
         */
        this.targetDir = process.cwd();
        /**
         * Indicates whether info logs should be output to the console or not.
         *
         * @property {boolean}
         *
         * @default false
         */
        this.verbose = false;
        Object.assign(this, options);
    }
    return Options;
}());
exports.default = Options;
;
