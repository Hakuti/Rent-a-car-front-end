import {OPEN_WIZARD_MODAL} from '../../Constants/actiontypes';
// import {CLOSE__AVAILABILITY_MODAL} from '../../Constants/actiontypes';


export const openWizardModal = wizardModal => ({
    type: OPEN_WIZARD_MODAL,
    payload: (wizardModal)
})


export default openWizardModal;