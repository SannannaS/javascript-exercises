/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDate();
    let today_weekday = today_date.getDay();
    let today_hour = today_date.getHours();
    let today_minutes = today_date.getMinutes();

    //setting weekdays to string:
    switch (today_weekday) {
        case 0:
           today_weekday = 'Sunday';
            break;
        case 1:
            today_weekday = 'Monday';
            break;
        case 2:
            today_weekday = 'Tuesday';
            break;
        case 3:
            today_weekday = 'Wednesday';
            break;
        case 4:
            today_weekday = 'Thursday';
            break;
        case 5:
            today_weekday = 'Friday';
            break;
        case 6:
            today_weekday = 'Saturday';
            break;
    }

    //setting months to string:
    switch (today_month) {
        case 0:
            today_month = 'January';
            break;
        case 1:
            today_month = 'February';
            break;
        case 2:
            today_month = 'March';
            break;
        case 3:
            today_month = 'April';
            break;
        case 4:
            today_month = 'May';
            break;
        case 5:
            today_month = 'June';
            break;
        case 6:
            today_month = 'July';
            break;
        case 7:
            today_month = 'August';
            break;
        case 8:
            today_month = 'September';
            break;
        case 9:
            today_month = 'October';
            break;
        case 10:
            today_month = 'November';
            break;
        case 11:
            today_month = 'December';
            break;
    }

document.getElementById("target").innerHTML = (today_weekday + " " + today_day + " " + today_month + " " + today_year + ", " +today_hour + "h" +today_minutes);

})();
