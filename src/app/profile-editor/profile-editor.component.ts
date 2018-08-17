import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { FormBuilder, Validators, FormArray } from '@angular/forms' //importo form builder, importo validadores


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})


export class ProfileEditorComponent {

// Usando formBuilder
	profileForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: [''],
		address: this.fb.group({
			street: [''],
			city: [''],
			state: [''],
			zip: ['']
		}),
		aliases: this.fb.array([ //agrego el array de alias en el form
			this.fb.control('')
		])
	});
	/* version con FormGroup instancias
	profileForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		address: new FormGroup({
			street: new FormControl(''),
			city: new FormControl(''),
			state: new FormControl(''),
			zip: new FormControl('')
		})
	});*/

	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.profileForm.value);
	}
	updateProfile() {
		this.profileForm.patchValue({
			firstName: 'Nancy',
			address: {
				street: '123 Drew Street'
			}
		});
	}

	get aliases(){
		return this.profileForm.get('aliases') as FormArray; //traer los alias como formarray
	}
	addAlias(){
		this.aliases.push(this.fb.control('')) //agrega un alias al array de alias desde el formbuilder
	}
	
	constructor(private fb: FormBuilder){ }
}