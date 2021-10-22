export default function stringNewLine(string: string, limit: number) {
    if(string.length >= limit){
        const fullSplit = string.split('').filter((_, i) => i < +limit);
        const rev = fullSplit.reverse();
        const spaceIndestring = rev.findIndex(e => e == ' ');
        rev.splice(spaceIndestring, 0, '\n');
        return rev.reverse().join('').concat(string.split('').filter((_, i) => i > +limit).join(''));
    } else return string;
}