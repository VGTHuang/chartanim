var info = {
    /** 
     * name of this chart template
     */
    name: "static basic pie 001",
    description: "This is a simple pie chart",
    author: "Jane Doe",
    thumbnail: "https://image.flaticon.com/icons/png/128/138/138342.png",
    /** 
     * allowed table format for this chart
     */
    tableFormat: {
        /** 
         * maxItem: max number of items (rows) allowed
         * maxData: max number of data (columns) allowed for each item
         */
        maxItem: 1000,
        /**
         * explicitly specify data types for each item; default type is Number
         */
        dataTypes: {
            0: String,
            1: Number,
        }
    },

    /**
     * initial test data for testing and demostrations
     */
    initialData: [
        {
            name: "doctor",
            data: [12],
            append: {
                /**
                 * color imgSrc
                 */
                color: "#ff0000",
                imgSrc: ""
            }
        },
        {
            name: "consultant",
            data: [23],
            append: {
                /**
                 * color imgSrc
                 */
                color: "#ffff00",
                imgSrc: ""
            }
        },
        {
            name: "merchant",
            data: [8],
            append: {
                /**
                 * color imgSrc
                 */
                color: "#ff00ff",
                imgSrc: ""
            }
        },

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