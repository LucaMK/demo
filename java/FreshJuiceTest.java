
class FreshJuice {
	enum FreshJuiceSize{ SMALL, MEDIUM, LARGE}
	FreshJuiceSize size;
}

public class FreshJuiceTest {
	public FreshJuiceTest(String name) {
			// 这个构造器仅有一个参数
			System.out.println("this is fruit name" + name);
	}
	public static void main (String []args) {
		FreshJuiceTest testFresh = new FreshJuiceTest("apple");
		FreshJuice juice = new FreshJuice();
		juice.size = FreshJuice.FreshJuiceSize.MEDIUM;
		System.out.println(juice.size);
	}
}