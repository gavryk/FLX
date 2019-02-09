let user = prompt('Write your login', '');

if(user) {
    if( user.length < 4 ) {
        alert('I don\'t know any users having name length less than 4 symbols')
    } else if ( user === 'Admin' || user === 'User') {
        let pass = prompt('Enter your password', '');
        let time = new Date().getHours();
        if (pass) {
            if ((user === 'Admin' && pass === 'RootPass') || (user ==='User' && pass === 'UserPass')) {
                if ( time < 20 ) {
                    alert('Good day, dear ' + user + '!');
                } else {
                    alert('Good evening, dear ' + user + '!')
                }
            } else {
                alert('Wrong Password');
            }
        } else {
            alert('Canceled');
        }
    } else {
        alert('I don\'t know you')
    }
} else {
    alert('Canceled');
}