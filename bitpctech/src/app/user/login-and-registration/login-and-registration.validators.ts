import { AbstractControl, ValidationErrors } from '@angular/forms';

//custom validator store in different file as where it is used 
export class RegistrationValidators {
    static passwordLength(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).length < 6)
            return {
                passwordLength: {
                    requiredLength: 6,
                    actualLength: control.value.length
                }
            }
    }

    static passwordLetter(control: AbstractControl): ValidationErrors | null {
        if (!(control.value as string).match(/[a-z]/i))
            return {
                passwordLetter: {
                    requiredLetter: "Password must contains alphabetical characters"
                }
            }
    }
}