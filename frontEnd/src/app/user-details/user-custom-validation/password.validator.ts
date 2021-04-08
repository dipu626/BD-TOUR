import { AbstractControl, ValidationErrors } from "@angular/forms";

export function confirmPasswordValidator(control: AbstractControl) : ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirm');    
    if (password != null && confirmPassword != null && password.value !== confirmPassword.value) {
        return {"misMatch": true};
    }
    else {
        return null;
    }
}