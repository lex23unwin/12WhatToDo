import onClickTodayTab from './today.js'
import onClickGeneralTab from './general.js'
import onClickImportantTab from './important.js'
import onClickWeekTab from './week.js'
import onClickAddProject from './addProject.js'

function render() {
    onClickGeneralTab();
    onClickImportantTab();
    onClickTodayTab();
    onClickWeekTab();
    onClickAddProject();
}

render();