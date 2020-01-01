
String reverse(String str) {
  String result = "";
    for(int i = str.length-1; i>=0 ; i--){
      result += str[i];
    }
  return result;
}
