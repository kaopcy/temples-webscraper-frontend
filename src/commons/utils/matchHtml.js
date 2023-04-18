export function match_html(input) {
   let result = [];
   let tmp_str = input;
   let splited = [];
   let list_split_str = input.match(/<remove>.*?<\/remove>\n/g);

   for (let i = 0; i < list_split_str.length; i++) {
     let split_str = list_split_str[i];
     splited = tmp_str.split(split_str);
     result.push({ substr: splited[0], is_existed: true });
     result.push({ substr: split_str.replace('<remove>','').replace('</remove>\n',''), is_existed: false });
     tmp_str = tmp_str.substring(splited[0].length + split_str.length);
   }
   result.push({ substr: splited[1].split(list_split_str.slice(-1)[0])[0], is_existed: true });
   return result;
 }