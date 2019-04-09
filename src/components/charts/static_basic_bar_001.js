export default {
    /** 
     * name of this chart template
     */
    name: "static basic bar 001",
    description: "This is a simple bar chart",
    
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
                color: "#ff0000",
                imgSrc: ""
            }
        }
    ],


}
