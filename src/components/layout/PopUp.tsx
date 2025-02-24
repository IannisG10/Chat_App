import React from "react";
import { AlertDialog,
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogTitle

} from "../ui/alert-dialog";

const PopUp: React.FC = ()=> {
    return(
        <>
            <AlertDialog>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Etes vous sur de supprimmer ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Cette action irreversible . Votre article sera définitivement supprimé de votre catalogue
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Retour</AlertDialogCancel>
                        <AlertDialogAction>Supprimer</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default PopUp