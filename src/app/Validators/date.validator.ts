import { AbstractControl } from "@angular/forms";

export const dateValidator = (control: AbstractControl) => {
    const value = control.value;

    if (!value) {
        return null;
    };

    const dateRegex: RegExp = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dateRegex.test(value)) {
        return { invalidDate: true };
    };

    const year = value.split('/').map(Number)[2];

    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 120;
    const maxYear = currentYear;

    if (year < minYear || year > maxYear) {
        return { invalidYear: true };
    }

    return null;
}