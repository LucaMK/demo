public class FilterTheOne{

	private static int[] intList;
	
	public void setIntList(int[] list) {
		intList = list;
	}

	public int filter() {
		int sum = intList[0];
		for (int i = 1; i < intList.length; i++) {
			sum = sum^intList[i];
		}
		return sum;
	}

	public void whileFun() {
		int x = 10;
		while ( x < 20) {
			System.out.println("value of x:" + x);
			x++;
		}
	}

	public static void main(String[] args) {
		FilterTheOne test = new FilterTheOne();
		int[] list = {1,2,3,4,5,2,1,3,4};
		test.setIntList(list);	
		int odd = test.filter();
		System.out.println("出现奇数次的数为:" + odd);

		test.whileFun();
	}

}