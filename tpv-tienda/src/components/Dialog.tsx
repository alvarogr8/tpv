import './dialog.css'

interface DialogProps extends React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
  dialogRef: React.LegacyRef<HTMLDialogElement>
}
export function Dialog({ children, dialogRef, ...dialogProps }: DialogProps) {
  return <dialog ref={dialogRef} {...dialogProps}>{children}</dialog>
}