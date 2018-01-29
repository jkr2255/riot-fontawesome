import normalizeIconArgs from '../utils/normalize_icon_args';
import parseCommonArgs from './common_args';


export default function parseIconArgs(target) {
  const args = parseCommonArgs(target, 'icon');
  args.icon = normalizeIconArgs(target.icon);
  args.mask = normalizeIconArgs(target.mask);
  return args;
}
