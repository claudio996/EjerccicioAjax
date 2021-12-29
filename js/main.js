const d = document;
const contactForm = () => { //function for select html-elements.
    const $form = d.querySelectorAll(".contact-form"),
        $inputRequired = d.querySelectorAll(".contact-form [required]");

    $inputRequired.forEach(input => { //Creating span for error and fill.
        const $span = d.createElement("span");
        $span.id = input.name, //set id span with name input.
            $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none"); //add class form-error.
        input.insertAdjacentElement("afterend", $span); //insert afterend span.
    })

    d.addEventListener("keyup", e => {
        if (e.target.matches(".contact-form [required]")) { //validate for pattern and not pattern.
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern; //spreet operator  if $input validate or $textarea validate .

            if (pattern && $input.value !== "") { // if regular expression send for user == value
                let regex = new RegExp(pattern); //create new regulasr expression.
                return !regex.exec($input.value) ? // return  comparing evaluated (regExp)  ?true :false. 
                    d.getElementById($input.name).classList.add("is-active") : // else
                    d.getElementById($input.name).classList.remove("is-active") //remove class

            }
            if (!pattern) { //not pattern not regular expression.
                return $input.value = "" ?

                    d.getElementById($input.name).classList.add("is-active") :
                    d.getElementById($input.name).classList.remove("is-active");

            }
        }
    })
}

d.addEventListener('DOMContentLoaded', contactForm);