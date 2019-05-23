public class TestSize {
	// static boolean bool;
	// static byte by;
	// static char ch = '\u0001';
	// static double d;
	// static float f;
	// static int i = 128;
	// static long l;
	// static short sh = 12;
	// static String str;
	// static String str1 = "123";
	// public static void main(String[] args) {
	// 	// f = i + f + d;
	// 		System.out.println((i + sh));
	// 		System.out.println("Bool :" + bool);
	// 		System.out.println("Byte :" + by);
	// 		System.out.println("Character:" + ch);
	// 		System.out.println("Double :" + d);
	// 		System.out.println("Float :" + f);
	// 		System.out.println("Integer :" + i);
	// 		System.out.println("Long :" + l);
	// 		System.out.println("Short :" + sh);
	// 		System.out.println("String :" + str);
	// 		System.out.println("String :" + str1);
	// }

// 	public static void main(String[] args){
// 		char c1='a';//定义一个char类型
// 		int i1 = c1;//char自动类型转换为int
// 		System.out.println("char自动类型转换为int后的值等于"+i1);
// 		char c2 = 'A';//定义一个char类型
// 		int i2 = c2+1;//char 类型和 int 类型计算
// 		System.out.println("char类型和int计算后的值等于"+i2);
// }
// static double d1 = 123.032;
// public static void main(String[] args){
// 			int i1 = 128;
// 			byte b = (byte)i1;//强制类型转换为byte
// 			System.out.println("this is print double" + d1);
// 			System.out.println("int强制类型转换为byte后的值等于"+b);
// 		}
	private String format;
	static String nameT;
	public void pupAge(){
      int age = 1;
      age = age + 7;
      System.out.println("小狗的年龄是 : " + age);
   }
	 
	  class AudioPlayer {
				protected void openSpeaker() {
					// 实现细节
					System.out.println("this is sp speaker:");
				}
		}
			
		 class StreamingAudioPlayer extends AudioPlayer {
				protected void openSpeaker() {
					// 实现细节
					System.out.println("ttttttt:");
				}
		}
   public static void main(String[] args){
			nameT = "ashtiajkdlajkdf";
			System.out.println(nameT);
			TestSize test = new TestSize();
			test.pupAge();
			AudioPlayer audio = test.new AudioPlayer();
			StreamingAudioPlayer streaming = test.new StreamingAudioPlayer();
			audio.openSpeaker();
			streaming.openSpeaker();
   }

		// public String getFormat() {
		// 		return this.format;
		// }
		// public void setFormat(String format) {
		// 		this.format = format;
		// }



}