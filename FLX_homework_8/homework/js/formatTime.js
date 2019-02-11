function formatTime(minutes) {
    let days = Math.floor(minutes /(60 * 24));
    let hours = Math.floor((minutes % (24 * 60)) / 60);
    let minute = Math.floor((minutes % (24 * 60)) % 60);

    return days + ' day(s) ' + hours + ' hour(s) ' + minute + ' minute(s).';
}

formatTime(120);