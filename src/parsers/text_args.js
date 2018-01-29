import parseCommonArgs from './common_args';

export default function parseTextArgs(target) {
  const args = parseCommonArgs(target, 'text');
  args.text = (target.text || '').trim();
  return args;
}
