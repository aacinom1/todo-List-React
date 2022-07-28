import {
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Grid,
	DialogActions,
	Button,
} from "@mui/material"
import FormComponent from "./FormComponent"

const ModalComponent = (props) => {
	return (
		<Dialog style={{backgroundColor: "white"}} open={props.open} onClose={props.handleClose}>
			<DialogTitle marginBottom={2}>{props.isEditMode ? "Update Todo" : "Add a new task"}</DialogTitle>
			<DialogContent>
				<FormComponent formik={props.formik} />
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" onClick={props.handleClose}>Cancel</Button>
				<Button variant="contained" color="primary" onClick={props.handleSubmit}>{props.isEditMode ? "Update" : "Add"}</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ModalComponent
