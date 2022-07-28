import { Grid, Typography, Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const AddTodoButton = ({ handleFabClick }) => {
	return (
		<Grid
			container
			justifyContent="space-between"
			alignItems="center"
			style={{ padding: "1rem" }}
		>
			<Grid item>
				<Typography
					variant="h4"
					style={{ color: "darkblue", fontWeight: "bold" }}
				>
					TASKS TODO
				</Typography>
			</Grid>
			<Grid item>
				<Fab
					size="medium"
					style={{ backgroundColor: "darkblue", color: "white" }}
					onClick={handleFabClick}
				>
					<AddIcon />
				</Fab>
			</Grid>
		</Grid>
	)
}

export default AddTodoButton
