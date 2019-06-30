'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs-extra"));
/**
 * Takes the contents of the Gridsome build and copies them to a destination.
 *
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 *
 * @version 0.1.0
 */
module.exports = /** @class */ (function () {
    /**
     * @param {Object} options
     * @param {string} options.targetDir The directory to copy the build files to.
     */
    function GridsomePluginCopyBuild(api, options) {
        var _this = this;
        /**
         * A reference to the dist folder of the application using this plugin.
         *
         * @since 0.1.0
         *
         * @property {string}
         */
        this.dist = process.cwd() + "/dist";
        this.targetDir = options.targetDir;
        /**
         * Wait until the Gridsome build is finished to copy the files.
         */
        api.afterBuild(function () { return _this.boot(); });
    }
    /**
     * Copies the files from the dist folder to the target directory.
     *
     * @since 0.1.0
     *
     * @private
     */
    GridsomePluginCopyBuild.prototype.boot = function () {
        var _this = this;
        fs.copy(this.dist, this.targetDir)
            .then(function () {
            console.log("Copied contents of " + _this.dist + " to " + _this.targetDir);
        })
            .catch(function (err) {
            throw new Error(err);
        });
    };
    return GridsomePluginCopyBuild;
}());
