


const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "img/profile1.jpg",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
        name: "Rosetta Q",
        photoUrl:
            "img/profile2.jpg",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
        name: "Constantine V",
        photoUrl:
            "img/profile3.jpg",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
];

let img = document.querySelector('img');
let text = document.querySelector('.text');
let username = document.querySelector('.username');

let idx = 0;
updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    username.innerText = name;
    img.src = photoUrl;
    text.innerText = text;
    idx++;
    if (testimonials.length == idx) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 1000);
}