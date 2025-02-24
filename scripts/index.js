// FAQs
const faqs = document.querySelectorAll(".faq")

for (const faq of faqs) {
    const header = faq.querySelector(".faq-header")
    header.addEventListener("click", () => {
        faq.classList.toggle("open")
    })
}