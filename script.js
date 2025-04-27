const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openmenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}
function closemenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-dark-white/50');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/50',"dark:bg-transparent");
    }else{
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-dark-white/50');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent');
    }
})
// dark mode and light mode
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');

    if( document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
  }
}


