public class Final {
	final int val = 10;

	final []String list = ['thisa ', 'asdhkljsdf'];

	public static final int BOXWIDTH = 5;

	static final String TITLE = "Manager";
	
	public static void changeValue () {
		val = 12;
	}

	public static void main(String[] args) {
		changeValue();
	}
}