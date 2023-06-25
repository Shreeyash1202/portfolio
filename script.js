// MOBILE SCREEN SIDE MENU
var sideMenu =document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right='0';
}

function closemenu(){
    sideMenu.style.right='-200px';
}


// FOR ANIMATION
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

// ABOUT LINK

var aboutLink =document.getElementsByClassName('alinks');
var linkContent =document.getElementsByClassName('link-content');

function openlink(linkID){
    for(alink of aboutLink){
        alink.classList.remove('active-link');
    }
    for(linkc of linkContent){
        linkc.classList.remove('active');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(linkID).classList.add('active');
}


//form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var purpose = document.getElementById('purpose').value;
  
    var subject = 'Contact Form Submission';
    var body = 'Name: ' + name + '\nPhone: ' + phone + '\nPuropse: ' + purpose;
  
    var mailtoLink = 'mailto:shreeyashk1202@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
  });
  



