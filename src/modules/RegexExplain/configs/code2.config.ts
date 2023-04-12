import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

export const codeBlock = new CodeBlockBuilder('b');
codeBlock.addLine('data = await fetch(url)');
codeBlock.addSpace();
/**
 * Add description
 * must add after add line to populate all desctiption to sibling
 *
 */
codeBlock
   .addLine("pattern = re.compile('<main[\u0000-\uFFFF]*id='ดูเพิ่ม'>ดูเพิ่ม</span>')")
   .addDescription(
      new Description()
         .addDetail(
            'The given code line is using the Python re module to create a regular expression pattern using the compile() function. The pattern is specified within the quotes, and it searches for the HTML element <main> with any number of characters (including none) between main and id= followed by the exact string ',
         )
         .addInput(
            "<html>\n<body>\n<main id='main1'>\n<span>Some content</span>\n<span>ดูเพิ่ม</span></main>\n<main id='main2'>\n<span>Some other content</span></main></body></html>",
         )
         .addOutput("<main id='main1'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )
   .addSibling(codeBlock.addLine('result = re.findall(pattern, data.text)'))
   .addSibling(codeBlock.addLine("pattern = re.compile('<li>.*</li>')"));

codeBlock.addSpace();

codeBlock
   .addLine("result = re.findall(pattern, '\\n'.join(result))")
   .addDescription(
      new Description()
         .addDetail(
            'The given code line is using the Python re module to create a regular expression pattern using the compile() function. The pattern is specified within the quotes, and it searches for the HTML element <main> with any number of characters (including none) between main and id= followed by the exact string ',
         )
         .addInput(
            "<html>\n<body>\n<main id='main1'>\n<span>Some content</span>\n<span>ดูเพิ่ม</span></main>\n<main id='main2'>\n<span>Some other content</span></main></body></html>",
         )
         .addOutput("<main id='main1'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )
   .addSibling(
      codeBlock.addLine("result = re.sub(' <a href=\".*ตำบล.*/a>', ' ตำบล', '\\n'.join(result))"),
   )
   .addSibling(codeBlock.addLine("result = re.sub('<li>.*? (ไม่มีหน้า)\">', '<li>', result)"))
   .addSibling(codeBlock.addLine("result = re.sub(' ตำบล.*', '</li>', result)"));

codeBlock.addSpace();

codeBlock.addLine("result = re.sub('<li><a href=\"', '<li>', result)");
codeBlock.addLine("result = re.sub('\" c', '<\"c', result)");
codeBlock.addLine("result = re.sub('\"class=\".*\"', '', result)");
codeBlock.addLine("result = re.sub('\"( )?t', ' <\"t', result)");
codeBlock.addLine("result = re.sub('<\"( )?title=\".*\">', '', result)");
codeBlock.addLine("result = re.sub('/wiki/', 'https://th.wikipedia.org/wiki/', result)");
codeBlock.addLine("result = re.sub('<li>วัด', '<li>https://www.google.com วัด', result)");
codeBlock.addLine("result = re.sub('( )?วัด', ' <h_0>วัด', result)");
codeBlock.addLine("result = re.sub('</li>', '</h_0></li>', result)");
codeBlock.addLine("result = re.sub(' (.*)', '', result)");
codeBlock.addLine("result = re.sub('<(/a)?>', '', result)");
codeBlock.addLine('return result');
