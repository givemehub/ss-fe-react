import VirtualDomRoot from './VirtualDomRoot.js';

export function createRoot(rootElement) {
  return new VirtualDomRoot(rootElement);
}
