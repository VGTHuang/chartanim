<template>
    <div id="chart-editor-wrapper">
            <e-header />
            <e-body />
            <e-footer />
    </div>
</template>

<script>
import EHeader from "./EHeader.vue";
import EBody from "./EBody.vue";
import EFooter from "./EFooter.vue";

export default {
    components: {
        EHeader,
        EBody,
        EFooter
    },
}
</script>

<style lang="scss">

#chart-editor-wrapper {
    overflow: visible;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

// *****************  general styles  *******************

//all panels
.panel-basic {
    background: $dgrey;
    color: $lgrey;
}
.panel-border-b {
    border-bottom: 1px solid $mgrey;
}
.panel-border-r {
    border-right: 1px solid $mgrey;
}

//basic buttons
.btn-basic {
    margin: 0 5px 0;
    border: 1px solid $xdgrey;
    border-radius: 3px;
    height: 1.8em;
    background-image: linear-gradient($mgrey, $dgrey);
    color: $xlgrey;
    text-shadow: -1px -1px 0 $dgrey;
    font-family: inherit;
    font-size: .9em;
    white-space: nowrap;
    &:hover {
        background-image: linear-gradient($dgrey, $xdgrey);
    }
    &:disabled {
        background-image: linear-gradient($dgrey, $xdgrey);
        color: $mgrey;
    }
}
.btn-long {
    width: 150px;
}
.btn-short {
    width: 50px;
}
//alert buttons; used with btn-basic
.btn-alert {
    background-image: linear-gradient(#ec3221, #af2d05);
    &:hover {
        background-image: linear-gradient(#c71f10, #640101);
    }
}

// msg containers (for title, msg and otehr components)
.msg-ctn {
    box-sizing: border-box;
    padding: 5px 0;
    margin: 0 10px;
    border-bottom: 1px solid $mgrey;

    // a single row of message
    .msg-row {
        margin: 8px 0;
        overflow-wrap: break-word;
    }
    .msg-row-center {
        display: flex;
        justify-content: center;
    }
    .msg-row-space-between {
        display: flex;
        justify-content: space-between;
    }
    .msg-row-col-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin-right: 5px;
    }

    // table
    table {
        border-collapse: collapse;
        background: white;
        color: black;
        th, td {
            border: 1px solid $ddgrey;
            font-family: monospace;
            text-align: left;
            min-width: 40px;
        }
    }
}

// titles
.lt-basic, .mt-basic, .st-basic {
    margin: 0;
    padding:0;
    color: $xlgrey;
}
//large titles, for h3 and above
.lt-basic {
    font-size: 1.2em;
    color: white;
}
// medium titles, for h4 and below
.mt-basic {
    font-size: 1.1em;
}
// small titles
.st-basic {
    font-size: 1.0em;
}

// basic static message (containers)
.msg-basic {
    font-size: .95em;
    color: $lgrey;
    // contents within meg
    ul, ol {
        margin: 1em;
        padding-left: 1em;
        li {
            margin: .5em 0 .5em;
            padding: 0;
        }
    }
}
// msg small font
.msg-s {
    font-size: .8em;
}
.msg-alert {
    color: #ff5e5e;
}

// for modals
.custom-modal {
    height: 100%;
    width: 100%;
    padding: 0;
}

</style>
