const faculty = document.querySelectorAll('.faculty')
const faculty_drop = document.querySelectorAll('.faculty_drop')

faculty.forEach(elements => {
elements.addEventListener('mouseover', function(){
    this.querySelector('.faculty_drop').classList.add('item_active')
})
elements.addEventListener('mouseout', function() {
    this.querySelector('.faculty_drop').classList.remove('item_active')
})

});


const alumni= document.querySelectorAll('.alumni')
const alumni_drop = document.querySelectorAll('.alumni_drop')

alumni.forEach(elements => {
elements.addEventListener('mouseover', function(){
    this.querySelector('.alumni_drop').classList.add('alumni_active')
})
elements.addEventListener('mouseout', function() {
    this.querySelector('.alumni_drop').classList.remove('alumni_active')
})

});
