top_btn = document.getElementById("top-button");
interval = document.getElementById("interval-sec");

interval_btn = document.getElementById("interval-button");
projects = document.getElementById("projects-sec");

top_btn.addEventListener('click', e => {
    interval.scrollIntoView({behavior: 'smooth'});
})

interval_btn.addEventListener('click', e => {
    projects.scrollIntoView({behavior: 'smooth'});
})

function on_resize() {

}

on_resize()
window.addEventListener('resize', on_resize) 
