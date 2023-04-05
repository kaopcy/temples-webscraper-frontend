import { Description } from './DescriptionBuilder';

export class CodeLine {
   private line: string = '';
   private description: Description | null = null;
   private zone: string = '';

   constructor(newLine: string, zone: string) {
      this.zone = zone;
      this.line = newLine;
   }
   getLine() {
      return this.line;
   }
   getZone() {
      return this.zone;
   }
   setZone(zone: string) {
      this.zone = zone;
      return this;
   }
   addDescription(description: Description) {
      this.description = description;
      return this;
   }
   getDescription() {
      return this.description;
   }
   addSibbling(newSibling: CodeLine) {
      newSibling.zone = this.zone;
      newSibling.description = this.description;
      return newSibling;
   }
}

export class CodeBlockBuilder {
   /** init code with 1 empty codeline
    *  becase line number from syntax highlighter always start at 1
    *  can't overwrite it
    */
   private code: CodeLine[] = [new CodeLine('', 'z-0')];
   private name: string = '';
   private description: string = '';

   constructor(name: string) {
      this.name = name;
   }

   addLine(line: string) {
      const zoneNum =
         this.code.length > 0
            ? parseInt(this.code[this.code.length - 1].getZone().split('-')[1]) + 1
            : 0;
      const newCodeLine = new CodeLine(line, `${this.name}-${zoneNum}`);
      this.code.push(newCodeLine);
      return newCodeLine;
   }

   addSpace() {
      return this.addLine('');
   }

   addDescription(description: string) {
      this.description = description;
      return this;
   }

   getLine(lineNum: number) {
      return this.code[lineNum];
   }

   getName() {
      return this.name;
   }

   getDescription() {
      return this.description;
   }

   getCode() {
      return this.code.reduce(
         (acc, cur) => `${acc}${acc.length == 0 ? '' : '\n'}${cur.getLine()}`,
         '',
      );
   }

   getAllSameZoneLine(lineNum: number) {
      return this.code.filter((e) => e.getZone() === this.getLine(lineNum).getZone());
   }

   getCodeSameZoneLine(lineNum: number): string {
      return this.getAllSameZoneLine(lineNum).reduce((acc, cur) => `${acc}\n${cur.getLine()}`, '');
   }
}
