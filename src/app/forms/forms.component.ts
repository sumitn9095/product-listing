import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Iuser } from '../shared/model/user.form.structure';
import { SampleService } from '../sample.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public samSer: any[] = [];
  public userForm : FormGroup;
  constructor(private fb: FormBuilder, private ss : SampleService) { }

  ngOnInit() {
  //   this.userForm = new FormGroup({
  //     name: new FormControl(),
  //     age: new FormControl(),
  //     phone: new FormControl()
  //  });
  this.userForm = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(5)]],
    age : ['', Validators.required],
    phone : ['', [Validators.required, Validators.minLength(10)]]
  });

  }


  save(item: Iuser) {
    ///console.log(item);
    this.ss.addList(item.name, item.age, item.phone);
    this.samSer = this.ss.showList();
    console.log(this.samSer);
  }

}
