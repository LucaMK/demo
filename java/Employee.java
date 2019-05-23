// import java.io.*;

public class Employee{
	String name;
	int age;
	String designation;
	double salary;
	// Employee 类的构造器
	public Employee(String name) {
		this.name = name;
	}
	// 设置age的值
	public void empAge (int empAge) {
		System.out.println(this);
		this.age = empAge;
	}
	// set designation value
	public void empDesignation (String empDesignation) {
		this.designation = empDesignation;
	}
	// set salary value
	public void empSalary (double empSalary) {
		this.salary = empSalary;
	}
	// print all key msg
	public void printEmployee() {
		System.out.println("name:" + name);
		System.out.println("age:" + age);
		System.out.println("designation:" + designation);
		System.out.println("salary:" + salary);
	}
}