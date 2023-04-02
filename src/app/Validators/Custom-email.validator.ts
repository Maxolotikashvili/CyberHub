import { AbstractControl } from "@angular/forms";

export const matchEmailValidator = (Control: AbstractControl) => {
    const email = Control.get('email');
    const confirmemail = Control.get('confirmEmail');

    return email && confirmemail && email.value !== confirmemail.value ? {match: true} : null
}