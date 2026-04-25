class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
     isAlphanumeric(c){
  return(
    (c >= 'a' && c <= 'z') ||
    (c >= 'A' && c <= 'Z') ||
    (c >= "0" && c <= "9")
  )
};

 isPalindrome(s){
    let my_str = "";
    for( let z of s){
        if(this.isAlphanumeric(z)){
          my_str += z.toLowerCase();
        }
    }
    return( my_str ===  my_str.split("").reverse().join("") )
}
}
