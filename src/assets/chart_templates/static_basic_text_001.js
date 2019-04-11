var info = {
    /** 
     * name of this chart template
     */
    name: "static basic text 001",
    description: "This is a simple text",
    author: "Merriam Webster",
    thumbnail: "http://icons.iconarchive.com/icons/icons8/windows-8/256/Editing-Text-Color-icon.png",
    /** 
     * allowed table format for this chart
     */
    tableFormat: {
        /** 
         * maxItem: max number of items (rows) allowed
         * maxData: max number of data (columns) allowed for each item
         */
        maxItem: 0,
        maxData: 0,
        /**
         * explicitly specify data types for each item; default type is Number
         */
        dataTypes: {
        }
    },

    /**
     * initial test data for testing and demostrations
     */
    initialData: [
    ],
}

var values = {
    textContent: "Sample tedxt",
    //textSize: 16,
    //textColor: {r: 255, g: 0, b: 0}
};

var panel = function(values) {
    /**
     * contents that will be displayed in left panel.
     * Type: info text color number range select ...
     */
    return {
        "General settings": [
            {type: "text", value: values.textContent}
        ],
        "Other information": [
        ]
    }
}

var draw = function(box, values) {
    // console.log(v.muval1);
    box.innerHTML = values.textContent;
}

export {info, values, panel, draw};