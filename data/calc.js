if (document.URL.contains('toggl.com/report/show')) {
    ve = document.getElementsByClassName('task-duration minutes');
    for (var i = 0; i < ve.length; i++) {
        if (!ve[i].classList.contains('hidden')) {
            ve[i].classList.add('hidden');
        }
    }
    he = document.getElementsByClassName('task-duration decimal hidden');
    for (var i = 0; i < he.length; i++) {
        days = parseFloat(he[i].innerHTML) / 8;
        he[i].innerHTML = days;
        he[i].classList.toggle('hidden');
    }
}
