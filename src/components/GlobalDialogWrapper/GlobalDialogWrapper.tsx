import React, { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/Ui/Dialog"
import { toggleDialog } from "@/lib/store/slices/dialogSlice"
import Login from './Modals/Login';

export default function GlobalDialogWrapper({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const {isOpen,type} = useSelector((state: any) => state.dialog);

  const renderComponentFromType = () => {
    switch (type) {
      case 'login':
        return <Login/>; // Replace with your actual component
      default:
        return null; // Or a default component
    }
  };

  return (
    <>
    {children}
    <Dialog open={isOpen} onOpenChange={() => dispatch(toggleDialog())}>
      {renderComponentFromType()}
  </Dialog>
  </>
  )
}
