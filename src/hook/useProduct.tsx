import { AppDispatch,RootState,AppStore } from "@/redux/store/store";
import { useSelector,useDispatch,useStore } from "react-redux";


export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<AppStore>()