type VisibleProps<T> = {
  isVisible: T;
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export default function Visible<T>({
  isVisible,
  fallback,
  children,
}: VisibleProps<T>) {
  return Boolean(isVisible) ? children : fallback;
}
