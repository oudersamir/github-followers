import { ValidationErrors, AbstractControl } from "@angular/forms";

export class LoginValidator{
    static cannotContainsSpace(control :AbstractControl):ValidationErrors | null {
    if((control.value as string).indexOf(' ')>=0)
    return {
        cannotContainsSpace:true
    }
    
    return null;
    }
}