if (document.URL.contains('toggl.com/report/show')) {
    ve = document.getElementsByClassName('task-duration minutes');
    for (var i = 0; i < ve.length; i++) {
        ve[i].classList.toggle('hidden');
    }
    he = document.getElementsByClassName('task-duration decimal');
    for (var i = 0; i < he.length; i++) {
        he[i].classList.toggle('hidden');
    }
}
