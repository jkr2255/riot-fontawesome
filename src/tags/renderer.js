import argsToJSON from '../utils/args_to_json';
import domGenerator from '../dom/generator';

export default function renderer(tag, parser){
  let oldArgsJSON = null;
  return () => {
    const target = tag.parent ? tag.opts : tag;
    const args = parser(target);
    const argsJSON = argsToJSON(args);
    if(argsJSON === oldArgsJSON) return;
    oldArgsJSON = argsJSON;
    const dom = domGenerator(argsJSON, target.cache);
    if(!dom) return;
    const first = tag.root.firstChild;
    if(first) {
      tag.root.replaceChild(dom, tag.root.firstChild);
    } else {
      tag.root.appendChild(dom);
    }
  }
}
