import { VirtualDomRoot } from './VirtualDomRoot.js';

export function createRoot(rootElement /* actual dom element */) {
  return new VirtualDomRoot(rootElement);
}
