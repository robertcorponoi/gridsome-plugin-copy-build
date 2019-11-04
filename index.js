'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs-extra"));
var Options_1 = __importDefault(require("./options/Options"));
/**
 * Takes the contents of the Gridsome build and copies them to a target destination.
 */
module.exports = /** @class */ (function () {
    /**
     * @param {Object} options
     * @param {string} options.targetDir The directory to copy the build files to.
     */
    function GridsomePluginCopyBuild(api, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /**
         * The dist folder of the application using this plugin.
         *
         * @private
         *
         * @property {string}
         */
        this._dist = process.cwd() + "/dist";
        this._options = new Options_1.default(options);
        /**
         * Wait until the Gridsome build is finished to copy the files.
         */
        api.afterBuild(function () { return _this._boot(); });
    }
    /**
     * Copies the files from the dist folder to the target directory.
     *
     * @private
     */
    GridsomePluginCopyBuild.prototype._boot = function () {
        var _this = this;
        fs.copy(this._dist, this._options.targetDir)
            .then(function () {
            console.log("Copied contents of " + _this._dist + " to " + _this._options.targetDir);
        })
            .catch(function (err) {
            throw new Error(err);
        });
    };
    return GridsomePluginCopyBuild;
}());
