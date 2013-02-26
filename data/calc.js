self.port.on('clicked', function(url) {
    if (url.contains('toggl.com/report/show')) {
        console.log('This is the right page');
        ve = document.getElementsByClassName('task-duration minutes');
        console.log(ve.length);
        for (var i = 0; i < ve.length; i++) {
            ve[i].classList.add('hidden');
            console.log(i);
        }
        he = document.getElementsByClassName('task-duration decimal hidden');
        for (var i = 0; i < he.length; i++) {
            he[i].classList.remove('hidden');
            console.log(i);
        }
    }
});
