export function GradientText({
  as: ComponentName = 'span',
  direction = 'right',
  fromColor = 'from-indigo-300',
  toColor = 'to-sky-300',
  className = '',
  ...restProps
}) {
  let directionClassName = '';

  switch (direction) {
    default:
    case 'r':
    case 'right':
      directionClassName = 'bg-gradient-to-r';
      break;
    case 'tr':
    case 'top right':
      directionClassName = 'bg-gradient-to-tr';
      break;
    case 'tl':
    case 'top left':
      directionClassName = 'bg-gradient-to-tl';
      break;
    case 'b':
    case 'bottom':
      directionClassName = 'bg-gradient-to-b';
      break;
    case 'br':
    case 'bottom right':
      directionClassName = 'bg-gradient-to-br';
      break;
    case 'bl':
    case 'bottom left':
      directionClassName = 'bg-gradient-to-bl';
  }

  return (
    <ComponentName
      className={`${directionClassName} ${fromColor} ${toColor} text-transparent text-center bg-clip-text font-black text-4xl ${className}`}
      {...restProps}
    >
      React Essentials
    </ComponentName>
  );
}
