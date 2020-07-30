
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import java.util.regex.*;

// Test test
public class DataInputStreamDemo {
   public static void main(String[] args) throws IOException {
      InputStream is = null;
      DataInputStream dis = null;
      
      String pattern = "This is no pattern";

      Pattern r = Pattern.compile("This is no pattern");

      try {
         // create file input stream
         is = new FileInputStream("test.txt");
         
         // create new data input stream
         dis = new DataInputStream(is);
         
         // available stream to be read
         int length = dis.available();
         
         // create buffer
         byte[] buf = new byte[length];
         
         // read the full data into the buffer
         dis.readFully(buf);
         //dis.read(buf);
         
         // for each byte in the buffer
         for (byte b:buf) {
         
            // convert byte to char
            char c = (char)b; 
            
            // prints character
            System.out.print(c);
         }
      
         Matcher m = r.matcher(buf.toString());

         if(m.find()) System.out.println("Found!");

      } catch(Exception e) {
         // if any error occurs
         e.printStackTrace();
      } finally {
         // releases all system resources from the streams
         if(is!=null)
            is.close();
         if(dis!=null)
            dis.close();
      }
   }
}