const navbarDemos = document.querySelector('.navbar__demos')
const demoArea = document.querySelector('.demoArea')
const demoButton = document.querySelector('.cta__demo')


navbarDemos.addEventListener('click', () => demoArea.scrollIntoView({ behavior: "smooth" }))
demoButton.addEventListener('click', () => demoArea.scrollIntoView({ behavior: "smooth" }))


// USAGE

const vec1 = document.querySelector('.vec1')
const vec2 = document.querySelector('.vec2')
const vec3 = document.querySelector('.vec3')
const vec4 = document.querySelector('.vec4')
const vec5 = document.querySelector('.vec5')




vec1.addEventListener('click', () => {
    document.querySelector('.before-click-vec1').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec1').classList.toggle('hide-usage');
    vec1.classList.toggle('rotate');
})

vec2.addEventListener('click', () => {
    document.querySelector('.before-click-vec2').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec2').classList.toggle('hide-usage');
    vec2.classList.toggle('rotate');
})

vec3.addEventListener('click', () => {
    document.querySelector('.before-click-vec3').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec3').classList.toggle('hide-usage');
    vec3.classList.toggle('rotate');
})

vec4.addEventListener('click', () => {
    document.querySelector('.before-click-vec4').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec4').classList.toggle('hide-usage');
    vec4.classList.toggle('rotate');
    console.log("yes4")
})

vec5.addEventListener('click', () => {
    document.querySelector('.before-click-vec5').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec5').classList.toggle('hide-usage');
    vec5.classList.toggle('rotate');
    console.log('yes')
})



// FAQS



document.getElementById('pyqVector1').addEventListener('click', () => {
    document.querySelector('.faqAns1').classList.toggle('hide-ans');
    document.querySelector('#pyqVector1').classList.toggle('rotate')

})


document.getElementById('pyqVector2').addEventListener('click', () => {
    document.querySelector('.faqAns2').classList.toggle('hide-ans');
    document.querySelector('#pyqVector2').classList.toggle('rotate')
})




document.getElementById('pyqVector3').addEventListener('click', () => {
    document.querySelector('.faqAns3').classList.toggle('hide-ans');
    document.querySelector('#pyqVector3').classList.toggle('rotate')
})

document.getElementById('pyqVector4').addEventListener('click', () => {
    document.querySelector('.faqAns4').classList.toggle('hide-ans');
    document.querySelector('#pyqVector4').classList.toggle('rotate')
})


document.querySelector('.navbar__install ').addEventListener('click',()=>{
    alert('Extension is being updated')
})

document.querySelector(' .cta__install').addEventListener('click',()=>{
    alert('Extension is being updated')
})

document.querySelector('.add-to-chrome').addEventListener('click',()=>{
    alert('Extension is being updated')
})