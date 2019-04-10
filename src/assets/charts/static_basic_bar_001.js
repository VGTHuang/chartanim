var info = {
    /** 
     * name of this chart template
     */
    name: "static basic bar 001",
    description: "This is a simple bar chart",
    author: "John Doe",
    thumbnail: "https://www.clker.com/cliparts/0/8/f/2/1237916771593128258jean_victor_balin_graphics_rounded.svg.thumb.png",
    /** 
     * allowed table format for this chart
     */
    tableFormat: {
        /** 
         * maxItem: max number of items (rows) allowed
         * maxData: max number of data (columns) allowed for each item
         */
        maxItem: 1,
        /**
         * explicitly specify data types for each item; default type is Number
         */
        dataTypes: {
            0: Number
        }
    },

    /**
     * initial test data for testing and demostrations
     */
    initialData: [
        {
            name: "temperature",
            data: [1, 3, 4, 5, 7, 9, 12, 6, 8, 3, 5],
            append: {
                /**
                 * color imgSrc
                 */
                color: "#ff0000",
                imgSrc: ""
            }
        }
    ],
}

var values = {
    muval1: 1234,
};

var panel = {
    /**
     * contents that will be displayed in left panel
     */
    block1: [
        {type: "static-info", text: "This is how you mutate muval1"},
        {type: "mutate-number", label: "muval one", min: 0, max: 10000, step: 1, mutateData: "muval1"},
    ]
}


var cons = function(v) {
    console.log(v.muval1);
}

export {info, values, panel, cons};