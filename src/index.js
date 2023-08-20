import onClickTodayTab from './today.js'
import onClickGeneralTab from './general.js'
import onClickImportantTab from './important.js'
import onClickWeekTab from './week.js'
import defaultGeneral from './defaultGeneral.js'

function render() {
    defaultGeneral();
    onClickGeneralTab();
    onClickImportantTab();
    onClickTodayTab();
    onClickWeekTab();
}


render();