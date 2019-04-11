/*
import static_basic_bar_001 from "./static_basic_bar_001";
import static_basic_pie_001 from "./static_basic_pie_001";

var localCharts = {
    static_basic_bar_001,
    static_basic_pie_001
}
*/
var localCharts = {
    static_basic_text_001: {
        name: "static text 001",
        thumbnail: "http://icons.iconarchive.com/icons/icons8/windows-8/256/Editing-Text-Color-icon.png",
    },
    WWWWWstatic_basic_bar_001: {
        name: "static bar 001",
        thumbnail: "https://www.clker.com/cliparts/0/8/f/2/1237916771593128258jean_victor_balin_graphics_rounded.svg.thumb.png",
    },
    WWWWWstatic_basic_pie_001: {
        name: "static pie 001",
        thumbnail: "https://image.flaticon.com/icons/png/128/138/138342.png",
    },
    error_test: {
        name: "error for testing",
        thumbnail: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/system-error-icon.png",
    }
}

// dynamic load
var loadCharts = (chartName) => import(`@/assets/chart_templates/${chartName}.js`)

export { localCharts, loadCharts }