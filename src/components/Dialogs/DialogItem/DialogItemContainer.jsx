import DialogItem from './DialogItem'
import Dialog from './Dialog/Dialog'
import { connect } from 'react-redux'

let mapStateToProps = (state) => ({
    dialogsObject: state.dialogsPage.dialogsData.map(dialogsData => {
        return (
            <Dialog dialogState={dialogsData} key={dialogsData.id}></Dialog>
        )
    })
})

let mapDispatchToProps = {
    // 
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem)
export default DialogItemContainer