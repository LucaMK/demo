import java.io.*;
import Employee;

public class EmployeeTest{

	public static void main(String[] arg) {
			/* 使用构造器创建两个对象 */
			Employee empOne = new Employee("NO00001");
			Employee empTwo = new Employee("NO00002");

			// 调用连个方法的成员
			empOne.empAge(12);
			empOne.empDesignation("higer 高级程序员");
			empOne.empSalary(12398234);
			empOne.printEmployee();

			// 调用连个方法的成员
			empTwo.empAge(21);
			empTwo.empDesignation("higer 高级程序员");
			empTwo.empSalary(97515811);
			empTwo.printEmployee();
	}
}