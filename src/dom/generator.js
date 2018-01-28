import fontawesome from '@fortawesome/fontawesome';

export default function generateDOM(args){
  const copiedArgs = Object.assign({}, args);
  if(args.icon) {
    delete copiedArgs.icon;
    const icon = fontawesome.icon(args.icon, copiedArgs);
    return icon ? icon.node[0] : null;
  } else {
    delete copiedArgs.text;
    const text = fontawesome.text(args.text, copiedArgs);
    return text ? text.node[0] : null;
  }
}
