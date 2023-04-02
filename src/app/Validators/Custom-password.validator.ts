import { AbstractControl } from "@angular/forms";

export const matchPasswordValidator = (Control: AbstractControl) => {
    const password = Control.get('password');
    const confirmpassword = Control.get('confirmPassword');

    return password && confirmpassword && password.value !== confirmpassword.value ? {match: true} : null
}