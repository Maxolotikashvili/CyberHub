import {AbstractControl} from "@angular/forms";

export const matchValidator = (Control: AbstractControl) => {
    const Password = Control.get('password');
    const Confirmpassword = Control.get('confirmPassword');

    return Password && Confirmpassword && Password.value === Confirmpassword.value ? {match: true} : null
}