const d = document;
const contactForm = () => { //function for select html-elements.
    const $form = d.querySelectorAll(".contact-form"),
        $inputRequired = d.querySelectorAll(".contact-form [required]");

    $inputRequired.forEach(input => { //Creating span for error and fill.
        console.log(input);
        const $span = d.createElement("span");
        $span.id = input.name,
            $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    })
}

d.addEventListener('DOMContentLoaded', contactForm);