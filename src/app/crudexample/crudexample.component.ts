import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CrudService } from './crud.service';
import { Observable } from 'rxjs';

export class EmployeeDetails {
  id: number;
  employeeName: string;
  employeeSalary: string
}

@Component({
  selector: 'app-crudexample',
  templateUrl: './crudexample.component.html',
  styleUrls: ['./crudexample.component.css']
})



export class CrudExampleComponent implements OnInit {
  employeeForm: FormGroup;
  errorMessage: any;
  products = [];

  constructor(private fb: FormBuilder, private crudService: CrudService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeId: [],
      employeeName: [''],
      employeeSalary: ['']
    });

    this.getEmpDet();
  }

  getEmpDet() {
    this.crudService.getEmployees().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    })
  }


  saveEmployeeData(employeeDetails: EmployeeDetails) {
    this.crudService.createDetails(this.employeeForm.value)
      .subscribe(data => {
      });

  }

  editEmp(data: EmployeeDetails) {
    this.employeeForm = this.fb.group({
      employeeId: [data.id],
      employeeName: [data.employeeName],
      employeeSalary: [data.employeeSalary]
    });
  }

  deleteEmp(item: EmployeeDetails) {
    console.log(item);
    this.crudService.deleteEmployee(item.id)
      .subscribe((data: EmployeeDetails) => {
        this.getEmpDet();
      });
  }


  }

  


