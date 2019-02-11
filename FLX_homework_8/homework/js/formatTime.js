function formatTime(minutes) {
    let days = Math.floor(minutes / 1440);
    let hours = Math.floor((minutes % 1440) / 60);
    let minute = Math.floor((minutes % 1440) % 60);

    return days + ' day(s) ' + hours + ' hour(s) ' + minute + ' minute(s).';
}

formatTime(120);