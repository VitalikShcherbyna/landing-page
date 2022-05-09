import {ref} from "@vue/composition-api"

export default function useModalCreateEdit () {
  const itemToEdit = ref(null)
  const isShowDialog = ref(false)

  const toggleDialog = () => {
    isShowDialog.value = !isShowDialog.value
  }

  const handleOnEdit = (news) => {
    itemToEdit.value = news
    toggleDialog()
  }
  const handleOnCreate = () => {
    itemToEdit.value = null
    toggleDialog()
  }

  return {
    itemToEdit,
    isShowDialog,

    toggleDialog,
    handleOnEdit,
    handleOnCreate
  }
}
