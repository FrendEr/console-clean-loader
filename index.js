/**
 *         ____                __
 *        / __/______ ___  ___/ /
 *       / _// __/ -_) _ \/ _  /
 *      /_/ /_/  \__/_//_/\_ _/
 *
 * 		MIT License http://www.opensource.org/licenses/mit-license.php
 *	    Author Frend
 *	    Github @FrendEr
 */

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var consoleMethods = 'assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profiles profileEnd show table time timeEnd timeline timelineEnd timeStamp trace warn'.split(' ');
    var consoleNamespace = ['console', 'window.console'];
    var reg = new RegExp(
        '(' + consoleNamespace.join('|') + ')' +
        '.(?:' + consoleMethods.join('|') + ')\\s{0,}\\([^;]*\\)(?!\\s*[;,]?\\s*\\/\\*\\s*\\s*\\*\\/)\\s{0,};?'
        , 'gi'
    );

    source = source.replace(reg, function() {
        return '';
    });
    return source;
}
