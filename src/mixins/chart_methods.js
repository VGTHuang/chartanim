/** 
 * only serves as static methods;
 * does not dynamically bind with any parameter
 * or vuex state
 */
"use strict";

var ChartMethods = {

    /**
     * map the already sorted array of timestamps onto a scale of 0 to 1
     * and return the new projected array
     */
    getTimestampInterval(timestamps) {
        // 1 or 0 timestamp
        if(timestamps.length <= 1) {
            return [0];
        }
    
        // mapping
        var iv = [];
        var begin = (new Date(timestamps[0])).getTime()/1000;
        var duration = (new Date(timestamps[timestamps.length-1])).getTime()/1000-begin;
        iv = timestamps.map(elem => (new Date(elem).getTime()/1000-begin)/duration );
        
        return iv;
    },

    /**
     * expects 5 parameters (
     *   tablecontents: numerical data from table (contents in vuex state)
     *   tsarr: mapped array of timestamps from getTimestampInterval,
     *   curts: current mapped timestamp,
     *   animstyle: style of animation ("no", "linear", "ease", ...?),
     *   iskey: if curts is a keyed timestamp, then simply return an array from existing data
     * );
     * calculate the corresponding value of each item at that timestamp
     * and return an array of those values
     */
    getValuesOfTimestamp(tablecontents, tsarr, curts, animstyle, iskey) {
        var keyind = 0;
        if(iskey === true) {
            // simply return the data
            keyind = tsarr.indexOf(curts);
            return tablecontents.map(content => content.records[keyind]);
        }
        else {
            // not a keyed timestamp; calculate previous adjacent key
            while(tsarr[keyind] < curts) {
                keyind++;
            }
            keyind--;
            // "no": no animation style; returned data parallels keyind
            // GET RID OF || 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if(animstyle === "no" || 1) {
                return tablecontents.map(content => content.records[keyind]);
            }
            //"linear": linear animation style
            else if(animstyle === "linear") {
                var parr = tablecontents.map(content => content.records[keyind]);
                var narr = tablecontents.map(content => content.records[keyind+1]);
                var pts = tsarr[keyind];
                var nts = tsarr[keyind+1];

                var ratio = (nts-curts)/(curts-pts);
                
            }
            return [12345];
        }
    }
}

export {ChartMethods};