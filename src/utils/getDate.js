export default data => {
    const months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    };
    const date = data.split(' ')[0];
    const [month, day, year] = date.split('/');

    function ordinal_suffix_of(i) {
        if (i < 10 && String(i).length > 1) {
            i = String(i).split('')[1];
        }
        var j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return i + "st";
        }
        if (j === 2 && k !== 12) {
            return i + "nd";
        }
        if (j === 3 && k !== 13) {
            return i + "rd";
        }
        return i + "th";
    }
    const newDay = ordinal_suffix_of(day);

    const newDate = `${months[month]} ${newDay}, ${year.replace(',', '')}`;
    return newDate;
};


