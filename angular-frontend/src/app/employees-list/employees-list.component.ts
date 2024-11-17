import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeesService.getEmployeesList().subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error(err)
    });
  }

  employeeDetails(id: number): void {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number): void {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number): void {
    this.employeesService.deleteEmployee(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getEmployees();
      },
      error: (err) => console.error(err)
    });
  }
}
