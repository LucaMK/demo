import java.text.*;
import java.util.*;
import java.util.regex.*;
import java.io.*;

public class TestDoWhile {
// 	public static void main(String args[]){
// 		int x = 10;

// 		do{
// 			 System.out.print("value of x : " + x );
// 			 x++;
// 			 System.out.print("\n");
// 		}while( x < 20 );
//  }

	// public static void main(String[] args) {
	// 	for (int x = 10; x < 20; x++) {
	// 		System.out.println("value of x :" + x);
	// 		System.out.println("\n");
	// 	}
	// }

	// public static void main(String[] args) {
	// 	int [] numbers = {10, 10, 30, 40, 40, 50};

	// 	for (int x : numbers) {
	// 		System.out.print(x);System.out.print(",");
	// 	}
	// }

	// public static void main(String[] args) {
	// 	int [] numbers = {10, 20, 30, 40, 50, 60};
	// 	for (int x : numbers) {
	// 		if (x == 30) {
	// 			break;
	// 		}

	// 		System.out.print(x);
	// 		System.out.print("\n");
	// 	}
	// }

	// public static void main(String[] args) {
	// 	int [] numbers = {12, 34, 43, 5, 6, 634};
		
	// 	for ( int x : numbers) {
	// 		if (x == 5) {
	// 			continue;
	// 		}
	// 		System.out.println(x);
	// 	}
	// }

	// public static void main(String[] args) {
	// 	int x = 20;
	// 	int y = 30;

	// 	if (x == 20) {
	// 		if (y == 30) {
	// 			System.out.println("x = 20 and y = 10");
	// 		}
	// 	}

	// 	Short st = 12;
	// 	boolean t = st instanceof Short;
	// 	System.out.print("this is t:" + t);
	// }

	// public static void main(String[] args) {
	// 	char [] helloArray = {'r', 'u', 'n', 'o', 'o', 'b'};
	
	// 	String helloString = new String(helloArray);
	
	// 	System.out.println(helloString);
	// }

	// static float f = 123.3f;
	// static int t = 123;
	// static String s = "sting line";
	
	// public static void main(String[] args) {
	// 	System.out.printf("浮点类型变量 " + "%f, 整型变量" + "%d, 字符变量值为 is %s", f, t, s);
	// }

	// public static void main(String[] args) {
	// 	String s = new String("fasdflksadjfkljsadf");
	// 	String Str1 = new String("runoob");
	// 	byte[] Str2 = Str1.getBytes();
	// 	char [] tt = s.toCharArray();
	// 	// System.out.print(Str2);
	// 	// System.out.println(s.indexOf("a"));
	// 	s = "slkdjfsdlfkj";
	// 	StringBuffer sBuffer = new StringBuffer("helloworld");
	// 	sBuffer.reverse();
	// 	System.out.println(sBuffer);
	// 	System.out.println(s);
	// 	System.out.println(tt);
	// 	System.out.println(s.hashCode());
	// }

	// public static void main(String[] args) {
	// 	int [] intArray1 = new int[12];
	// 	int [] intArray2 = new int[12];

	// 	Arrays.fill(intArray1, 1);
	// 	Arrays.fill(intArray2, 2);
	// 	System.out.println(intArray1.toString());
	// 	System.out.println(intArray2.toString());
	// }

	// public static void main(String[] args) {
	// 	Date time = new Date();
	// 	System.out.println(time.toString());
	// 	System.out.println(time.getTime());
	// 	System.out.println(time.equals(new Date()));

	// 	Date dNow = new Date();
	// 	SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	// 	// System.out.println(dNow);
	// 	// System.out.println(ft.format(dNow));
	// 	// System.out.printf("12h制: %tc%n", dNow);
	// 	// System.out.printf("12h制: %tR%n", dNow);
	// 	// System.out.printf("12h制: %tr%n", dNow);
	// 	String str = "2019-05-28 04:53:40";
	// 	try {
	// 		Date t = ft.parse(str);
	// 		System.out.println("time line:" + t);

	// 	} catch (ParseException e) {
	// 		System.out.println("using:" + ft);
	// 	}
	// }

	// public static void main(String[] args) {
	// 	try {
	// 		System.out.println(new Date() + "\n");
	// 		Thread.sleep(1000*3);
	// 		System.out.println(new Date() + "\n");
	// 	} catch (Exception e) {
	// 		System.out.println("Got an exception!");
	// 	}
	// }

		// public static void main(String[] args) {
		// 	// String content = "I am noob from runoob.com";
		// 	// String pattern = ".*runoob.*";
		// 	// boolean isMatch = Pattern.matches(pattern, content);
		// 	// System.out.println("字符串是否包含了'runoob'子字符串?" + isMatch);

		// 	// 指定模式在字符串查找
		// 	String line = "This order was placed for QT3000! OK?";
		// 	String pattern = "(\\D*)(\\d+)(.*)";
			
		// 	Pattern r = Pattern.compile(pattern);

		// 	Matcher m = r.matcher(line);

		// 	if (m.find()) {
		// 		System.out.println("Found value:" + m.group(0));
		// 		System.out.println("Found value:" + m.group(1));
		// 		System.out.println("Found value:" + m.group(2));
		// 		System.out.println("Found value:" + m.group(3));
		// 	} else {
		// 		System.out.println("NO Match");
		// 	}

		// }
		// private static int max (int num1, int num2) {
		// 	int result;
		// 	if (num1 > num2)
		// 		result = num1;
		// 	else
		// 		result = num2;
		// 	return result;
		// }

		// public static void main(String[] args) {
		// 	int i = 5;
		// 	int j = 2;
		// 	int k = max(i, j);
		// 	System.out.println(i + "&" + j + "比较, 最大值是:" + k);
		// }

		// public static void main(String[] args) {
		// 	for (int i = 0; i < args.length; i++) {
		// 		System.out.println("args[" + i + "]是:" + args[i]);
		// 	}
		// }
		// public static void main(String[] args) {
		// 	class Cake extends Object {
		// 		private int id;
		// 		public Cake(int id) {
		// 			this.id = id;
		// 			System.out.println("Cake object id:" + id + "is created");
		// 		}
	
		// 		protected void finalize() throws java.lang.Throwable {
		// 			super.finalize();
		// 			System.out.println("Cake object" + id + "is disposed");
		// 		}
		// 	}
		// 	Cake c1 = new Cake(1);
		// 	Cake c2 = new Cake(2);
		// 	Cake c3 = new Cake(3);
			
		// 	c2 = c3 = null;
		// 	System.gc();
		// }
		// 控制台读取
		//  public static void main(String[] args) throws IOException {
		// 		 char c;
		// 		 BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		// 		 System.out.println("输入字符按下qq键退出:");

		// 		 do {
		// 			 c = (char) br.read();
		// 			 System.out.println(c);
		// 		 } while ( c != 'q');
		//  }
		// 控制台输出

		// public static void main(String[] args) {
		// 	int b;
		// 	b = 'A';

		// 	System.out.write(b);
		// 	System.out.write('\n');

		// 	try {
		// 		// OutputStream f = new FileOutputStream("E:/test_package/demo/java/");
		// 		// File f = new File("E:/test_package/demo/java/hello");
		// 		// OutputStream f = new FileOutputStream(f);

		// 		byte [] bWrite = {2,3,4,53,5,23,4};
		// 		OutputStream os = new FileOutputStream("test.txt");
		// 		OutputStreamWriter writer = new OutputStreamWriter(os, "UTF-8");
		// 		writer.append("中文输入");
		// 		writer.append("\r\n");
		// 		writer.append("English");
		// 		writer.close();
		// 		os.close();
		// 		System.out.println("---------");
		// 		// for (int x = 0; x < bWrite.length; x ++) {
		// 		// 	os.write(bWrite[x]);
		// 		// }

		// 		// os.close();

		// 		FileInputStream is = new FileInputStream("test.txt");
		// 		InputStreamReader reader = new InputStreamReader(is, "UTF-8");

		// 		StringBuffer sb = new StringBuffer();
		// 		while ( reader.ready() ) {
		// 			sb.append((char) reader.read());
		// 		}

		// 		System.out.println(sb.toString());
		// 		reader.close();
		// 		is.close();
		// 		// int size = is.available();
		// 		// for (int i = 0; i < size; i++) {
		// 		// 	System.out.println((char) is.read() + " ");
		// 		// }
		// 		// is.close();


		// 	} catch (IOException e) {
		// 		System.out.print("Exception");
		// 	}

		// }
		
		public static void main(String[] args) {
				
		}

	}