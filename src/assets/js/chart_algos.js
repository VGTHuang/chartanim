var algos = {
    getTimestampInterval(timestamps) {
        /**
         * timestamps are sorted then projected onto a scale of 0 to 1
         * 
         */

        // 1 or 0 timestamp
        if(timestamps.length <= 1) {
            return [0];
        }
    
        // sort
    
        
        // scale
        
        var iv = [];
        var begin = (new Date(timestamps[0])).getTime()/1000;
        var duration = (new Date(timestamps[timestamps.length-1])).getTime()/1000-begin;

        iv.push(0);
        for(var i = 1; i < timestamps.length-1; i++) {
            iv.push(((new Date(timestamps[i])).getTime()/1000-begin)/duration);
        }
        iv.push(1);
        
        return iv;
    
    }
}

export {algos};